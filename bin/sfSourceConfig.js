const sfSourceConfig = {
    "sourceType": "SALESFORCE",
    "sourceVisibility": "SHARED",
    "name": "",
    "oAuthRefreshTokenGuid": "",
    "sandbox": false,
    "rebuildRequired": true,
    "schemaVersion": "EXPRESS",
    "objectsToGet": [
        {
            "type": "SERVICE_CLOUD",
            "name": "Product2",
            "label": "Product",
            "indexed": true,
            "filesIndexed": true,
            "canHaveFiles": true,
            "custom": false,
            "fields": [
                {
                    "name": "CreatedById",
                    "label": "Created By ID",
                    "type": "reference",
                    "indexed": true,
                    "mandatory": false,
                    "custom": false,
                    "mappings": [
                        {
                            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-x22iis7d337oohbsm76vvwkbgi",
                            "kind": "MAPPING",
                            "type": "Product2",
                            "fieldName": "sfcreatedbyid",
                            "extractionMethod": "METADATA",
                            "content": "%[CreatedById]",
                            "rules": [
                                "%[CreatedById]"
                            ]
                        }
                    ]
                },
                {
                    "name": "CreatedDate",
                    "label": "Created Date",
                    "type": "datetime",
                    "indexed": true,
                    "mandatory": false,
                    "custom": false,
                    "mappings": [
                        {
                            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-wvavqaknnebtka7gwejxsy2mqy",
                            "kind": "MAPPING",
                            "type": "Product2",
                            "fieldName": "sfcreateddate",
                            "extractionMethod": "METADATA",
                            "content": "%[CreatedDate]",
                            "rules": [
                                "%[CreatedDate]"
                            ]
                        }
                    ]
                },
                {
                    "name": "Description",
                    "label": "Product Description",
                    "type": "textarea",
                    "indexed": true,
                    "mandatory": false,
                    "custom": false,
                    "mappings": [
                        {
                            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-tmtvn3l6aefp2coqgvplp3knia",
                            "kind": "MAPPING",
                            "type": "Product2",
                            "fieldName": "sfdescription",
                            "extractionMethod": "METADATA",
                            "content": "%[Description]",
                            "rules": [
                                "%[Description]"
                            ]
                        },
                        {
                            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-rs56b5w5wudqbzyjh5yjg7cpay",
                            "kind": "MAPPING",
                            "type": "Product2",
                            "fieldName": "ec_description",
                            "extractionMethod": "METADATA",
                            "content": "%[Description]",
                            "rules": [
                                "%[Description]"
                            ]
                        }
                    ]
                },
                {
                    "name": "DisplayUrl",
                    "label": "Display URL",
                    "type": "url",
                    "indexed": true,
                    "mandatory": false,
                    "custom": false,
                    "mappings": [
                        {
                            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-x3dcuhhwad5erzesi7ftyykd7m",
                            "kind": "MAPPING",
                            "type": "Product2",
                            "fieldName": "sfdisplayurl",
                            "extractionMethod": "METADATA",
                            "content": "%[DisplayUrl]",
                            "rules": [
                                "%[DisplayUrl]"
                            ]
                        }
                    ]
                },
                {
                    "name": "ExternalDataSourceId",
                    "label": "External Data Source ID",
                    "type": "reference",
                    "indexed": true,
                    "mandatory": false,
                    "custom": false,
                    "mappings": [
                        {
                            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-qnqngqdsuj725473syvhydclpu",
                            "kind": "MAPPING",
                            "type": "Product2",
                            "fieldName": "sfexternaldatasourceid",
                            "extractionMethod": "METADATA",
                            "content": "%[ExternalDataSourceId]",
                            "rules": [
                                "%[ExternalDataSourceId]"
                            ]
                        }
                    ]
                },
                {
                    "name": "ExternalId",
                    "label": "External ID",
                    "type": "string",
                    "indexed": true,
                    "mandatory": false,
                    "custom": false,
                    "mappings": [
                        {
                            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-qbxcsncnnvgp7ewwmjfhnvckhy",
                            "kind": "MAPPING",
                            "type": "Product2",
                            "fieldName": "sfexternalid",
                            "extractionMethod": "METADATA",
                            "content": "%[ExternalId]",
                            "rules": [
                                "%[ExternalId]"
                            ]
                        }
                    ]
                },
                {
                    "name": "Family",
                    "label": "Product Family",
                    "type": "picklist",
                    "indexed": true,
                    "mandatory": false,
                    "custom": false,
                    "mappings": [
                        {
                            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-rxetpjmykd5t3bkezq4uo2kp2y",
                            "kind": "MAPPING",
                            "type": "Product2",
                            "fieldName": "sffamily",
                            "extractionMethod": "METADATA",
                            "content": "%[Family]",
                            "rules": [
                                "%[Family]"
                            ]
                        }
                    ]
                },
                {
                    "name": "Id",
                    "label": "Product ID",
                    "type": "id",
                    "indexed": true,
                    "mandatory": true,
                    "custom": false,
                    "mappings": [
                        {
                            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-rs3zrxozdzihckfhpueotfcoim",
                            "kind": "MAPPING",
                            "type": "Product2",
                            "fieldName": "sfid",
                            "extractionMethod": "METADATA",
                            "content": "%[Id]",
                            "rules": [
                                "%[Id]"
                            ]
                        }
                    ]
                },
                {
                    "name": "IsActive",
                    "label": "Active",
                    "type": "boolean",
                    "indexed": true,
                    "mandatory": false,
                    "custom": false,
                    "mappings": [
                        {
                            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-qz3da22fjxp7gyehon2h4jklsq",
                            "kind": "MAPPING",
                            "type": "Product2",
                            "fieldName": "sfisactive",
                            "extractionMethod": "METADATA",
                            "content": "%[IsActive]",
                            "rules": [
                                "%[IsActive]"
                            ]
                        }
                    ]
                },
                {
                    "name": "IsArchived",
                    "label": "Archived",
                    "type": "boolean",
                    "indexed": true,
                    "mandatory": false,
                    "custom": false,
                    "mappings": [
                        {
                            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-w2qsnhpuftxlgoltxihoxw2ha4",
                            "kind": "MAPPING",
                            "type": "Product2",
                            "fieldName": "sfisarchived",
                            "extractionMethod": "METADATA",
                            "content": "%[IsArchived]",
                            "rules": [
                                "%[IsArchived]"
                            ]
                        }
                    ]
                },
                {
                    "name": "IsDeleted",
                    "label": "Deleted",
                    "type": "boolean",
                    "indexed": true,
                    "mandatory": false,
                    "custom": false,
                    "mappings": [
                        {
                            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-ujdudlpdye67prhftabhmqkgxe",
                            "kind": "MAPPING",
                            "type": "Product2",
                            "fieldName": "sfisdeleted",
                            "extractionMethod": "METADATA",
                            "content": "%[IsDeleted]",
                            "rules": [
                                "%[IsDeleted]"
                            ]
                        }
                    ]
                },
                {
                    "name": "LastModifiedById",
                    "label": "Last Modified By ID",
                    "type": "reference",
                    "indexed": true,
                    "mandatory": false,
                    "custom": false,
                    "mappings": [
                        {
                            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-ta2vdgkpbqu53xnv6pjiqrcg54",
                            "kind": "MAPPING",
                            "type": "Product2",
                            "fieldName": "sflastmodifiedbyid",
                            "extractionMethod": "METADATA",
                            "content": "%[LastModifiedById]",
                            "rules": [
                                "%[LastModifiedById]"
                            ]
                        }
                    ]
                },
                {
                    "name": "LastModifiedDate",
                    "label": "Last Modified Date",
                    "type": "datetime",
                    "indexed": true,
                    "mandatory": false,
                    "custom": false,
                    "mappings": [
                        {
                            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-tdzcttdjtchv5fqagic2eb2cru",
                            "kind": "MAPPING",
                            "type": "Product2",
                            "fieldName": "sflastmodifieddate",
                            "extractionMethod": "METADATA",
                            "content": "%[LastModifiedDate]",
                            "rules": [
                                "%[LastModifiedDate]"
                            ]
                        }
                    ]
                },
                {
                    "name": "LastReferencedDate",
                    "label": "Last Referenced Date",
                    "type": "datetime",
                    "indexed": true,
                    "mandatory": false,
                    "custom": false,
                    "mappings": [
                        {
                            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-uy6btouabbico5uwm3w46usooq",
                            "kind": "MAPPING",
                            "type": "Product2",
                            "fieldName": "sflastreferenceddate",
                            "extractionMethod": "METADATA",
                            "content": "%[LastReferencedDate]",
                            "rules": [
                                "%[LastReferencedDate]"
                            ]
                        }
                    ]
                },
                {
                    "name": "LastViewedDate",
                    "label": "Last Viewed Date",
                    "type": "datetime",
                    "indexed": true,
                    "mandatory": false,
                    "custom": false,
                    "mappings": [
                        {
                            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-s3keh52omrwi62fydvqhfg2nze",
                            "kind": "MAPPING",
                            "type": "Product2",
                            "fieldName": "sflastvieweddate",
                            "extractionMethod": "METADATA",
                            "content": "%[LastViewedDate]",
                            "rules": [
                                "%[LastViewedDate]"
                            ]
                        }
                    ]
                },
                {
                    "name": "Name",
                    "label": "Product Name",
                    "type": "string",
                    "indexed": true,
                    "mandatory": false,
                    "custom": false,
                    "mappings": [
                        {
                            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-sxveen3cwpnalxthccurh4sheu",
                            "kind": "MAPPING",
                            "type": "Product2",
                            "fieldName": "sfname",
                            "extractionMethod": "METADATA",
                            "content": "%[Name]",
                            "rules": [
                                "%[Name]"
                            ]
                        },
                        {
                            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-sgf233dbu4dh3h7y4zc2qlsdr4",
                            "kind": "MAPPING",
                            "type": "Product2",
                            "fieldName": "ec_name",
                            "extractionMethod": "METADATA",
                            "content": "%[Name]",
                            "rules": [
                                "%[Name]"
                            ]
                        }
                    ]
                },
                {
                    "name": "ProductClass",
                    "label": "Product Class",
                    "type": "picklist",
                    "indexed": true,
                    "mandatory": false,
                    "custom": false,
                    "mappings": [
                        {
                            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-rg2ywsrmiehtshl2irdd2bsp4a",
                            "kind": "MAPPING",
                            "type": "Product2",
                            "fieldName": "sfproductclass",
                            "extractionMethod": "METADATA",
                            "content": "%[ProductClass]",
                            "rules": [
                                "%[ProductClass]"
                            ]
                        }
                    ]
                },
                {
                    "name": "ProductCode",
                    "label": "Product Code",
                    "type": "string",
                    "indexed": true,
                    "mandatory": false,
                    "custom": false,
                    "mappings": [
                        {
                            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-r27epgqqq5vjbmly5sqpfvckrm",
                            "kind": "MAPPING",
                            "type": "Product2",
                            "fieldName": "sfproductcode",
                            "extractionMethod": "METADATA",
                            "content": "%[ProductCode]",
                            "rules": [
                                "%[ProductCode]"
                            ]
                        }
                    ]
                },
                {
                    "name": "QuantityUnitOfMeasure",
                    "label": "Quantity Unit Of Measure",
                    "type": "picklist",
                    "indexed": true,
                    "mandatory": false,
                    "custom": false,
                    "mappings": [
                        {
                            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-tjbk2puib27g6ivsofzasccpba",
                            "kind": "MAPPING",
                            "type": "Product2",
                            "fieldName": "sfquantityunitofmeasure",
                            "extractionMethod": "METADATA",
                            "content": "%[QuantityUnitOfMeasure]",
                            "rules": [
                                "%[QuantityUnitOfMeasure]"
                            ]
                        }
                    ]
                },
                {
                    "name": "StockKeepingUnit",
                    "label": "Product SKU",
                    "type": "string",
                    "indexed": true,
                    "mandatory": false,
                    "custom": false,
                    "mappings": [
                        {
                            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-qlqsq65nr5l75p6uj4vf2jcdse",
                            "kind": "MAPPING",
                            "type": "Product2",
                            "fieldName": "sfstockkeepingunit",
                            "extractionMethod": "METADATA",
                            "content": "%[StockKeepingUnit]",
                            "rules": [
                                "%[StockKeepingUnit]"
                            ]
                        }
                    ]
                },
                {
                    "name": "SystemModstamp",
                    "label": "System Modstamp",
                    "type": "datetime",
                    "indexed": true,
                    "mandatory": false,
                    "custom": false,
                    "mappings": [
                        {
                            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-v6okre6m2fnthzqkteqc2pscue",
                            "kind": "MAPPING",
                            "type": "Product2",
                            "fieldName": "sfsystemmodstamp",
                            "extractionMethod": "METADATA",
                            "content": "%[SystemModstamp]",
                            "rules": [
                                "%[SystemModstamp]"
                            ]
                        }
                    ]
                },
                {
                    "name": "TaxPolicyId",
                    "label": "Tax Policy ID",
                    "type": "reference",
                    "indexed": false,
                    "mandatory": false,
                    "custom": false,
                    "mappings": [
                        {
                            "type": "Product2",
                            "fieldName": "SfTaxPolicyId",
                            "extractionMethod": "METADATA",
                            "content": "%[TaxPolicyId]",
                            "fieldTypeHint": "STRING"
                        }
                    ]
                },
                {
                    "name": "Type",
                    "label": "Product Type",
                    "type": "picklist",
                    "indexed": true,
                    "mandatory": false,
                    "custom": false,
                    "mappings": [
                        {
                            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-t2xnrytlzcg4dgrivuikv5sjgu",
                            "kind": "MAPPING",
                            "type": "Product2",
                            "fieldName": "sftype",
                            "extractionMethod": "METADATA",
                            "content": "%[Type]",
                            "rules": [
                                "%[Type]"
                            ]
                        }
                    ]
                }
            ],
            "relationships": [
                {
                    "relationshipName": "Assets",
                    "relationshipType": "CHILD",
                    "referenceField": "Product2Id",
                    "referencesTo": [
                        "Asset"
                    ]
                },
                {
                    "relationshipName": "Attachments",
                    "relationshipType": "CHILD",
                    "referenceField": "ParentId",
                    "referencesTo": [
                        "Attachment"
                    ]
                },
                {
                    "relationshipName": "Cases",
                    "relationshipType": "CHILD",
                    "referenceField": "ProductId",
                    "referencesTo": [
                        "Case"
                    ]
                },
                {
                    "relationshipName": "ChildProductRelatedComponents",
                    "relationshipType": "CHILD",
                    "referenceField": "ParentProductId",
                    "referencesTo": [
                        "ProductRelatedComponent"
                    ]
                },
                {
                    "relationshipName": "CommerceEntitlementProducts",
                    "relationshipType": "CHILD",
                    "referenceField": "ProductId",
                    "referencesTo": [
                        "CommerceEntitlementProduct"
                    ],
                    "fields": [
                        {
                            "name": "CreatedById",
                            "label": "CommerceEntitlementProducts / Created By ID",
                            "type": "reference",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfcommerceentitlementproductscreatedbyid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[CommerceEntitlementProducts.CreatedById]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "CreatedDate",
                            "label": "CommerceEntitlementProducts / Created Date",
                            "type": "datetime",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfcommerceentitlementproductscreateddate",
                                    "extractionMethod": "METADATA",
                                    "content": "%[CommerceEntitlementProducts.CreatedDate]",
                                    "fieldTypeHint": "DATE"
                                }
                            ]
                        },
                        {
                            "name": "Id",
                            "label": "CommerceEntitlementProducts / Entitlement Product ID",
                            "type": "id",
                            "indexed": true,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-sebv5pqsuacr3t27jjf52tskhy",
                                    "kind": "MAPPING",
                                    "type": "Product2",
                                    "fieldName": "sfcommerceentitlementproductsid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[CommerceEntitlementProducts.Id]",
                                    "rules": [
                                        "%[CommerceEntitlementProducts.Id]"
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "IsDeleted",
                            "label": "CommerceEntitlementProducts / Deleted",
                            "type": "boolean",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfcommerceentitlementproductsisdeleted",
                                    "extractionMethod": "METADATA",
                                    "content": "%[CommerceEntitlementProducts.IsDeleted]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "LastModifiedById",
                            "label": "CommerceEntitlementProducts / Last Modified By ID",
                            "type": "reference",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfcommerceentitlementproductslastmodifiedbyid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[CommerceEntitlementProducts.LastModifiedById]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "LastModifiedDate",
                            "label": "CommerceEntitlementProducts / Last Modified Date",
                            "type": "datetime",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfcommerceentitlementproductslastmodifieddate",
                                    "extractionMethod": "METADATA",
                                    "content": "%[CommerceEntitlementProducts.LastModifiedDate]",
                                    "fieldTypeHint": "DATE"
                                }
                            ]
                        },
                        {
                            "name": "Name",
                            "label": "CommerceEntitlementProducts / Name",
                            "type": "string",
                            "indexed": true,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-t3pc4p4orvctufog4qxikoklhm",
                                    "kind": "MAPPING",
                                    "type": "Product2",
                                    "fieldName": "sfcommerceentitlementproductsname",
                                    "extractionMethod": "METADATA",
                                    "content": "%[CommerceEntitlementProducts.Name]",
                                    "rules": [
                                        "%[CommerceEntitlementProducts.Name]"
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "PolicyId",
                            "label": "CommerceEntitlementProducts / Entitlement Policy ID",
                            "type": "reference",
                            "indexed": true,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-wbnrasfm27h2ltrk4yid4ackwq",
                                    "kind": "MAPPING",
                                    "type": "Product2",
                                    "fieldName": "sfcommerceentitlementproductspolicyid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[CommerceEntitlementProducts.PolicyId]",
                                    "rules": [
                                        "%[CommerceEntitlementProducts.PolicyId]"
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "ProductId",
                            "label": "CommerceEntitlementProducts / Product ID",
                            "type": "reference",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfcommerceentitlementproductsproductid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[CommerceEntitlementProducts.ProductId]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "SystemModstamp",
                            "label": "CommerceEntitlementProducts / System Modstamp",
                            "type": "datetime",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfcommerceentitlementproductssystemmodstamp",
                                    "extractionMethod": "METADATA",
                                    "content": "%[CommerceEntitlementProducts.SystemModstamp]",
                                    "fieldTypeHint": "DATE"
                                }
                            ]
                        }
                    ],
                    "relationships": []
                },
                {
                    "relationshipName": "ContentDocumentLinks",
                    "relationshipType": "CHILD",
                    "referenceField": "LinkedEntityId",
                    "referencesTo": [
                        "ContentDocumentLink"
                    ],
                    "fields": [
                        {
                            "name": "ContentDocumentId",
                            "label": "ContentDocumentLinks / ContentDocument ID",
                            "type": "reference",
                            "indexed": true,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-rbzvtjd5ska2nhicciqrkhsnfm",
                                    "kind": "MAPPING",
                                    "type": "Product2",
                                    "fieldName": "sfcontentdocumentlinkscontentdocumentid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ContentDocumentLinks.ContentDocumentId]",
                                    "rules": [
                                        "%[ContentDocumentLinks.ContentDocumentId]"
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Id",
                            "label": "ContentDocumentLinks / ContentDocumentLink ID",
                            "type": "id",
                            "indexed": true,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-rfsk4lpnxrbecflmmpedc4kdxe",
                                    "kind": "MAPPING",
                                    "type": "Product2",
                                    "fieldName": "sfcontentdocumentlinksid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ContentDocumentLinks.Id]",
                                    "rules": [
                                        "%[ContentDocumentLinks.Id]"
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "IsDeleted",
                            "label": "ContentDocumentLinks / Is Deleted",
                            "type": "boolean",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfcontentdocumentlinksisdeleted",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ContentDocumentLinks.IsDeleted]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "LinkedEntityId",
                            "label": "ContentDocumentLinks / Linked Entity ID",
                            "type": "reference",
                            "indexed": true,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-tzw7txsx36evoltjhxkoeocpzi",
                                    "kind": "MAPPING",
                                    "type": "Product2",
                                    "fieldName": "sfcontentdocumentlinkslinkedentityid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ContentDocumentLinks.LinkedEntityId]",
                                    "rules": [
                                        "%[ContentDocumentLinks.LinkedEntityId]"
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "ShareType",
                            "label": "ContentDocumentLinks / Share Type",
                            "type": "picklist",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfcontentdocumentlinkssharetype",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ContentDocumentLinks.ShareType]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "SystemModstamp",
                            "label": "ContentDocumentLinks / System Modstamp",
                            "type": "datetime",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfcontentdocumentlinkssystemmodstamp",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ContentDocumentLinks.SystemModstamp]",
                                    "fieldTypeHint": "DATE"
                                }
                            ]
                        },
                        {
                            "name": "Visibility",
                            "label": "ContentDocumentLinks / Visibility",
                            "type": "picklist",
                            "indexed": true,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-uwvbr2kulynjvgz2fnmtpjkibi",
                                    "kind": "MAPPING",
                                    "type": "Product2",
                                    "fieldName": "sfcontentdocumentlinksvisibility",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ContentDocumentLinks.Visibility]",
                                    "rules": [
                                        "%[ContentDocumentLinks.Visibility]"
                                    ]
                                }
                            ]
                        }
                    ],
                    "relationships": []
                },
                {
                    "relationshipName": "ContractLineItems",
                    "relationshipType": "CHILD",
                    "referenceField": "Product2Id",
                    "referencesTo": [
                        "ContractLineItem"
                    ]
                },
                {
                    "relationshipName": "CreatedBy",
                    "relationshipType": "NON_POLYMORPHIC_PARENT",
                    "referenceField": "CreatedById",
                    "referencesTo": [
                        "User"
                    ]
                },
                {
                    "relationshipName": "CreditMemoLines",
                    "relationshipType": "CHILD",
                    "referenceField": "Product2Id",
                    "referencesTo": [
                        "CreditMemoLine"
                    ]
                },
                {
                    "relationshipName": "Emails",
                    "relationshipType": "CHILD",
                    "referenceField": "RelatedToId",
                    "referencesTo": [
                        "EmailMessage"
                    ]
                },
                {
                    "relationshipName": "Events",
                    "relationshipType": "CHILD",
                    "referenceField": "WhatId",
                    "referencesTo": [
                        "Event"
                    ]
                },
                {
                    "relationshipName": "FeedSubscriptionsForEntity",
                    "relationshipType": "CHILD",
                    "referenceField": "ParentId",
                    "referencesTo": [
                        "EntitySubscription"
                    ]
                },
                {
                    "relationshipName": "Feeds",
                    "relationshipType": "CHILD",
                    "referenceField": "ParentId",
                    "referencesTo": [
                        "Product2Feed"
                    ]
                },
                {
                    "relationshipName": "InvoiceLines",
                    "relationshipType": "CHILD",
                    "referenceField": "Product2Id",
                    "referencesTo": [
                        "InvoiceLine"
                    ]
                },
                {
                    "relationshipName": "LastModifiedBy",
                    "relationshipType": "NON_POLYMORPHIC_PARENT",
                    "referenceField": "LastModifiedById",
                    "referencesTo": [
                        "User"
                    ]
                },
                {
                    "relationshipName": "NetworkUserHistoryRecentToRecord",
                    "relationshipType": "CHILD",
                    "referenceField": "RecordId",
                    "referencesTo": [
                        "NetworkUserHistoryRecent"
                    ]
                },
                {
                    "relationshipName": "Notes",
                    "relationshipType": "CHILD",
                    "referenceField": "ParentId",
                    "referencesTo": [
                        "Note"
                    ]
                },
                {
                    "relationshipName": "OrderItemSummaries",
                    "relationshipType": "CHILD",
                    "referenceField": "Product2Id",
                    "referencesTo": [
                        "OrderItemSummary"
                    ]
                },
                {
                    "relationshipName": "ParentEntities",
                    "relationshipType": "CHILD",
                    "referenceField": "ParentEntityId",
                    "referencesTo": [
                        "NetworkActivityAudit"
                    ]
                },
                {
                    "relationshipName": "ParentProductRelatedComponents",
                    "relationshipType": "CHILD",
                    "referenceField": "ChildProductId",
                    "referencesTo": [
                        "ProductRelatedComponent"
                    ]
                },
                {
                    "relationshipName": "PricebookEntries",
                    "relationshipType": "CHILD",
                    "referenceField": "Product2Id",
                    "referencesTo": [
                        "PricebookEntry"
                    ],
                    "fields": [
                        {
                            "name": "ActivePriceAdjustmentQuantity",
                            "label": "PricebookEntries / Active Price Adjustments",
                            "type": "int",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfpricebookentriesactivepriceadjustmentquantity",
                                    "extractionMethod": "METADATA",
                                    "content": "%[PricebookEntries.ActivePriceAdjustmentQuantity]",
                                    "fieldTypeHint": "LONG"
                                }
                            ]
                        },
                        {
                            "name": "CreatedById",
                            "label": "PricebookEntries / Created By ID",
                            "type": "reference",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfpricebookentriescreatedbyid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[PricebookEntries.CreatedById]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "CreatedDate",
                            "label": "PricebookEntries / Created Date",
                            "type": "datetime",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfpricebookentriescreateddate",
                                    "extractionMethod": "METADATA",
                                    "content": "%[PricebookEntries.CreatedDate]",
                                    "fieldTypeHint": "DATE"
                                }
                            ]
                        },
                        {
                            "name": "Id",
                            "label": "PricebookEntries / Price Book Entry ID",
                            "type": "id",
                            "indexed": true,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-qqx4cvgzqyec7ylpbocomw2k6i",
                                    "kind": "MAPPING",
                                    "type": "Product2",
                                    "fieldName": "sfpricebookentriesid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[PricebookEntries.Id]",
                                    "rules": [
                                        "%[PricebookEntries.Id]"
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "IsActive",
                            "label": "PricebookEntries / Active",
                            "type": "boolean",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfpricebookentriesisactive",
                                    "extractionMethod": "METADATA",
                                    "content": "%[PricebookEntries.IsActive]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "IsArchived",
                            "label": "PricebookEntries / Archived",
                            "type": "boolean",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfpricebookentriesisarchived",
                                    "extractionMethod": "METADATA",
                                    "content": "%[PricebookEntries.IsArchived]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "IsDeleted",
                            "label": "PricebookEntries / Deleted",
                            "type": "boolean",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfpricebookentriesisdeleted",
                                    "extractionMethod": "METADATA",
                                    "content": "%[PricebookEntries.IsDeleted]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "LastModifiedById",
                            "label": "PricebookEntries / Last Modified By ID",
                            "type": "reference",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfpricebookentrieslastmodifiedbyid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[PricebookEntries.LastModifiedById]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "LastModifiedDate",
                            "label": "PricebookEntries / Last Modified Date",
                            "type": "datetime",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfpricebookentrieslastmodifieddate",
                                    "extractionMethod": "METADATA",
                                    "content": "%[PricebookEntries.LastModifiedDate]",
                                    "fieldTypeHint": "DATE"
                                }
                            ]
                        },
                        {
                            "name": "Name",
                            "label": "PricebookEntries / Product Name",
                            "type": "string",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfpricebookentriesname",
                                    "extractionMethod": "METADATA",
                                    "content": "%[PricebookEntries.Name]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "Pricebook2Id",
                            "label": "PricebookEntries / Price Book ID",
                            "type": "reference",
                            "indexed": true,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-s4bt3n6cv6gsdggzmqeepd2lgm",
                                    "kind": "MAPPING",
                                    "type": "Product2",
                                    "fieldName": "sfpricebookentriespricebook2id",
                                    "extractionMethod": "METADATA",
                                    "content": "%[PricebookEntries.Pricebook2Id]",
                                    "rules": [
                                        "%[PricebookEntries.Pricebook2Id]"
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Product2Id",
                            "label": "PricebookEntries / Product ID",
                            "type": "reference",
                            "indexed": true,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-sit2zdpvismtma3aesc22i2nwu",
                                    "kind": "MAPPING",
                                    "type": "Product2",
                                    "fieldName": "sfpricebookentriesproduct2id",
                                    "extractionMethod": "METADATA",
                                    "content": "%[PricebookEntries.Product2Id]",
                                    "rules": [
                                        "%[PricebookEntries.Product2Id]"
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "ProductCode",
                            "label": "PricebookEntries / Product Code",
                            "type": "string",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfpricebookentriesproductcode",
                                    "extractionMethod": "METADATA",
                                    "content": "%[PricebookEntries.ProductCode]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "ProductSellingModelId",
                            "label": "PricebookEntries / Product Selling Model ID",
                            "type": "reference",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfpricebookentriesproductsellingmodelid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[PricebookEntries.ProductSellingModelId]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "SystemModstamp",
                            "label": "PricebookEntries / System Modstamp",
                            "type": "datetime",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfpricebookentriessystemmodstamp",
                                    "extractionMethod": "METADATA",
                                    "content": "%[PricebookEntries.SystemModstamp]",
                                    "fieldTypeHint": "DATE"
                                }
                            ]
                        },
                        {
                            "name": "UnitPrice",
                            "label": "PricebookEntries / List Price",
                            "type": "currency",
                            "indexed": true,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-uono4btxw5xr462lgocmewcb6q",
                                    "kind": "MAPPING",
                                    "type": "Product2",
                                    "fieldName": "sfpricebookentriesunitprice",
                                    "extractionMethod": "METADATA",
                                    "content": "%[PricebookEntries.UnitPrice]",
                                    "rules": [
                                        "%[PricebookEntries.UnitPrice]"
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "UseStandardPrice",
                            "label": "PricebookEntries / Use Standard Price",
                            "type": "boolean",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfpricebookentriesusestandardprice",
                                    "extractionMethod": "METADATA",
                                    "content": "%[PricebookEntries.UseStandardPrice]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        }
                    ],
                    "relationships": []
                },
                {
                    "relationshipName": "ProcessInstances",
                    "relationshipType": "CHILD",
                    "referenceField": "TargetObjectId",
                    "referencesTo": [
                        "ProcessInstance"
                    ]
                },
                {
                    "relationshipName": "ProductAttributeSetProducts",
                    "relationshipType": "CHILD",
                    "referenceField": "ProductId",
                    "referencesTo": [
                        "ProductAttributeSetProduct"
                    ]
                },
                {
                    "relationshipName": "ProductAttributes",
                    "relationshipType": "CHILD",
                    "referenceField": "ProductId",
                    "referencesTo": [
                        "ProductAttribute"
                    ],
                    "fields": [
                        {
                            "name": "CreatedById",
                            "label": "ProductAttributes / Created By ID",
                            "type": "reference",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductattributescreatedbyid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductAttributes.CreatedById]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "CreatedDate",
                            "label": "ProductAttributes / Created Date",
                            "type": "datetime",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductattributescreateddate",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductAttributes.CreatedDate]",
                                    "fieldTypeHint": "DATE"
                                }
                            ]
                        },
                        {
                            "name": "Id",
                            "label": "ProductAttributes / Product Attribute ID",
                            "type": "id",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductattributesid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductAttributes.Id]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "IsDeleted",
                            "label": "ProductAttributes / Deleted",
                            "type": "boolean",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductattributesisdeleted",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductAttributes.IsDeleted]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "LastModifiedById",
                            "label": "ProductAttributes / Last Modified By ID",
                            "type": "reference",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductattributeslastmodifiedbyid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductAttributes.LastModifiedById]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "LastModifiedDate",
                            "label": "ProductAttributes / Last Modified Date",
                            "type": "datetime",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductattributeslastmodifieddate",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductAttributes.LastModifiedDate]",
                                    "fieldTypeHint": "DATE"
                                }
                            ]
                        },
                        {
                            "name": "Name",
                            "label": "ProductAttributes / Product Attribute Name",
                            "type": "string",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductattributesname",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductAttributes.Name]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "ProductId",
                            "label": "ProductAttributes / Product ID",
                            "type": "reference",
                            "indexed": true,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-szkhbajhan5g5xyctep7qxcmom",
                                    "kind": "MAPPING",
                                    "type": "Product2",
                                    "fieldName": "sfproductattributesproductid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductAttributes.ProductId]",
                                    "rules": [
                                        "%[ProductAttributes.ProductId]"
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Sequence",
                            "label": "ProductAttributes / Sequence",
                            "type": "int",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductattributessequence",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductAttributes.Sequence]",
                                    "fieldTypeHint": "LONG"
                                }
                            ]
                        },
                        {
                            "name": "SystemModstamp",
                            "label": "ProductAttributes / System Modstamp",
                            "type": "datetime",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductattributessystemmodstamp",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductAttributes.SystemModstamp]",
                                    "fieldTypeHint": "DATE"
                                }
                            ]
                        },
                        {
                            "name": "VariantParentId",
                            "label": "ProductAttributes / Product ID",
                            "type": "reference",
                            "indexed": true,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-rl43555jmycg7zsdyonvpmsjzm",
                                    "kind": "MAPPING",
                                    "type": "Product2",
                                    "fieldName": "sfproductattributesvariantparentid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductAttributes.VariantParentId]",
                                    "rules": [
                                        "%[ProductAttributes.VariantParentId]"
                                    ]
                                }
                            ]
                        }
                    ],
                    "relationships": []
                },
                {
                    "relationshipName": "ProductCategoryProducts",
                    "relationshipType": "CHILD",
                    "referenceField": "ProductId",
                    "referencesTo": [
                        "ProductCategoryProduct"
                    ],
                    "fields": [
                        {
                            "name": "CatalogId",
                            "label": "ProductCategoryProducts / Catalog ID",
                            "type": "reference",
                            "indexed": true,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-ucdi5oozw4pqvda52vxudrcfg4",
                                    "kind": "MAPPING",
                                    "type": "Product2",
                                    "fieldName": "sfproductcategoryproductscatalogid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductCategoryProducts.CatalogId]",
                                    "rules": [
                                        "%[ProductCategoryProducts.CatalogId]"
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "CreatedById",
                            "label": "ProductCategoryProducts / Created By ID",
                            "type": "reference",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductcategoryproductscreatedbyid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductCategoryProducts.CreatedById]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "CreatedDate",
                            "label": "ProductCategoryProducts / Created Date",
                            "type": "datetime",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductcategoryproductscreateddate",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductCategoryProducts.CreatedDate]",
                                    "fieldTypeHint": "DATE"
                                }
                            ]
                        },
                        {
                            "name": "Id",
                            "label": "ProductCategoryProducts / Product Category Product ID",
                            "type": "id",
                            "indexed": true,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-r73rtdjgu2ncaade63cebncblm",
                                    "kind": "MAPPING",
                                    "type": "Product2",
                                    "fieldName": "sfproductcategoryproductsid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductCategoryProducts.Id]",
                                    "rules": [
                                        "%[ProductCategoryProducts.Id]"
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "IsDeleted",
                            "label": "ProductCategoryProducts / Deleted",
                            "type": "boolean",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductcategoryproductsisdeleted",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductCategoryProducts.IsDeleted]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "IsPrimaryCategory",
                            "label": "ProductCategoryProducts / Is Primary Category",
                            "type": "boolean",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductcategoryproductsisprimarycategory",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductCategoryProducts.IsPrimaryCategory]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "LastModifiedById",
                            "label": "ProductCategoryProducts / Last Modified By ID",
                            "type": "reference",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductcategoryproductslastmodifiedbyid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductCategoryProducts.LastModifiedById]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "LastModifiedDate",
                            "label": "ProductCategoryProducts / Last Modified Date",
                            "type": "datetime",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductcategoryproductslastmodifieddate",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductCategoryProducts.LastModifiedDate]",
                                    "fieldTypeHint": "DATE"
                                }
                            ]
                        },
                        {
                            "name": "Name",
                            "label": "ProductCategoryProducts / Name",
                            "type": "string",
                            "indexed": true,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-twfa5sdtvypyak24tiyvkqsm3m",
                                    "kind": "MAPPING",
                                    "type": "Product2",
                                    "fieldName": "sfproductcategoryproductsname",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductCategoryProducts.Name]",
                                    "rules": [
                                        "%[ProductCategoryProducts.Name]"
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "ProductCategoryId",
                            "label": "ProductCategoryProducts / Category ID",
                            "type": "reference",
                            "indexed": true,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-tvlpipr2hbkl73fmgfrhtkka2u",
                                    "kind": "MAPPING",
                                    "type": "Product2",
                                    "fieldName": "sfproductcategoryproductsproductcategoryid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductCategoryProducts.ProductCategoryId]",
                                    "rules": [
                                        "%[ProductCategoryProducts.ProductCategoryId]"
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "ProductId",
                            "label": "ProductCategoryProducts / Product ID",
                            "type": "reference",
                            "indexed": true,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-tt6nqy2fmjfe3g22swwgjfsjvy",
                                    "kind": "MAPPING",
                                    "type": "Product2",
                                    "fieldName": "sfproductcategoryproductsproductid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductCategoryProducts.ProductId]",
                                    "rules": [
                                        "%[ProductCategoryProducts.ProductId]"
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "ProductToCategory",
                            "label": "ProductCategoryProducts / Product/Category Concatenation",
                            "type": "string",
                            "indexed": true,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-roupiozpls7oxo5vmeiqszsct4",
                                    "kind": "MAPPING",
                                    "type": "Product2",
                                    "fieldName": "sfproductcategoryproductsproducttocategory",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductCategoryProducts.ProductToCategory]",
                                    "rules": [
                                        "%[ProductCategoryProducts.ProductToCategory]"
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "SystemModstamp",
                            "label": "ProductCategoryProducts / System Modstamp",
                            "type": "datetime",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductcategoryproductssystemmodstamp",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductCategoryProducts.SystemModstamp]",
                                    "fieldTypeHint": "DATE"
                                }
                            ]
                        }
                    ],
                    "relationships": []
                },
                {
                    "relationshipName": "ProductMedias",
                    "relationshipType": "CHILD",
                    "referenceField": "ProductId",
                    "referencesTo": [
                        "ProductMedia"
                    ],
                    "fields": [
                        {
                            "name": "CreatedById",
                            "label": "ProductMedias / Created By ID",
                            "type": "reference",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductmediascreatedbyid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductMedias.CreatedById]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "CreatedDate",
                            "label": "ProductMedias / Created Date",
                            "type": "datetime",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductmediascreateddate",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductMedias.CreatedDate]",
                                    "fieldTypeHint": "DATE"
                                }
                            ]
                        },
                        {
                            "name": "ElectronicMediaGroupId",
                            "label": "ProductMedias / Electronic Media Group ID",
                            "type": "reference",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductmediaselectronicmediagroupid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductMedias.ElectronicMediaGroupId]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "ElectronicMediaId",
                            "label": "ProductMedias / ElectronicMedia ID",
                            "type": "reference",
                            "indexed": true,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-ubgjfcfrpojjgl6figwuglcazi",
                                    "kind": "MAPPING",
                                    "type": "Product2",
                                    "fieldName": "sfproductmediaselectronicmediaid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductMedias.ElectronicMediaId]",
                                    "rules": [
                                        "%[ProductMedias.ElectronicMediaId]"
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Id",
                            "label": "ProductMedias / Product Media ID",
                            "type": "id",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductmediasid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductMedias.Id]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "IsDeleted",
                            "label": "ProductMedias / Deleted",
                            "type": "boolean",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductmediasisdeleted",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductMedias.IsDeleted]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "LastModifiedById",
                            "label": "ProductMedias / Last Modified By ID",
                            "type": "reference",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductmediaslastmodifiedbyid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductMedias.LastModifiedById]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "LastModifiedDate",
                            "label": "ProductMedias / Last Modified Date",
                            "type": "datetime",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductmediaslastmodifieddate",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductMedias.LastModifiedDate]",
                                    "fieldTypeHint": "DATE"
                                }
                            ]
                        },
                        {
                            "name": "LastReferencedDate",
                            "label": "ProductMedias / Last Referenced Date",
                            "type": "datetime",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductmediaslastreferenceddate",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductMedias.LastReferencedDate]",
                                    "fieldTypeHint": "DATE"
                                }
                            ]
                        },
                        {
                            "name": "LastViewedDate",
                            "label": "ProductMedias / Last Viewed Date",
                            "type": "datetime",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductmediaslastvieweddate",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductMedias.LastViewedDate]",
                                    "fieldTypeHint": "DATE"
                                }
                            ]
                        },
                        {
                            "name": "Name",
                            "label": "ProductMedias / Product Media Name",
                            "type": "string",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductmediasname",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductMedias.Name]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "ProductId",
                            "label": "ProductMedias / Product ID",
                            "type": "reference",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductmediasproductid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductMedias.ProductId]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "SortOrder",
                            "label": "ProductMedias / Sort Order",
                            "type": "int",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductmediassortorder",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductMedias.SortOrder]",
                                    "fieldTypeHint": "LONG"
                                }
                            ]
                        },
                        {
                            "name": "SystemModstamp",
                            "label": "ProductMedias / System Modstamp",
                            "type": "datetime",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductmediassystemmodstamp",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductMedias.SystemModstamp]",
                                    "fieldTypeHint": "DATE"
                                }
                            ]
                        }
                    ],
                    "relationships": []
                },
                {
                    "relationshipName": "ProductQuantityRules",
                    "relationshipType": "CHILD",
                    "referenceField": "ProductId",
                    "referencesTo": [
                        "ProductQuantityRule"
                    ]
                },
                {
                    "relationshipName": "ProductSellingModelOptions",
                    "relationshipType": "CHILD",
                    "referenceField": "Product2Id",
                    "referencesTo": [
                        "ProductSellingModelOption"
                    ]
                },
                {
                    "relationshipName": "ProductVariantAttributes",
                    "relationshipType": "CHILD",
                    "referenceField": "VariantParentId",
                    "referencesTo": [
                        "ProductAttribute"
                    ],
                    "fields": [
                        {
                            "name": "CreatedById",
                            "label": "ProductVariantAttributes / Created By ID",
                            "type": "reference",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductvariantattributescreatedbyid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductVariantAttributes.CreatedById]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "CreatedDate",
                            "label": "ProductVariantAttributes / Created Date",
                            "type": "datetime",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductvariantattributescreateddate",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductVariantAttributes.CreatedDate]",
                                    "fieldTypeHint": "DATE"
                                }
                            ]
                        },
                        {
                            "name": "Id",
                            "label": "ProductVariantAttributes / Product Attribute ID",
                            "type": "id",
                            "indexed": true,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-wbfmtffnptksywwbcwwyvvsesm",
                                    "kind": "MAPPING",
                                    "type": "Product2",
                                    "fieldName": "sfproductvariantattributesid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductVariantAttributes.Id]",
                                    "rules": [
                                        "%[ProductVariantAttributes.Id]"
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "IsDeleted",
                            "label": "ProductVariantAttributes / Deleted",
                            "type": "boolean",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductvariantattributesisdeleted",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductVariantAttributes.IsDeleted]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "LastModifiedById",
                            "label": "ProductVariantAttributes / Last Modified By ID",
                            "type": "reference",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductvariantattributeslastmodifiedbyid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductVariantAttributes.LastModifiedById]",
                                    "fieldTypeHint": "STRING"
                                }
                            ]
                        },
                        {
                            "name": "LastModifiedDate",
                            "label": "ProductVariantAttributes / Last Modified Date",
                            "type": "datetime",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductvariantattributeslastmodifieddate",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductVariantAttributes.LastModifiedDate]",
                                    "fieldTypeHint": "DATE"
                                }
                            ]
                        },
                        {
                            "name": "Name",
                            "label": "ProductVariantAttributes / Product Attribute Name",
                            "type": "string",
                            "indexed": true,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-qv3igvzs2got6qq4v7tccfkecm",
                                    "kind": "MAPPING",
                                    "type": "Product2",
                                    "fieldName": "sfproductvariantattributesname",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductVariantAttributes.Name]",
                                    "rules": [
                                        "%[ProductVariantAttributes.Name]"
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "ProductId",
                            "label": "ProductVariantAttributes / Product ID",
                            "type": "reference",
                            "indexed": true,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-xfycckviz5ik5ba6sbve7w2mb4",
                                    "kind": "MAPPING",
                                    "type": "Product2",
                                    "fieldName": "sfproductvariantattributesproductid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductVariantAttributes.ProductId]",
                                    "rules": [
                                        "%[ProductVariantAttributes.ProductId]"
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Sequence",
                            "label": "ProductVariantAttributes / Sequence",
                            "type": "int",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductvariantattributessequence",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductVariantAttributes.Sequence]",
                                    "fieldTypeHint": "LONG"
                                }
                            ]
                        },
                        {
                            "name": "SystemModstamp",
                            "label": "ProductVariantAttributes / System Modstamp",
                            "type": "datetime",
                            "indexed": false,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "type": "Product2",
                                    "fieldName": "sfproductvariantattributessystemmodstamp",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductVariantAttributes.SystemModstamp]",
                                    "fieldTypeHint": "DATE"
                                }
                            ]
                        },
                        {
                            "name": "VariantParentId",
                            "label": "ProductVariantAttributes / Product ID",
                            "type": "reference",
                            "indexed": true,
                            "mandatory": false,
                            "custom": false,
                            "mappings": [
                                {
                                    "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-vashe3dth5lzrb5xceguwe2fmi-xzd7v7jonnjptjohzixp52cd7a",
                                    "kind": "MAPPING",
                                    "type": "Product2",
                                    "fieldName": "sfproductvariantattributesvariantparentid",
                                    "extractionMethod": "METADATA",
                                    "content": "%[ProductVariantAttributes.VariantParentId]",
                                    "rules": [
                                        "%[ProductVariantAttributes.VariantParentId]"
                                    ]
                                }
                            ]
                        }
                    ],
                    "relationships": []
                },
                {
                    "relationshipName": "Products",
                    "relationshipType": "CHILD",
                    "referenceField": "ProductId",
                    "referencesTo": [
                        "OrderDeliveryMethod"
                    ]
                },
                {
                    "relationshipName": "RecordActionHistories",
                    "relationshipType": "CHILD",
                    "referenceField": "ParentRecordId",
                    "referencesTo": [
                        "RecordActionHistory"
                    ]
                },
                {
                    "relationshipName": "RecordActions",
                    "relationshipType": "CHILD",
                    "referenceField": "RecordId",
                    "referencesTo": [
                        "RecordAction"
                    ]
                },
                {
                    "relationshipName": "ShipmentItems",
                    "relationshipType": "CHILD",
                    "referenceField": "Product2Id",
                    "referencesTo": [
                        "ShipmentItem"
                    ]
                },
                {
                    "relationshipName": "Tasks",
                    "relationshipType": "CHILD",
                    "referenceField": "WhatId",
                    "referencesTo": [
                        "Task"
                    ]
                },
                {
                    "relationshipName": "TaxPolicy",
                    "relationshipType": "NON_POLYMORPHIC_PARENT",
                    "referenceField": "TaxPolicyId",
                    "referencesTo": [
                        "TaxPolicy"
                    ]
                },
                {
                    "relationshipName": "WorkOrderLineItems",
                    "relationshipType": "CHILD",
                    "referenceField": "Product2Id",
                    "referencesTo": [
                        "WorkOrderLineItem"
                    ]
                }
            ],
            "conditions": [],
            "searchable": false
        }
    ],
    "mappings": [
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-q2awj22nrkjtzira32yd4ecbkq",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "ec_name",
            "extractionMethod": "METADATA",
            "content": "%[Name]",
            "rules": [
                "%[Name]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-q2dcvmq65nryi3u2g2txmssgsq",
            "kind": "COMMON",
            "fieldName": "mobileuri",
            "extractionMethod": "METADATA",
            "content": "%[mobileuri]",
            "rules": [
                "%[mobileuri]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-q4dshnfj25kcpfv55jmykwkchq",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfproductvariantattributesname",
            "extractionMethod": "METADATA",
            "content": "%[ProductVariantAttributes.Name]",
            "rules": [
                "%[ProductVariantAttributes.Name]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-q4khri5rwklmdgoq2adx6t2o6a",
            "kind": "COMMON",
            "fieldName": "sfid",
            "extractionMethod": "METADATA",
            "content": "%[id]",
            "rules": [
                "%[id]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-q4oo7crdaybpkxa6i25fiasbdu",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfproductclass",
            "extractionMethod": "METADATA",
            "content": "%[ProductClass]",
            "rules": [
                "%[ProductClass]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-q5ym5siixzyyeupqvqmiqgspuy",
            "kind": "MAPPING",
            "type": "Opportunity",
            "fieldName": "title",
            "extractionMethod": "METADATA",
            "content": "%[name]",
            "rules": [
                "%[name]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-q6tmf3v36hg2z6p5rni5uokoee",
            "kind": "MAPPING",
            "type": "Account",
            "fieldName": "body",
            "extractionMethod": "METADATA",
            "content": "%[description]",
            "rules": [
                "%[description]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-qabasoa7lcjgvm6qnnawgecmuq",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfid",
            "extractionMethod": "METADATA",
            "content": "%[Id]",
            "rules": [
                "%[Id]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-qawppy2237lkdzeu37wqemsolu",
            "kind": "MAPPING",
            "type": "Article",
            "fieldName": "body",
            "extractionMethod": "METADATA",
            "content": "%[kav_summary__html_stripped]",
            "rules": [
                "%[kav_summary__html_stripped]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-qf2dumuwgvwmqdt4kfu3ewspae",
            "kind": "COMMON",
            "fieldName": "fax",
            "extractionMethod": "METADATA",
            "content": "%[fax]",
            "rules": [
                "%[fax]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-qgiauxeiin4re6lrli574x2pbi",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "filetype",
            "extractionMethod": "LITERAL",
            "content": "SalesforceItem",
            "rules": [
                "SalesforceItem"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-qgio7xvdljxrwxnh5lzppmkhva",
            "kind": "MAPPING",
            "type": "ContentVersion",
            "fieldName": "sfcontentversionfilename",
            "extractionMethod": "METADATA",
            "content": "%[coveo_filename]",
            "rules": [
                "%[coveo_filename]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-qiuwqwk5uy5dvoe4ksybwmcat4",
            "kind": "COMMON",
            "fieldName": "foldingchild",
            "extractionMethod": "METADATA",
            "content": "%[coveo_sf_foldingchild]",
            "rules": [
                "%[coveo_sf_foldingchild]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-qjpwlvj4nx47hi5za6a4bscchq",
            "kind": "COMMON",
            "fieldName": "relatedlink",
            "extractionMethod": "METADATA",
            "content": "%[coveo_externalurl]",
            "rules": [
                "%[coveo_externalurl]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-qjv4a4pfgpka25lhe2c7y2khjy",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfproductcategoryproductsname",
            "extractionMethod": "METADATA",
            "content": "%[ProductCategoryProducts.Name]",
            "rules": [
                "%[ProductCategoryProducts.Name]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-qntdjxth5pdasoprqudkju2ltu",
            "kind": "COMMON",
            "fieldName": "homephone",
            "extractionMethod": "METADATA",
            "content": "%[homephone]",
            "rules": [
                "%[homephone]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-qpe4m2vipn5hrxkjawahyp2ije",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfproductattributessize__c",
            "extractionMethod": "METADATA",
            "content": "%[ProductAttributes.Size__c]",
            "rules": [
                "%[ProductAttributes.Size__c]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-qpxgjum64ttr5lizwm3err2ilq",
            "kind": "COMMON",
            "fieldName": "clickableuri",
            "extractionMethod": "METADATA",
            "content": "%[clickableuri]",
            "rules": [
                "%[clickableuri]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-qqynnc355eyssoyfpv633sshbe",
            "kind": "COMMON",
            "fieldName": "sfopendate",
            "extractionMethod": "METADATA",
            "content": "%[opendate]",
            "rules": [
                "%[opendate]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-qteugfqfh7m5efnmi5cyc6cbza",
            "kind": "COMMON",
            "fieldName": "sfopportunitystagename",
            "extractionMethod": "METADATA",
            "content": "%[stagename]",
            "rules": [
                "%[stagename]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-qvtjouv3irjavoipcjsstqkdne",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfcoveo_available_sizes__c",
            "extractionMethod": "METADATA",
            "content": "%[Coveo_Available_Sizes__c]",
            "rules": [
                "%[Coveo_Available_Sizes__c]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-qx47abgcjytf7ubu5pgsxx2ggu",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sffamily",
            "extractionMethod": "METADATA",
            "content": "%[Family]",
            "rules": [
                "%[Family]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-qy7luazcimvosjkcmxf3cbckme",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfdisplayurl",
            "extractionMethod": "METADATA",
            "content": "%[DisplayUrl]",
            "rules": [
                "%[DisplayUrl]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-r2pmyxwge6fievcvnrudmxkdmu",
            "kind": "COMMON",
            "fieldName": "sfcategoryidsexpanded",
            "extractionMethod": "METADATA",
            "content": "%[coveo_categoryidsexpanded]",
            "rules": [
                "%[coveo_categoryidsexpanded]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-r3dy7qlhjng5z23cmwscymcpcy",
            "kind": "COMMON",
            "fieldName": "coveochatterfeedtopics",
            "extractionMethod": "METADATA",
            "content": "%[coveo_chatter_feed_topics]",
            "rules": [
                "%[coveo_chatter_feed_topics]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-r537jzbddk5ii5wfffsziusjti",
            "kind": "COMMON",
            "fieldName": "office",
            "extractionMethod": "METADATA",
            "content": "%[office]",
            "rules": [
                "%[office]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-rbbxdezhb6kzuaycbh5mczccr4",
            "kind": "MAPPING",
            "type": "Account",
            "fieldName": "title",
            "extractionMethod": "METADATA",
            "content": "%[name]",
            "rules": [
                "%[name]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-rbkyxoxthkiny6sszxjxf5ccki",
            "kind": "COMMON",
            "fieldName": "folders",
            "extractionMethod": "METADATA",
            "content": "%[folders]",
            "rules": [
                "%[folders]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-rcivg2bhf3snh2kuz7kiu62e5e",
            "kind": "COMMON",
            "fieldName": "workemail",
            "extractionMethod": "METADATA",
            "content": "%[workemail]",
            "rules": [
                "%[workemail]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-rcpfsp7ynacanhmh65whjs2kve",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfproductvariantattributesvariantparentid",
            "extractionMethod": "METADATA",
            "content": "%[ProductVariantAttributes.VariantParentId]",
            "rules": [
                "%[ProductVariantAttributes.VariantParentId]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-rdjjrgvxzt3ehvswsthraz2dx4",
            "kind": "COMMON",
            "fieldName": "sfcasepriority",
            "extractionMethod": "METADATA",
            "content": "%[priority]",
            "rules": [
                "%[priority]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-re44gpawhqokexalsbuvcx2ppi",
            "kind": "COMMON",
            "fieldName": "permanentid",
            "extractionMethod": "METADATA",
            "content": "%[permanentid]",
            "rules": [
                "%[permanentid]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-re6zpis5qcs4spy64b432oknq4",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfexternalid",
            "extractionMethod": "METADATA",
            "content": "%[ExternalId]",
            "rules": [
                "%[ExternalId]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-rekctlebo3bypht6wvj7rtkkpq",
            "kind": "COMMON",
            "fieldName": "parentid",
            "extractionMethod": "METADATA",
            "content": "%[parentid]",
            "rules": [
                "%[parentid]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-rgazf2fvenywiagnym25th2gkq",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfcommerceentitlementproductspolicyid",
            "extractionMethod": "METADATA",
            "content": "%[CommerceEntitlementProducts.PolicyId]",
            "rules": [
                "%[CommerceEntitlementProducts.PolicyId]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-rghi5xufooqx3qb4zab6a7kmfy",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfproductcategoryproductsproductcategoryid",
            "extractionMethod": "METADATA",
            "content": "%[ProductCategoryProducts.ProductCategoryId]",
            "rules": [
                "%[ProductCategoryProducts.ProductCategoryId]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-rgkbesm2juvazumov5zx3h2lvq",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfproductvariantattributesid",
            "extractionMethod": "METADATA",
            "content": "%[ProductVariantAttributes.Id]",
            "rules": [
                "%[ProductVariantAttributes.Id]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-rhi5jxospkrxhgyutsto462kha",
            "kind": "COMMON",
            "fieldName": "documenttype",
            "extractionMethod": "METADATA",
            "content": "%[documenttype]",
            "rules": [
                "%[documenttype]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-rlw3dzdztxzevqqtelztlwshoe",
            "kind": "MAPPING",
            "type": "Dashboard",
            "fieldName": "body",
            "extractionMethod": "METADATA",
            "content": "%[description]",
            "rules": [
                "%[description]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-rojbj4ipcko2f3p3ezco5lcpau",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfpricebookentriesproduct2id",
            "extractionMethod": "METADATA",
            "content": "%[PricebookEntries.Product2Id]",
            "rules": [
                "%[PricebookEntries.Product2Id]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-rpb3ut5eqay5dkyhtycv3vkfii",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfproductattributesvariantparentid",
            "extractionMethod": "METADATA",
            "content": "%[ProductAttributes.VariantParentId]",
            "rules": [
                "%[ProductAttributes.VariantParentId]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-rq3stjschkxc6uwronuod3kef4",
            "kind": "MAPPING",
            "type": "FeedComment",
            "fieldName": "title",
            "extractionMethod": "LITERAL",
            "content": "%[createdby.name] replied on %[feeditem.title]",
            "rules": [
                "%[createdby.name] replied on %[feeditem.title]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-rqibpuq6tdap4sc23vwjwz2chy",
            "kind": "COMMON",
            "fieldName": "fullname",
            "extractionMethod": "METADATA",
            "content": "%[fullname]",
            "rules": [
                "%[fullname]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-rrkomreqqi6urqn526tifqsmbi",
            "kind": "COMMON",
            "fieldName": "site",
            "extractionMethod": "METADATA",
            "content": "%[site]",
            "rules": [
                "%[site]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-rul7gz2fdru36iv4kmde56kn6i",
            "kind": "COMMON",
            "fieldName": "sfcasestatus",
            "extractionMethod": "METADATA",
            "content": "%[status]",
            "rules": [
                "%[status]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-rzjqjwvqvbpl3epjkofavt2k3a",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sflastvieweddate",
            "extractionMethod": "METADATA",
            "content": "%[LastViewedDate]",
            "rules": [
                "%[LastViewedDate]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-s3fp5g5zrb2da5vvxmg4vd2gdi",
            "kind": "COMMON",
            "fieldName": "from",
            "extractionMethod": "METADATA",
            "content": "%[from]",
            "rules": [
                "%[from]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-s3tzj4yq5yhlrwdcz6yywbcn6u",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfdescription",
            "extractionMethod": "METADATA",
            "content": "%[Description]",
            "rules": [
                "%[Description]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-s4h2raa2o5uxic3gmfgmljknby",
            "kind": "COMMON",
            "fieldName": "sfid",
            "extractionMethod": "METADATA",
            "content": "%[ka_id]",
            "rules": [
                "%[ka_id]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-s5kbb7mu6vsylt3mxkvq6kki4u",
            "kind": "COMMON",
            "fieldName": "sfcasecallstacks",
            "extractionMethod": "METADATA",
            "content": "%[callstacks]",
            "rules": [
                "%[callstacks]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-scbptcvpcwfjjtp7echrs2cgrm",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfproductcategoryproductscatalogid",
            "extractionMethod": "METADATA",
            "content": "%[ProductCategoryProducts.CatalogId]",
            "rules": [
                "%[ProductCategoryProducts.CatalogId]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-shsvtobeye6wj6lhlcqb33cg3u",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfcommerceentitlementproductsid",
            "extractionMethod": "METADATA",
            "content": "%[CommerceEntitlementProducts.Id]",
            "rules": [
                "%[CommerceEntitlementProducts.Id]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-shvfxkzscvxjhmeo66dsvisapi",
            "kind": "COMMON",
            "fieldName": "printableuri",
            "extractionMethod": "METADATA",
            "content": "%[printableuri]",
            "rules": [
                "%[printableuri]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-slhm4yxy3c4l5a3kynifmhcji4",
            "kind": "COMMON",
            "fieldName": "location",
            "extractionMethod": "METADATA",
            "content": "%[location]",
            "rules": [
                "%[location]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-slv2zqu57azgujbg5ljpv3sjte",
            "kind": "COMMON",
            "fieldName": "sforganizationid",
            "extractionMethod": "METADATA",
            "content": "%[coveo_organization_id]",
            "rules": [
                "%[coveo_organization_id]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-slwn6tunzunuq2h2q4bwthshg4",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "ec_description",
            "extractionMethod": "METADATA",
            "content": "%[Description]",
            "rules": [
                "%[Description]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-smblckpmovlv6vzvogo7n6sp3u",
            "kind": "COMMON",
            "fieldName": "to",
            "extractionMethod": "METADATA",
            "content": "%[to]",
            "rules": [
                "%[to]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-smdfw6gseo7mfpf4su67mv2nom",
            "kind": "MAPPING",
            "type": "FeedItem",
            "fieldName": "body",
            "extractionMethod": "METADATA",
            "content": "%[body]",
            "rules": [
                "%[body]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-supv2bn4637ra6wr3xrvua2ne4",
            "kind": "COMMON",
            "fieldName": "sfkbid",
            "extractionMethod": "METADATA",
            "content": "%[ka_id]",
            "rules": [
                "%[ka_id]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-suxged5v2huul2y7fesan4shzy",
            "kind": "COMMON",
            "fieldName": "workphone",
            "extractionMethod": "METADATA",
            "content": "%[workphone]",
            "rules": [
                "%[workphone]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-svdgh4xafqraqed26tugshkbz4",
            "kind": "MAPPING",
            "type": "ContentVersion",
            "fieldName": "sfcontentversionlinkedentityids",
            "extractionMethod": "METADATA",
            "content": "%[coveo_linkedentityidslong]",
            "rules": [
                "%[coveo_linkedentityidslong]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-swngh4aksc6p7fbqaxpfmgkdee",
            "kind": "MAPPING",
            "type": "Contact",
            "fieldName": "body",
            "extractionMethod": "METADATA",
            "content": "%[description]",
            "rules": [
                "%[description]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-swxg47fpdq5h2pevoatvcucoua",
            "kind": "COMMON",
            "fieldName": "size",
            "extractionMethod": "METADATA",
            "content": "%[size]",
            "rules": [
                "%[size]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-swzlt263dvk3jum66ibhf7scju",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfpricebookentriesunitprice",
            "extractionMethod": "METADATA",
            "content": "%[PricebookEntries.UnitPrice]",
            "rules": [
                "%[PricebookEntries.UnitPrice]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-szcgvflmudmg33wnnfwnmyskre",
            "kind": "COMMON",
            "fieldName": "month",
            "extractionMethod": "METADATA",
            "content": "%[month]",
            "rules": [
                "%[month]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-szgt7k6muodpeshpez5tet2j5u",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfsystemmodstamp",
            "extractionMethod": "METADATA",
            "content": "%[SystemModstamp]",
            "rules": [
                "%[SystemModstamp]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-t2wqrs236uoskchhwdv6b5kdni",
            "kind": "MAPPING",
            "type": "Contact",
            "fieldName": "title",
            "extractionMethod": "METADATA",
            "content": "%[name]",
            "rules": [
                "%[name]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-t3qroi2hiwbz4ozwggucyesngi",
            "kind": "COMMON",
            "fieldName": "manager",
            "extractionMethod": "METADATA",
            "content": "%[manager]",
            "rules": [
                "%[manager]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-tas53m7mh5jpx7a7i6yb6tslai",
            "kind": "MAPPING",
            "type": "CaseComment",
            "fieldName": "body",
            "extractionMethod": "METADATA",
            "content": "%[commentbody]",
            "rules": [
                "%[commentbody]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-tbbnwvilqnghabjwwzlo2tsdnq",
            "kind": "COMMON",
            "fieldName": "author",
            "extractionMethod": "METADATA",
            "content": "%[author]",
            "rules": [
                "%[author]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-tkt3cxqldfxcnztiuf7mqvknb4",
            "kind": "COMMON",
            "fieldName": "sourcetype",
            "extractionMethod": "METADATA",
            "content": "%[sourcetype]",
            "rules": [
                "%[sourcetype]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-tncjgw6tliw4vxdisistpvsddm",
            "kind": "COMMON",
            "fieldName": "cc",
            "extractionMethod": "METADATA",
            "content": "%[cc]",
            "rules": [
                "%[cc]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-ts6qdqg6glfymv5ornlz6acfrq",
            "kind": "COMMON",
            "fieldName": "middlename",
            "extractionMethod": "METADATA",
            "content": "%[middlename]",
            "rules": [
                "%[middlename]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-tv2tnbpkrjgbxg7wcnfxxncgrq",
            "kind": "COMMON",
            "fieldName": "sfcategorynamesexpanded",
            "extractionMethod": "METADATA",
            "content": "%[coveo_categorynamesexpanded]",
            "rules": [
                "%[coveo_categorynamesexpanded]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-tv35edlzczckhuwiywadoisp3q",
            "kind": "MAPPING",
            "type": "Case",
            "fieldName": "title",
            "extractionMethod": "METADATA",
            "content": "%[subject]",
            "rules": [
                "%[subject]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-twpnnf3wn6f3sdtvwuhgwr2hju",
            "kind": "MAPPING",
            "type": "CaseComment",
            "fieldName": "title",
            "extractionMethod": "METADATA",
            "content": "%[parent.subject]",
            "rules": [
                "%[parent.subject]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-txtvqo6hfesinhu4fbooiismyi",
            "kind": "COMMON",
            "fieldName": "fileextension",
            "extractionMethod": "METADATA",
            "content": "%[fileextension]",
            "rules": [
                "%[fileextension]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-tznlk3zw5vtxdmhrcugz6r2g2e",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfstockkeepingunit",
            "extractionMethod": "METADATA",
            "content": "%[StockKeepingUnit]",
            "rules": [
                "%[StockKeepingUnit]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-u65x67zsiavj74nayveovacbie",
            "kind": "COMMON",
            "fieldName": "foldingcollection",
            "extractionMethod": "METADATA",
            "content": "%[coveo_foldingcollection]",
            "rules": [
                "%[coveo_foldingcollection]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-u7a7uess3fnq6r2raj2tsrsfhm",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfisdeleted",
            "extractionMethod": "METADATA",
            "content": "%[IsDeleted]",
            "rules": [
                "%[IsDeleted]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-ua4geegufazwyivyxt22ez2icy",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfisarchived",
            "extractionMethod": "METADATA",
            "content": "%[IsArchived]",
            "rules": [
                "%[IsArchived]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-ubhz3gbbhyyx5f7sgetoo5sk5y",
            "kind": "MAPPING",
            "type": "Solution",
            "fieldName": "body",
            "extractionMethod": "METADATA",
            "content": "%[solutionnote]",
            "rules": [
                "%[solutionnote]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-ucwhkqfae2pa2dfn26rbwdci2u",
            "kind": "COMMON",
            "fieldName": "worktitle",
            "extractionMethod": "METADATA",
            "content": "%[worktitle]",
            "rules": [
                "%[worktitle]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-ud7qnthrkqd6pdtuuiyll5kose",
            "kind": "COMMON",
            "fieldName": "bcc",
            "extractionMethod": "METADATA",
            "content": "%[bcc]",
            "rules": [
                "%[bcc]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-uimdi6d3telyuhsmckl3icsnoy",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfcontentdocumentlinksvisibility",
            "extractionMethod": "METADATA",
            "content": "%[ContentDocumentLinks.Visibility]",
            "rules": [
                "%[ContentDocumentLinks.Visibility]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-uitos2t66gs4pvo46fzw2hcawu",
            "kind": "COMMON",
            "fieldName": "firstname",
            "extractionMethod": "METADATA",
            "content": "%[firstname]",
            "rules": [
                "%[firstname]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-ujcjxel7p2hokwzosskko52oxq",
            "kind": "MAPPING",
            "type": "FeedComment",
            "fieldName": "sfparentname",
            "extractionMethod": "METADATA",
            "content": "%[feeditem.parent.name]",
            "rules": [
                "%[feeditem.parent.name]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-uk4o27sdw4tpsldim5sqng2m5q",
            "kind": "MAPPING",
            "type": "Task",
            "fieldName": "title",
            "extractionMethod": "METADATA",
            "content": "%[subject]",
            "rules": [
                "%[subject]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-uklcooxfoamkfn5ybc2oxycdgy",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfproductcategoryproductsid",
            "extractionMethod": "METADATA",
            "content": "%[ProductCategoryProducts.Id]",
            "rules": [
                "%[ProductCategoryProducts.Id]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-ukuq3xisa6qijkqdit6ubikane",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sflastmodifieddate",
            "extractionMethod": "METADATA",
            "content": "%[LastModifiedDate]",
            "rules": [
                "%[LastModifiedDate]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-ul3xtow5dvqbujylkjauhxsg2a",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfpricebookentriespricebook2id",
            "extractionMethod": "METADATA",
            "content": "%[PricebookEntries.Pricebook2Id]",
            "rules": [
                "%[PricebookEntries.Pricebook2Id]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-ulr4fgle66fg7nx4k3ysd5smci",
            "kind": "MAPPING",
            "type": "CollaborationGroup",
            "fieldName": "body",
            "extractionMethod": "METADATA",
            "content": "%[description]",
            "rules": [
                "%[description]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-uo3ubnaxistf5cay34ebysscmi",
            "kind": "COMMON",
            "fieldName": "sfcreatedby",
            "extractionMethod": "METADATA",
            "content": "%[createdby.name]",
            "rules": [
                "%[createdby.name]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-uo4n5kmoia7o42yvjknknucakm",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfcreatedbyid",
            "extractionMethod": "METADATA",
            "content": "%[CreatedById]",
            "rules": [
                "%[CreatedById]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-uoqkdcfjboguskwfbpfmjpkjqu",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfproductcode",
            "extractionMethod": "METADATA",
            "content": "%[ProductCode]",
            "rules": [
                "%[ProductCode]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-uq6nhxldykbk66fskzbz2ckhhi",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfcoveo_ec_image__c",
            "extractionMethod": "METADATA",
            "content": "%[Coveo_Ec_Image__c]",
            "rules": [
                "%[Coveo_Ec_Image__c]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-uqyt6obvbky7rf6tbulhnm2pre",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfexternaldatasourceid",
            "extractionMethod": "METADATA",
            "content": "%[ExternalDataSourceId]",
            "rules": [
                "%[ExternalDataSourceId]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-uruiq7geuotffzsp2khx4xslku",
            "kind": "COMMON",
            "fieldName": "lastname",
            "extractionMethod": "METADATA",
            "content": "%[lastname]",
            "rules": [
                "%[lastname]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-uryagayzs73f6uhtme33rqcpz4",
            "kind": "MAPPING",
            "type": "Lead",
            "fieldName": "title",
            "extractionMethod": "METADATA",
            "content": "%[name]",
            "rules": [
                "%[name]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-uuo525mdy3iq2pdz2u67uhkb5u",
            "kind": "COMMON",
            "fieldName": "date",
            "extractionMethod": "METADATA",
            "content": "%[date]",
            "rules": [
                "%[date]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-uuqwu6f5e3plgcnfqbipo6ccqq",
            "kind": "MAPPING",
            "type": "Case",
            "fieldName": "body",
            "extractionMethod": "METADATA",
            "content": "%[description]",
            "rules": [
                "%[description]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-uurz47j7n7bjxlrr7pwd4t2hnu",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfquantityunitofmeasure",
            "extractionMethod": "METADATA",
            "content": "%[QuantityUnitOfMeasure]",
            "rules": [
                "%[QuantityUnitOfMeasure]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-uv2r32uptg6bmdsj3woig3kmha",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfisactive",
            "extractionMethod": "METADATA",
            "content": "%[IsActive]",
            "rules": [
                "%[IsActive]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-uw2yuihvjyiueczlxh6aloci3q",
            "kind": "MAPPING",
            "type": "ContentVersion",
            "fieldName": "sfcontentversionlibrarynames",
            "extractionMethod": "METADATA",
            "content": "%[coveo_librarynames]",
            "rules": [
                "%[coveo_librarynames]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-uwypzh7wvadqhbacdkjl5jkoam",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "ec_brand",
            "extractionMethod": "METADATA",
            "content": "%[Brand__c]",
            "rules": [
                "%[Brand__c]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-uyamtha6cvnjanicax253qscv4",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfproductcategoryproductsproducttocategory",
            "extractionMethod": "METADATA",
            "content": "%[ProductCategoryProducts.ProductToCategory]",
            "rules": [
                "%[ProductCategoryProducts.ProductToCategory]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-uzbtihuqmcsa4svn766y7oka3q",
            "kind": "MAPPING",
            "type": "Task",
            "fieldName": "body",
            "extractionMethod": "METADATA",
            "content": "%[subject]",
            "rules": [
                "%[subject]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-v33gtte2vgvdvngqylc6kv2ptu",
            "kind": "MAPPING",
            "type": "ContentVersion",
            "fieldName": "sfcontentversionfileextension",
            "extractionMethod": "METADATA",
            "content": "%[coveo_fileextension]",
            "rules": [
                "%[coveo_fileextension]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-v55xqxgnxa3cti5ywqsf5hkpea",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "ec_item_group_id",
            "extractionMethod": "METADATA",
            "content": "%[Coveo_Group_Id__c]",
            "rules": [
                "%[Coveo_Group_Id__c]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-v5tjvd3tfohr4vdcj65v2gspsa",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfcommerceentitlementproductsname",
            "extractionMethod": "METADATA",
            "content": "%[CommerceEntitlementProducts.Name]",
            "rules": [
                "%[CommerceEntitlementProducts.Name]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-vcjntbl36ne77im7dtpjzlcmxa",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfproductmediaselectronicmediaid",
            "extractionMethod": "METADATA",
            "content": "%[ProductMedias.ElectronicMediaId]",
            "rules": [
                "%[ProductMedias.ElectronicMediaId]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-ve4zzrqpbcws5oovapaylvkmoe",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfcolor__c",
            "extractionMethod": "METADATA",
            "content": "%[Color__c]",
            "rules": [
                "%[Color__c]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-vfrn3xfxxq74had56dw67hsorm",
            "kind": "COMMON",
            "fieldName": "subject",
            "extractionMethod": "METADATA",
            "content": "%[subject]",
            "rules": [
                "%[subject]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-vfxmp5rv6nq5hqled3ow552av4",
            "kind": "COMMON",
            "fieldName": "sfcasehasbugs",
            "extractionMethod": "METADATA",
            "content": "%[hasbugs]",
            "rules": [
                "%[hasbugs]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-vj37rc3unerym6exenqkj5ki7q",
            "kind": "COMMON",
            "fieldName": "language",
            "extractionMethod": "METADATA",
            "content": "%[language]",
            "rules": [
                "%[language]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-vjeaukwaup2ladhhzm525qcevi",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfproductvariantattributessize__c",
            "extractionMethod": "METADATA",
            "content": "%[ProductVariantAttributes.Size__c]",
            "rules": [
                "%[ProductVariantAttributes.Size__c]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-vkmykpkea5imciolzaahfnke7m",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sflastreferenceddate",
            "extractionMethod": "METADATA",
            "content": "%[LastReferencedDate]",
            "rules": [
                "%[LastReferencedDate]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-vlnntnu5bbyixtpsi26avzciga",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "ec_images",
            "extractionMethod": "METADATA",
            "content": "%[Coveo_Ec_Image__c]",
            "rules": [
                "%[Coveo_Ec_Image__c]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-vq55z3lqjj45h45vb6iiz3cera",
            "kind": "MAPPING",
            "type": "ContentVersion",
            "fieldName": "sfcontentversionlibraryids",
            "extractionMethod": "METADATA",
            "content": "%[coveo_libraryids]",
            "rules": [
                "%[coveo_libraryids]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-vrubhgxfmfdpavesqgyvfisnka",
            "kind": "COMMON",
            "fieldName": "parents",
            "extractionMethod": "METADATA",
            "content": "%[parents]",
            "rules": [
                "%[parents]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-vsqz5jj7s34r7klpilc47g2baq",
            "kind": "COMMON",
            "fieldName": "title",
            "extractionMethod": "METADATA",
            "content": "%[title:crawler]",
            "rules": [
                "%[title:crawler]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-vua4xbuftqg4qyxlgvrcvtcgme",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sflastmodifiedbyid",
            "extractionMethod": "METADATA",
            "content": "%[LastModifiedById]",
            "rules": [
                "%[LastModifiedById]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-vv3tjdfyblndmo3u73lu362et4",
            "kind": "MAPPING",
            "type": "FeedItem",
            "fieldName": "sflikedby",
            "extractionMethod": "METADATA",
            "content": "%[feedlikes.insertedby.name]",
            "rules": [
                "%[feedlikes.insertedby.name]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-vvzogct3mtpn4aowvrjpedsp7i",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "objecttype",
            "extractionMethod": "LITERAL",
            "content": "Product2",
            "rules": [
                "Product2"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-vw7pggtrtz5yi3pc6homyg2jvi",
            "kind": "MAPPING",
            "type": "ContentVersion",
            "fieldName": "sfcontentversiontitle",
            "extractionMethod": "METADATA",
            "content": "%[coveo_title]",
            "rules": [
                "%[coveo_title]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-vzq6s6kdhb2pbqzckwi2ahkdty",
            "kind": "COMMON",
            "fieldName": "company",
            "extractionMethod": "METADATA",
            "content": "%[company]",
            "rules": [
                "%[company]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-w55mlqlvsprg56pg4ii3mtki4y",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfname",
            "extractionMethod": "METADATA",
            "content": "%[Name]",
            "rules": [
                "%[Name]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-w65vmaytvxtxcor3memkdl2mlm",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sftype",
            "extractionMethod": "METADATA",
            "content": "%[Type]",
            "rules": [
                "%[Type]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-wa7w7bnib2aabrmdvdrkhgkhhq",
            "kind": "COMMON",
            "fieldName": "foldingparent",
            "extractionMethod": "METADATA",
            "content": "%[coveo_sf_foldingparent]",
            "rules": [
                "%[coveo_sf_foldingparent]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-wb4gvgamgq3hfrdffq3f6eccsu",
            "kind": "MAPPING",
            "type": "FeedComment",
            "fieldName": "body",
            "extractionMethod": "METADATA",
            "content": "%[commentbody]",
            "rules": [
                "%[commentbody]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-wba7gszdm7cemft4q2f7ajsf3i",
            "kind": "COMMON",
            "fieldName": "sfcategorynames",
            "extractionMethod": "METADATA",
            "content": "%[coveo_categorynames]",
            "rules": [
                "%[coveo_categorynames]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-wdjlk4f3prshkfftnwvycakb6m",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfcoveo_group_id__c",
            "extractionMethod": "METADATA",
            "content": "%[Coveo_Group_Id__c]",
            "rules": [
                "%[Coveo_Group_Id__c]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-wdtbsvlbo4y5kmnzanwf772anq",
            "kind": "COMMON",
            "fieldName": "datebucket",
            "extractionMethod": "METADATA",
            "content": "%[datebucket]",
            "rules": [
                "%[datebucket]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-whdg2mtumadvzcn5ewc43zknye",
            "kind": "COMMON",
            "fieldName": "author",
            "extractionMethod": "METADATA",
            "content": "%[author:crawler]",
            "rules": [
                "%[author:crawler]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-wkinvcdmxm3dav7z7uyfbsslla",
            "kind": "COMMON",
            "fieldName": "sfkavid",
            "extractionMethod": "METADATA",
            "content": "%[kav_id]",
            "rules": [
                "%[kav_id]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-wlvlzuyxcyurdbgxw4qkht2hvu",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfpricebookentriesid",
            "extractionMethod": "METADATA",
            "content": "%[PricebookEntries.Id]",
            "rules": [
                "%[PricebookEntries.Id]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-wma7nc2eb6tarczp4yud5u2bxq",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfbrand__c",
            "extractionMethod": "METADATA",
            "content": "%[Brand__c]",
            "rules": [
                "%[Brand__c]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-wmoowvb5p2ldo7yt2z4mqysp7e",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfproductcategoryproductsproductid",
            "extractionMethod": "METADATA",
            "content": "%[ProductCategoryProducts.ProductId]",
            "rules": [
                "%[ProductCategoryProducts.ProductId]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-wpzud6nnk5kmcdg5jpfwmscjiq",
            "kind": "COMMON",
            "fieldName": "objecttypelabelplural",
            "extractionMethod": "METADATA",
            "content": "%[objecttypelabelplural]",
            "rules": [
                "%[objecttypelabelplural]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-ws2nmnizdrfcgp5ryqhtoakh7u",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfcontentdocumentlinkslinkedentityid",
            "extractionMethod": "METADATA",
            "content": "%[ContentDocumentLinks.LinkedEntityId]",
            "rules": [
                "%[ContentDocumentLinks.LinkedEntityId]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-wtqxb2rmfgxmybkmubqcoecmjq",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfproductattributesproductid",
            "extractionMethod": "METADATA",
            "content": "%[ProductAttributes.ProductId]",
            "rules": [
                "%[ProductAttributes.ProductId]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-wu4fcep6fmtu4lf4krognu2eze",
            "kind": "COMMON",
            "fieldName": "filetype",
            "extractionMethod": "METADATA",
            "content": "%[filetype]",
            "rules": [
                "%[filetype]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-wuwdksjdwgnaga2y6vwdnrsgce",
            "kind": "MAPPING",
            "type": "User",
            "fieldName": "title",
            "extractionMethod": "METADATA",
            "content": "%[name]",
            "rules": [
                "%[name]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-wwl2jzqheblbtotkais3izkhsq",
            "kind": "COMMON",
            "fieldName": "authorloginname",
            "extractionMethod": "METADATA",
            "content": "%[authorloginname]",
            "rules": [
                "%[authorloginname]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-wxou6tq6qn7qe55dpavxa6ko2y",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfproductvariantattributesproductid",
            "extractionMethod": "METADATA",
            "content": "%[ProductVariantAttributes.ProductId]",
            "rules": [
                "%[ProductVariantAttributes.ProductId]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-wzeimaehgjz76s7gjkdddi2hhe",
            "kind": "MAPPING",
            "type": "Solution",
            "fieldName": "title",
            "extractionMethod": "METADATA",
            "content": "%[solutionname]",
            "rules": [
                "%[solutionname]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-wzsivacojtiscjmuho7ujgsmgq",
            "kind": "COMMON",
            "fieldName": "filename",
            "extractionMethod": "METADATA",
            "content": "%[filename]",
            "rules": [
                "%[filename]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-x42m3pm7k2i2ok46tbk6z3sjnm",
            "kind": "MAPPING",
            "type": "User",
            "fieldName": "body",
            "extractionMethod": "METADATA",
            "content": "%[aboutme]",
            "rules": [
                "%[aboutme]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-x4todoqjgdobugmx6xkfyusnbe",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "body",
            "extractionMethod": "METADATA",
            "content": "%[Description]",
            "rules": [
                "%[Description]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-x6hcq5zjvdqdebkt4hgv54kfzm",
            "kind": "COMMON",
            "fieldName": "sfopportunitytype",
            "extractionMethod": "METADATA",
            "content": "%[type]",
            "rules": [
                "%[type]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-x7lljatnnvondocgvcsvarcdkm",
            "kind": "COMMON",
            "fieldName": "year",
            "extractionMethod": "METADATA",
            "content": "%[year]",
            "rules": [
                "%[year]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-x7qiodu5hr46v7ofrbivlycn7y",
            "kind": "COMMON",
            "fieldName": "connectortype",
            "extractionMethod": "METADATA",
            "content": "%[connectortype]",
            "rules": [
                "%[connectortype]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-xazz4bk5g3mbsntbqb2vvwcd3m",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfcontentdocumentlinksid",
            "extractionMethod": "METADATA",
            "content": "%[ContentDocumentLinks.Id]",
            "rules": [
                "%[ContentDocumentLinks.Id]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-xb2oiik65zijwhzekl7doecbdq",
            "kind": "COMMON",
            "fieldName": "objecttypelabel",
            "extractionMethod": "METADATA",
            "content": "%[objecttypelabel]",
            "rules": [
                "%[objecttypelabel]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-xbqnef6cdbbapnl35iawcokcdq",
            "kind": "COMMON",
            "fieldName": "sfcasebugnumbers",
            "extractionMethod": "METADATA",
            "content": "%[bugnumbers]",
            "rules": [
                "%[bugnumbers]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-xbto54o3zesbj2pmvswj6ksdbi",
            "kind": "COMMON",
            "fieldName": "mobilephone",
            "extractionMethod": "METADATA",
            "content": "%[mobilephone]",
            "rules": [
                "%[mobilephone]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-xbujompc3mgtnhoszetag5sluq",
            "kind": "MAPPING",
            "type": "Opportunity",
            "fieldName": "body",
            "extractionMethod": "METADATA",
            "content": "%[description]",
            "rules": [
                "%[description]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-xe2amwkqcyw2is5xuphbnmkcqi",
            "kind": "COMMON",
            "fieldName": "sfcasenumberstripped",
            "extractionMethod": "METADATA",
            "content": "%[casenumber__stripped]",
            "rules": [
                "%[casenumber__stripped]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-xeamnuoe5g4nho7zzzjg54skoy",
            "kind": "MAPPING",
            "type": "FeedComment",
            "fieldName": "sfcreatedbyname",
            "extractionMethod": "METADATA",
            "content": "%[createdby.name]",
            "rules": [
                "%[createdby.name]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-xftxjy74hyf3df4te4skissjua",
            "kind": "COMMON",
            "fieldName": "mobilephone",
            "extractionMethod": "METADATA",
            "content": "%[cellphone]",
            "rules": [
                "%[cellphone]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-xgxt4q7dxhit5tkebyiwcpkdlq",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfcreateddate",
            "extractionMethod": "METADATA",
            "content": "%[CreatedDate]",
            "rules": [
                "%[CreatedDate]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-xh5kt6k3xhdzt7oqqd3i6kcpyi",
            "kind": "MAPPING",
            "type": "FeedItem",
            "fieldName": "sfparentname",
            "extractionMethod": "METADATA",
            "content": "%[parent.name]",
            "rules": [
                "%[parent.name]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-xhpato2stinljiy54ca32vsdge",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "sfcontentdocumentlinkscontentdocumentid",
            "extractionMethod": "METADATA",
            "content": "%[ContentDocumentLinks.ContentDocumentId]",
            "rules": [
                "%[ContentDocumentLinks.ContentDocumentId]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-xiagfoh4tye2o5iwvv43inkkc4",
            "kind": "COMMON",
            "fieldName": "mobilephone",
            "extractionMethod": "METADATA",
            "content": "%[mobile]",
            "rules": [
                "%[mobile]"
            ]
        },
        {
            "id": "salesforceb2b2cpartnerorganizationxhv1h1x0-tmdfb7g53pdrq2wkfykb3ekev4-xmywozleadwomz5f43mlslkdfa",
            "kind": "MAPPING",
            "type": "Product2",
            "fieldName": "ec_color",
            "extractionMethod": "METADATA",
            "content": "%[Color__c]",
            "rules": [
                "%[Color__c]"
            ]
        }
    ],
    "postConversionExtensions": [
        {
            "actionOnError": "SKIP_EXTENSION",
            "condition": "",
            "extensionId": "",
            "parameters": {
                "client_id_key": "",
                "client_secret_key": ""
            },
            "versionId": ""
        },
        {
            "actionOnError": "SKIP_EXTENSION",
            "condition": "",
            "extensionId": "salesforceb2b2cpartnerorganizationxhv1h1x0-w32kokcmtwgo3nwis3pwkwkbdm",
            "parameters": {},
            "versionId": ""
        }
    ]
};

export default sfSourceConfig;