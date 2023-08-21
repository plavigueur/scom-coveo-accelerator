import chalk from 'chalk';
import inquirer from 'inquirer';
import puppeteer from 'puppeteer';
import axios from 'axios';
import crypto from 'crypto';

import sfSourceConfig from '../bin/sfSourceConfig.js';
import vaultParam from '../bin/vaultParam.js';

const TARGETS = {
    fullAccelerator: 'Full Accelerator',
    cloudOnly: 'Coveo Cloud Organization Setup Only',
    uiOnly: 'UI Package Only'
}

const CHOICES = {
    yes: 'Yes',
    no: 'No'
}

const ORG_CHOICE = {
    prod: 'Production (login.salesforce.com)',
    sandbox: 'Sandbox (test.salesforce.com)'
}

async function promptForOptions() {

    const questions = [{
        type: 'list',
        name: 'commandTarget',
        message: 'Please choose the command target',
        choices: [TARGETS.fullAccelerator, TARGETS.cloudOnly, TARGETS.uiOnly],
        default: TARGETS.fullAccelerator
    }, {
        type: 'string',
        name: 'seEmail',
        message: 'Salesforce solution engineer contact email',
        validate: (email) => {
            return !!email.match(/.{1,}@salesforce\.com/g)
        }
    }, {
        type: 'string',
        name: 'aeEmail',
        message: 'Salesforce account executive contact email'
    }, {
        type: 'string',
        name: 'prospectAccount',
        message: 'Please specify the target prospect account'
    }, {
        type: 'list',
        name: 'orgChoice',
        message: 'Choose the Salesforce organization type',
        choices: [ORG_CHOICE.prod, ORG_CHOICE.sandbox],
        default: ORG_CHOICE.prod
    }, {
        type: 'string',
        name: 'clientID',
        message: 'Enter your connected app client id'
    }, {
        type: 'string',
        name: 'clientSecret',
        message: 'Enter your connected app client secret'
    }];

    return await inquirer.prompt(questions);
}

async function promptForSourceOptions() {
    let answers = {};

    const firstScreen = await inquirer.prompt([{
        type: 'list',
        name: 'advancedIndexing',
        message: 'Will you create a dedicated Coveo org for this project (includes entitlements and custom pricing in search results, but increases complexity of deployment)',
        choices: [CHOICES.yes, CHOICES.no],
        default: CHOICES.no
    }]);

    if (firstScreen.advancedIndexing == CHOICES.yes) {
        answers = await inquirer.prompt([{
            type: 'string',
            name: 'customOrgId',
            message: 'Enter your own Coveo organization id'
        }, {
            type: 'string',
            name: 'customAccessToken',
            message: 'Enter your org\'s access token (needs extension create permission)'
        }]);
    }

    return {
        ...firstScreen,
        ...answers
    };
}

function handleBrowserAuthHandshakes(page, orgChoice) {
    console.log(chalk.white.bold('\nPerforming handshakes with oAuth providers (Salesforce and Coveo Platform [both need a Salesforce account])'));

    return new Promise(async (resolve, reject) => {
        try {
            let config = {
                refreshTokenGUID: '',
                accessToken: ''
            }

            await page.setRequestInterception(true);

            page.on('request', interceptedRequest => {
                if (interceptedRequest.isInterceptResolutionHandled()) return;

                // Salesforce Refresh Token GUID retrieved
                if (interceptedRequest.url().startsWith('https://docs.coveo.com/?refresh_token_guid') &&
                    interceptedRequest.url().includes('refresh_token_guid')) {

                    config.refreshTokenGUID = interceptedRequest.url().match(/(?<=refresh_token_guid=).*?(?=&)/ig)[0];
                    if (!!config.refreshTokenGUID) {
                        page.goto('https://platform.cloud.coveo.com/login');
                    }
                }

                // Coveo Access Token retrieved
                if (interceptedRequest.url() === 'https://platform.cloud.coveo.com/oauth/check_token') {

                    config.accessToken = interceptedRequest.postData().replace('token=', '');
                    if (!!config.accessToken) {
                        minimize(page);
                        resolve(config);
                    }
                }

                interceptedRequest.continue();
            });

            if (orgChoice == ORG_CHOICE.prod) {
                await page.goto('https://platform.cloud.coveo.com/rest/sourceTokenRetriever/salesforce/authorize?redirect_uri=https://docs.coveo.com&type=prod&promptLogin=true');
            } else if (orgChoice == ORG_CHOICE.sandbox) {
                await page.goto('https://platform.cloud.coveo.com/rest/sourceTokenRetriever/salesforce/authorize?redirect_uri=https://docs.coveo.com&type=sandbox&promptLogin=true');
            }
        } catch (err) {
            reject(err);
        }
    });
}

function installPackage(page, options) {
    maximize(page);
    return new Promise(async (resolve, reject) => {
        try {
            let coveoPackageURL;
            let acceleratorPackageURL;

            if (options.orgChoice == ORG_CHOICE.prod) {
                coveoPackageURL = 'https://login.salesforce.com/packaging/installPackage.apexp?p0=04t1P000000VY7F';
                acceleratorPackageURL = 'https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6S000001IQHRQA4';
            } else if (options.orgChoice == ORG_CHOICE.sandbox) {
                coveoPackageURL = 'https://test.salesforce.com/packaging/installPackage.apexp?p0=04t1P000000VY7F';
                acceleratorPackageURL = 'https://test.salesforce.com/packaging/installPackage.apexp?p0=04t6S000001IQHRQA4';
            }

            await page.setRequestInterception(true);

            page.on('request', async (interceptedRequest) => {
                if (interceptedRequest.isInterceptResolutionHandled()) return;

                if (interceptedRequest.url().includes('ipTooLong.app?apvId=04t1P000000VY7F')) {
                    minimize(page);
                    console.log(chalk.yellow.bold('\n**********************************************\nThe package is installing.\n**********************************************\n'));
                    console.log(chalk.white.bold('Wait until you receive the successful package install email'));

                    let response;
                    do {
                        response = await inquirer.prompt([{
                            type: 'list',
                            name: 'continue',
                            message: 'Is the Coveo for Salesforce v4.33 package installed?',
                            choices: [CHOICES.yes, CHOICES.no],
                            default: CHOICES.no
                        }]);
                    } while (response.continue !== CHOICES.yes);

                    maximize(page);
                    await page.goto(acceleratorPackageURL);
                }

                if (interceptedRequest.url().includes('ipTooLong.app?apvId=04t6S000001IQHRQA4')) {
                    minimize(page);
                    console.log(chalk.yellow.bold('\n**********************************************\nThe package is installing.\n**********************************************\n'));
                    console.log(chalk.white.bold('Wait until you receive the successful package install email\n'));

                    let response;
                    do {
                        response = await inquirer.prompt([{
                            type: 'list',
                            name: 'continue',
                            message: 'Is the scom-coveo-accelerator package installed?',
                            choices: [CHOICES.yes, CHOICES.no],
                            default: CHOICES.no
                        }]);
                    } while (response.continue !== CHOICES.yes);

                    resolve();
                }

                if (interceptedRequest.url().includes('ipSuccess.app?apvId=04t6S000001IQHRQA4')) {
                    minimize(page);
                    console.log(chalk.yellow.bold('\n**********************************************\nPackage installed!\n**********************************************\n'));
                    resolve();
                }

                interceptedRequest.continue();
            });

            await page.goto(coveoPackageURL);
        } catch (err) {
            reject(err);
        }
    });
}

async function createSalesforceSource(refreshTokenGUID, accessToken, options, sourceOptions) {
    try {
        console.log(chalk.white.bold('\nCreating Salesforce source... this may take a few minutes'));

        // const extensionId = createGetCommerceRelationshipsExtension(sourceOptions.customOrgId, sourceOptions.customAccessToken);

        const guid = crypto.randomUUID();
        [{ key: `client_id_${guid}`, value: options.clientID }, { key: `client_secret_${guid}`, value: options.clientSecret }].forEach(async (kv) => {
            vaultParam.key = kv.key;
            vaultParam.value = kv.value;
            if (sourceOptions.advancedIndexing) {
                vaultParam.scopes[0].id = (sourceOptions.advancedIndexing == CHOICES.yes ? 'salesforceb2b2cpartnerorganizationxhv1h1x0-wwjn4r4mzzv5bsivmavg2pkbju' : 'salesforceb2b2cpartnerorganizationxhv1h1x0-tpvl3wjhcivaha2r2azcxi2pry');
            } else {
                vaultParam.scopes[0].id = 'salesforceb2b2cpartnerorganizationxhv1h1x0-tpvl3wjhcivaha2r2azcxi2pry';
            }
            
            let data = JSON.stringify(vaultParam);

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://platform.cloud.coveo.com/rest/organizations/salesforceb2b2cpartnerorganizationxhv1h1x0/vaultentries',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                data: data
            };

            const vaultResponse = await axios.request(config);

            if (vaultResponse.status == 201) {
                console.log(chalk.green.bold(`Vault parameters client_id_${guid} created`));
            } else {
                console.log(chalk.yellow.bold(`[FAILED] ${response.statusText}: ${response?.data?.message}`));
            }
        });

        sfSourceConfig.oAuthRefreshTokenGuid = refreshTokenGUID;
        sfSourceConfig.name = `${options.seEmail} - ${options.prospectAccount}`;
        sfSourceConfig.sandbox = (options.orgChoice == ORG_CHOICE.prod ? false : true);
        sfSourceConfig.postConversionExtensions[0].extensionId = (sourceOptions.advancedIndexing == CHOICES.yes ? 'salesforceb2b2cpartnerorganizationxhv1h1x0-wwjn4r4mzzv5bsivmavg2pkbju' : 'salesforceb2b2cpartnerorganizationxhv1h1x0-tpvl3wjhcivaha2r2azcxi2pry');
        sfSourceConfig.postConversionExtensions[0].parameters.client_id_key = `client_id_${guid}`;
        sfSourceConfig.postConversionExtensions[0].parameters.client_secret_key = `client_secret_${guid}`;
        let data = JSON.stringify(sfSourceConfig);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://platform.cloud.coveo.com/rest/organizations/salesforceb2b2cpartnerorganizationxhv1h1x0/sources',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            data: data
        };

        const response = await axios.request(config);
        if (response.status == 201) {
            console.log(chalk.green.bold(`Source "${options.seEmail} - ${options.prospectAccount}" created`));
            console.log('\nYour source will now rebuild. This may take a few minutes depending on the amount of products in the Salesforce organization');
            return;
        } else {
            console.log(chalk.yellow.bold(`[FAILED] ${response.statusText}: ${response?.data?.message}`));
            return;
        }
    } catch (e) {
        console.log(chalk.red.bold(`[ERROR] ${error?.code}: ${error?.message}`));
        return;
    }
}

function createGetCommerceRelationshipsExtension(orgId, accessToken) {
    
}

export async function cli(args) {
    console.log(chalk.white.bold('Welcome to Coveo\'s Salesforce Commerce Cloud (SCOM) SE accelerator'));

    const options = await promptForOptions();

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized']
    });
    const page = (await browser.pages())[0];

    if (options.commandTarget == TARGETS.fullAccelerator || options.commandTarget == TARGETS.cloudOnly) {
        const { refreshTokenGUID, accessToken } = await handleBrowserAuthHandshakes(page, options.orgChoice);
        if (!!refreshTokenGUID && !!accessToken) {
            console.log(chalk.green.bold('Handshakes successful'));
        }

        const sourceOptions = await promptForSourceOptions();
        await createSalesforceSource(refreshTokenGUID, accessToken, options, sourceOptions);
    }

    if (options.commandTarget == TARGETS.fullAccelerator || options.commandTarget == TARGETS.uiOnly) {
        await installPackage(page, options);
    }

    console.log(chalk.green.bold('CLI completed successfully. Please follow the documentation to deploy the newly Coveo components in your community!'));
}

// Utils
async function minimize(page) {
    const session = await page.target().createCDPSession();
    const { windowId } = await session.send('Browser.getWindowForTarget');
    await session.send('Browser.setWindowBounds', { windowId, bounds: { windowState: 'minimized' } });
}

async function maximize(page) {
    const session = await page.target().createCDPSession();
    const { windowId } = await session.send('Browser.getWindowForTarget');
    await session.send('Browser.setWindowBounds', { windowId, bounds: { windowState: 'maximize' } });
}
