# SCOM Coveo Accelerator CLI

Usage: `scom-coveo-accelerator`

## Prerequisites
***
- Salesforce org features:
        Communities,
        B2BCommerce,
        B2CCommerceGMV
- [Connected App](#connected-app)
- [CMS Workspace Channel](#cms-workspace-channel)

## Options
***

- `Please choose the command target`
    - **Full Accelerator**: Will create the Coveo source and install the packages into the targetted Salesforce organization.
    - **Coveo Cloud Organization Setup Only**: Will only create the Coveo source.
    - **UI Package Only**: Will only install the packges into the targetted Salesforce organization.

- `Salesforce solution engineer contact email`: Requires a @salesforce.com account.

- `Salesforce account executive contact email`: The account executive associated to the current opportunity.

- `Please specify the target prospect account`: The prospect account the demo is intended for.

- `Choose the Salesforce organization type`:
    - Production (login.salesforce.com)
    - Sandbox (test.salesforce.com)

- `Enter your connected app client id`: The CLIENT_ID of the created connected app. This app is needed to index account-based pricing, entitlements and categories.

- `Enter your connected app client secret`: The CLIENT_SECRET of the created connected app. This app is needed to index account-based pricing, entitlements and categories.

- `Will you create a dedicated Coveo org for this project (includes entitlements and custom pricing in search results, but increases complexity of deployment)?`:
    - **yes [not supported yet]**: Allow the Salesforce SE to be owner of its own Coveo organization. This will enable the use of account based pricing and entitlements. This increases the deployment complexity.
    - **no**: Will use the shared Coveo organization. You will not have access to most of the platform's features. Account-based pricing and entitlements will be indexed, but not reflected in the search results (requires a custom token that only the yes option supports).


## Connected App
***

Create a new connected app with the following settings:

### Edit > API (Enable OAuth Settings)

- `Enable OAuth Settings`: true
- `Enable for Device Flow`: true
- `Callback URL`: Leave as is
    - Should be "https://[login or test].salesforce.com/services/oauth2/success"
- `Selected OAuth Scopes`:
    - Full access (full)
    - Perform requests at any time (refresh_token, offline_access)
- `Require Secret for Web Server Flow`: true
- `Enable Client Credentials Flow`: true

### Manage > Edit Policies

- `Client Credentials Flow`:
    - Run As: A user that has permissions to perform SOQL queries and that has access to the commerce objects.

### Setup

Setup > OAuth and OpenID Connect Settings > Allow Authorization Code and Credentials Flows: `true`

## CMS Workspace Channel
***

Assign a default channel to the store's CMS workspace (needed to fetch the images from the CMS and display them in the search results).

## Post Installation Steps
***

Since the commerce templates do not allow to replace the search box compoent via the builder, we need to do a little bit of theme JSON manipulation.

1. Using SFDX, create a new project and connect it to your Salesforce organization

2. Using either the org browser VS Code extension or the manifest, retrieve the Experience Bundle of your commerce site.

3. Under the experiences > {your-store-name} > themes > {your-selected-commerce-theme}, locate the search box component.

    - In the b2CCommerce template case, this is `commerce_builder:searchInput`.

4. Replace the component name by `c:quantic4CommerceStandaloneSearchBox`.

5. Add the following component attribute:

```
    "componentAttributes" : {
        "engineId" : "example-search"
    },
```

6. Re-upload to the Salesforce org.