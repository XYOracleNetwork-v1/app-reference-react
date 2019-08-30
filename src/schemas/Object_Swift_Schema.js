module.exports = [{
  "id":"sdk-core-swift",
  "name":"Swift Core Library",
  "locale":"EN",
  "platform":"iOS",
  "lang":"Swift",
  "type":"SDK",
  "desc":"Core Library with support for XYO devices",
  "modules": [
    {
      "desc": "Bound Witness classes",
      "name": "bound witness",
      "objects": [
        {
          "super": "XyoIterableStructure",
          "desc": "A class with methods to get info and sign bound witnesses ",
          "name": "XyoBoundWitness",
          "functions": [
            {
              "async": "false",
              "name": "getIsCompleted",
              "parameters": [],
              "returns": [
                {
                  "type": "Bool",
                  "desc": "checks for completion of a bound witness based on id count comparison of fetter and witness"
                }
              ],
              "template": true
            },
            {
              "name": "getNumberOfFetters",
              "parameters": [],
              "returns": [
                {
                  "type": "Int",
                  "desc": "the number of fetters as an "
                }
              ]
            },
            {
              "name": "getNumberOfWitnesses",
              "parameters": [],
              "returns": [
                {
                  "type": "Int",
                  "desc": "the number of witnesses as an "
                }
              ]
            },
            {
              "name": "getHash",
              "parameters": [
                {
                  "name": "hasher : ",
                  "type": "XyoHasher"
                }
              ],
              "returns": [
                {
                  "type": "XyoObjectStructure",
                  "desc": "the hash value of the bound witness with signing data"
                }
              ]
            },
            {
              "name": "signCurrent",
              "parameters": [
                {
                  "name": "signer : ",
                  "type": "XyoSigner"
                }
              ],
              "returns": [
                {
                  "type": "XyoObjectStructure",
                  "desc": "a signed bound witness using XyoSigner"
                }
              ]
            },
            {
              "name": "addToLedger",
              "parameters": [
                {
                  "name": "item : ",
                  "type": "XyoObjectStructure"
                }
              ],
              "returns": []
            },
            {
              "name": "getNumberOfParties",
              "parameters": [
                {
                  "name": " ",
                  "type": ""
                }
              ],
              "returns": [
                {
                  "type": "Int",
                  "desc": "the number of fetters for every completed bound witness"
                }
              ]
            },
            {
              "name": "getFetterOfParty",
              "parameters": [
                {
                  "name": "partyIndex : ",
                  "type": "Int"
                }
              ],
              "returns": [
                {
                  "type": "XyoIterableStructure",
                  "desc": "a fetter by index as an "
                }
              ]
            },
            {
              "name": "getWitnessOfParty",
              "parameters": [
                {
                  "name": "partyIndex : ",
                  "type": "Int"
                }
              ],
              "returns": [
                {
                  "type": "XyoIterableStructure",
                  "desc": "a witness by index as an "
                }
              ]
            },
          ],
        },
        {
          "name": "XyoBoundWitnessUtil",
          "desc": "bound witness utilities ",
          "functions": [
            {
              "name": "removeIdFromUnsignedPayload",
              "parameters": [
                {
                  "name": "id : ",
                  "type": "UInt8"
                },
                {
                  "name": "boundWitness : ",
                  "type": "XyoIterableStructure"
                }
            ],
              "returns": [
                {
                  "type": "XyoBoundWitness",
                  "desc": "removes the id from an unsigned payload on an "
                }
              ],
              "template": true
            },
            {
              "name": "getPartyNumberFromPublicKey",
              "parameters": [
                {
                  "name": "publicKey : ",
                  "type": "XyoObjectStructure"
                },
                {
                  "name": "boundWitness : ",
                  "type": "XyoBoundWitness"
                },
              ],
              "returns": [
                {
                  "type": "Int",
                  "desc": "a fetter from a bound witness using a public key "
                }
              ]
            }
          ],
        },
        {
          "super": "XyoBoundWitness",
          "desc": "initiates a bound witness for transfer of data ",
          "name": "XyoZigZagBoundWitness",
          "functions": [
            {
              "name": "init",
              "parameters": [
                {
                  "name": "signers : ",
                  "type": "[XyoSigner]",
                },
                {
                  "name": "signedPayload : ",
                  "type": "[XyoObjectStructure]"
                },
                {
                  "name": "unsignedPayload : ",
                  "type": "[XyoObjectStructure]"
                },
                {
                  "name": "handler : ",
                  "type": "XyoNetworkHandler"
                },
                {
                  "name": "choice : ",
                  "type": "UInt8"
                }
              ],
              "returns": [],
            },
            {
              "name": "doBoundWitness",
              "parameters": [
                {
                  "name": "transfer : ",
                  "type": "XyoIterableStructure",
                },
                {
                  "name": "completion : ",
                  "type": "@escaping"
                },
              ],
              "returns": [
                {
                  "type": "XyoIterableStructure",
                  "desc": "a bound witness conversation  "
                }
              ],
              "template": true
            },
          ]
        }
      ]
    },
    {
      "desc": "crypto signing",
      "name": "crypto-signing",
      "objects": [
        {
          "desc": "Performs public key cryptographic operations. A XyoSigner is obtained from a XyoSignerProvider with newInstance(). If a compatible private key is provided the XyoCryptoSigner will create its keypair using this private key. Otherwise, it will create a random keypair. ",
          "name": "XyoSigner",
          "functions": [
            {
              "name": "getPublicKey",
              "parameters": [],
              "returns": [
                {
                  "type": "XyoObjectStructure"
                }
              ]
            },
            {
              "name": "getPrivateKey",
              "parameters": [],
              "returns": [
                {
                  "type": "XyoObjectStructure"
                }
              ]
            },
            {
              "name": "sign",
              "parameters": [
                {
                  "name": "data :",
                  "type": "UInt8"
                }
              ],
              "returns": [
                {
                  "type": "XyoObjectStructure"
                }
              ]
            }
          ]
        },
      ]
    },
    {
      "desc": "hashing classes",
      "name": "hashing",
      "objects": [
        {
          "desc": "creates a hash as an XyoObjectStructure ",
          "name": "XyoHasher",
          "functions": [
            {
              "name": "",
              "parameters": [
                {
                  "name": "data : ",
                  "type": "UInt8"
                }
              ],
              "returns": [
                {
                  "type": "XyoObjectStructure",
                  "desc": "a hash as an "
                }
              ]
            }
          ]
        },
        {
          "desc": "creates a sha256 hash from an XyoObjectStructure using XyoHasher",
          "name": "XyoSha256",
          "functions": [
            {
            "name": "hash",
            "parameters": [
              {
                "name": "data : ",
                "type": "UInt8"
              }
            ],
            "returns": [
                {
                "type": "XyoObjectStructure",
                "desc": "a sha256 hash using the xyo sha256 schema as an "
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "desc": "heuristic classes",
      "name": "heuristics",
      "objects": [
        {
          "desc": "gets a heuristic as an XyoObjectStructure",
          "name": "XyoHeuristicGetter",
          "functions": [
            {
            "name": "getHeuristic",
            "parameters": [],
            "returns": [
                {
                "type": "XyoObjectStructure",
                "desc": "a heuristic "
                }
              ]
            }
          ]          
        },
        {
          "desc": "unix time operations for a heuristic using the XyoObjectStructure",
          "name": "XyoUnixTime",
          "functions": [
            {
            "name": "getUnixTime",
            "parameters": [],
            "returns": [
                {
                "type": "UInt64",
                "desc": "a unix time heuristic "
                }
              ]
            },
            {
            "name": "createNow",
            "parameters": [],
            "returns": [
                {
                "type": "XyoUnixTime",
                "desc": "a created unix time heuristic at the current time "
                }
              ]
            },
            {
            "name": "createThen",
            "parameters": [
              {
                "name": "time",
                "type": "UInt64"
              }
            ],
            "returns": [
                {
                "type": "XyoUnixTime",
                "desc": "a created unix time heuristic at a specified time "
                }
              ]
            }
          ]           
        },
        {
          "desc": "XYO unix time getter using XyoHeuristicGetter",
          "name": "XyoUnixTimeGetter",
          "functions": [
            {
            "name": "getHeuristic",
            "parameters": [],
            "returns": [
                {
                "type": "XyoObjectStructure",
                "desc": "an XYO unix time heuristic at current time "
                }
              ]
            }
          ]           
        }
      ]
    },
    {
      "desc": "network classes",
      "name": "network",
      "objects": [
        {
          "name": "XyoAdvertisePacket",
          "desc": "A packet with a byte buffer for advertising",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "init",
              "parameters": [
                {
                  "name": "data : ",
                  "type": "[UInt8]"
                }
              ],
              "returns": []
            },
            {
              "name": "getChoice",
              "parameters": [],
              "returns": [
                {
                  "type": "XyoBuffer",
                  "desc": "the advertise packet choice "
                }
              ]
            }
          ]
        },
        {
          "name": "XyoChoicePacket",
          "desc": "packets getting choice and response",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "init",
              "parameters": [
                {
                  "name": "data : ",
                  "type": "[UInt8]"
                }
              ],
              "returns": []
            },
            {
              "name": "getChoice",
              "parameters": [],
              "returns": [
                  {
                    "type": "XyoBuffer",
                    "desc": "gets a range based on choice as an "
                  }
              ]
            },
            {
              "name": "getResponse",
              "parameters": [],
              "returns": [
                  {
                    "type": "XyoBuffer",
                    "desc": "gets a response based on choice as a "
                  }
              ]
            }
          ]
        },                
        {
          "name": "XyoFlagProcedureCatalog",
          "desc": "flags using XyoProcedureCatalog",
          "properties": [
            {
              "name": "canDoForOther",
              "type": "UInt32"
            },
            {
              "name": "canDoWithOther",
              "type": "UInt32"
            }
          ],
          "enumerations": [],
          "functions": [
            {
              "name": "init",
              "parameters": [
                {
                  "name": "forOther : ",
                  "type": "UInt32"
                },
                {
                  "name": "withOther : ",
                  "type": "UInt32"
                }
              ],
              "returns": []
            },
            {
              "name": "canDo",
              "parameters": [
                {
                  "name": "bytes : ",
                  "type": "[UInt8]"
                }
              ],
              "returns": [
                  {
                    "type": "Boolean",
                    "desc": "determines if an encoded catalogue can be done on a bound witness"
                  }
              ]
            },
            {
              "name": "getEncodedCatalogue",
              "parameters": [],
              "returns": [
                  {
                    "type": "UInt8",
                    "desc": "gets an encoded catalogue as an "
                  }
              ]
            },
            {
              "name": "choose",
              "parameters": [
                {
                  "name": "catalogue : ",
                  "type": "[UInt8]"
                }
              ],
              "returns": [
                  {
                    "type": "[UInt8]",
                    "desc": "gets a series of bound witness catalog flags to choose from  "
                  }
              ]
            }
          ]
        },
        {
          "name": "XyoNetworkHandler",
          "desc": "Handles network packet transmissions",
          "properties": [
            {
              "name": "pipe",
              "type": "XyoNetworkPipe"
            },
          ],
          "enumerations": [],
          "functions": [
            {
              "name": "init",
              "parameters": [
                {
                  "name": "pipe : ",
                  "type": "XyoNetworkPipe"
                }
              ],
              "returns": []
            },
            {
              "name": "sendCataloguePacket",
              "parameters": [
                {
                  "name": "catalogue : ",
                  "type": "[UInt8]"
                },
                {
                  "name": "completion : ",
                  "type": "@escaping"
                }
              ],
              "returns": []
            },
            {
              "name": "sendChoicePacket",
              "parameters": [
                {
                  "name": "catalogue",
                  "type": "[UInt8]"
                },
                {
                  "name": "response",
                  "type": "[UInt8]"
                },
                {
                  "name": "completion",
                  "type": "@escaping"
                }
              ],
              "returns": []
            }
          ]
        },                        
        {
          "desc": "protocol for piping in XYO",
          "name": "XyoNetworkPipe",
          "functions": [
            {
              "name": "getInitiationData",
              "parameters": [],
              "returns": [
                {
                  "type": "XyoAdvertisePacket",
                  "desc": ""
                }
              ]
            },
            {
              "name": "getNetworkHeuristics",
              "parameters": [],
              "returns": [
                {
                  "type": "[XyoObjectStructure]",
                  "desc": ""
                }
              ]
            },
            {
              "name": "send",
              "parameters": [
                {
                  "name": "data",
                  "type": "[UInt8]"
                },
                {
                  "name": "waitForResponse",
                  "type": "Boolean"
                },
                {
                  "name": "completion",
                  "type": "@escaping"
                }
              ],
              "returns": []
            },
            {
              "name": "close",
              "parameters": [],
              "returns": []
            }
          ]          
        },
        {
          "desc": "protocol for an XYO Procedure Catalog",
          "name": "XyoProcedureCatalog",
          "functions": [
            {
              "name": "canDo",
              "parameters": [
                {
                  "name": "bytes : ",
                  "type": "[UInt8]"
                }
              ],
              "returns": [
                  {
                    "type": "Boolean",
                    "desc": ""
                  }
              ]
            },
            {
              "name": "getEncodedCatalogue",
              "parameters": [],
              "returns": [
                  {
                    "type": "UInt8",
                    "desc": "gets an encoded catalogue as an "
                  }
              ]
            },
            {
              "name": "choose",
              "parameters": [
                {
                  "name": "catalogue : ",
                  "type": "[UInt8]"
                }
              ],
              "returns": [
                  {
                    "type": "[UInt8]",
                    "desc": ""
                  }
              ]
            }
          ]          
        }
      ]
    },
    {
      "desc": "node classes",
      "name": "node",      
      "objects": [
        {
          "desc": "a struct that takes payloads for an heuristic pair",
          "name": "XyoBoundWitnessHueristicPair",
          "properties": [
            {
              "name": "unsignedPayload",
              "type": "[XyoObjectStructure]"
            },
            {
              "name": "signedPayload",
              "type": "[XyoObjectStructure]"
            },
          ],
          "functions": [
            {
              "name": "init",
              "parameters": [
                {
                  "name": "signedPayload : ",
                  "type": "[XyoObjectStructure]"
                },
                {
                  "name": "unsignedPayload : ",
                  "type": "[XyoObjectStructure]"
                }
              ],
              "returns": []
            },            
          ]          
        },
        {
          "desc": "protocol for bound witness option",
          "name": "XyoBoundWitnessOption",
          "functions": [
            {
              "name": "getFlag",
              "parameters": [],
              "returns": [
                {
                  "type": "[UInt8]"
                }
              ]
            },            
            {
              "name": "getPair",
              "parameters": [],
              "returns": [
                {
                  "type": "XyoBoundWitnessHeuristicPair"
                }
              ]
            },            
            {
              "name": "onCompleted",
              "parameters": [
                {
                  "name": "boundWitness : ",
                  "type": "XyoBoundWitness"
                }
              ],
              "returns": []
            }           
          ]          
        },
        {
          "desc": "a queue for an XYO bridge which holds hashes and values",
          "name": "XyoBridgeQueue",
          "properties": [
            {
              "name": "repo",
              "type": "XyoBridgeQueueRepository"
            },
            {
              "name": "sendLimit",
              "type": "Int"
            },
            {
              "name": "removeWeight",
              "type": "Int"
            }
          ],
          "functions": [
            {
              "name": "init",
              "parameters": [
                {
                  "name": "repository : ",
                  "type": "XyoBridgeQueueRepository"
                }
              ],
              "returns": []
            },            
            {
              "name": "addBlock",
              "parameters": [
                {
                  "name": "blockHash : ",
                  "type": "XyoObjectStructure"
                }
              ],
              "returns": []
            },            
            {
              "name": "addBlock",
              "parameters": [
                {
                  "name": "blockHash : ",
                  "type": "XyoObjectStructure"
                },
                {
                  "name": "weight : ",
                  "type": "Int"
                }
              ],
              "returns": []
            },            
            {
              "name": "getBlocksToBridge",
              "parameters": [],
              "returns": [
                {
                  "type": "[XyoBridgeQueueItem]",
                  "desc": ""
                }
              ]
            },         
            {
              "name": "onBlocksBridged",
              "parameters": [
                {
                  "name": "blocks : ",
                  "type": "[XyoBridgeQueueItem]"
                }
              ],
              "returns": []
            },         
            {
              "name": "getBlocksToRemove",
              "parameters": [],
              "returns": [
                {
                  "type": "[XyoObjectStructure]",
                  "desc": ""
                }
              ]
            }         
          ]          
        },
        {
          "desc": "item to be placed into an XYOBridgeQueue",
          "name": "XyoBridgeQueueItem",
          "properties": [
            {
              "name": "weight",
              "type": "Int"
            },
            {
              "name": "hash",
              "type": "XyoObjectStructure"
            },
          ],
          "functions": [
            {
              "name": "init",
              "parameters": [
                {
                  "name": "weight : ",
                  "type": "Int"
                },
                {
                  "name": "hash : ",
                  "type": "XyoObjectStructure"
                }
              ],
              "returns": []
            }
          ]
        },
        {
          "super": "XyoBoundWitnessOption",
          "desc": "initiates XYO bridging options with flag selectors and bound witness pairs",
          "name": "XyoBridgingOption",
          "properties": [],
          "functions": [
            {
              "name": "onBoundWitnessStart",
              "parameters": [],
              "returns": []
            },
            {
              "name": "onBoundWitnessEndFailure",
              "parameters": [],
              "returns": []
            },
            {
              "name": "onBoundWitnessDiscovered",
              "parameters": [],
              "returns": [
                {
                  "type": "XyoBoundWitnessHeuristicPair",
                  "desc": "gets a bound witness heuristic pair for bridging option "
                }
              ]
            },
            {
              "name": "onCompleted",
              "parameters": [
                {
                  "name": "boundWitness : ",
                  "type": "XyoBoundWitness"
                }
              ],
              "returns": []
            }
          ]          
        },
        {
          "desc": "a node listener, added through the .addListener method from XyoOriginChainCreator",
          "name": "XyoNodeListener",
          "functions": [
            {
              "name": "onBoundWitnessStart",
              "parameters": [],
              "returns": []
            },
            {
              "name": "onBoundWitnessEndFailure",
              "parameters": [],
              "returns": []
            },
            {
              "name": "onBoundWitnessDiscovered",
              "parameters": [
                {
                  "name": "boundWitness : ",
                  "type": "XyoBoundWitness"
                }
              ],
              "returns": []
            },
            {
              "name": "onBoundWitnessEndSuccess",
              "parameters": [
                {
                  "name": "boundWitness : ",
                  "type": "XyoBoundWitness"
                }
              ],
              "returns": []
            }
          ]            
        },
        {
          "super": "", 
          "desc": "the main entry point for creating and maintaining an origin chain",
          "name": "XyoOriginChainCreator",
          "properties": [
              {
                "name": "repositoryConfiguration",
                "desc": "configuration for persisting chain state",
                "type": "XyoRepositoryConfiguration"
              },
              {
                "name": "hasher",
                "desc": "property for hashing origin blocks ",
                "type": "XyoHasher"
              },
              {
                "name": "originState",
                "desc": "origin state of the node ",
                "type": "XyoOriginChainState"
              }
            ],
            "enumerations": [],
            "functions": [
              {
                "name": "init",
                "parameters": [
                  {
                    "name": "hasher : ",
                    "type": "XyoHasher"
                  },
                  {
                    "name": "repositoryConfiguration : ",
                    "type": "XyoRepositoryConfiguration"
                  }
                ],
                "returns": []
              },
              {
                "name": "addHeuristic",
                "parameters": [
                  {
                    "name": "key : ",
                    "type": "String"
                  },
                  {
                    "name": "getter : ",
                    "type": "XyoHeuristicGetter"
                  }
                ],
                "returns": []
              },
              {
                "name": "removeHeuristic",
                "parameters": [
                  {
                    "name": "key : ",
                    "type": "String"
                  }
                ],
                "returns": []
              },
              {
                "name": "addListener",
                "parameters": [
                  {
                    "name": "key : ",
                    "type": "String"
                  },
                  {
                    "name": "listener : ",
                    "type": "XyoNodeListener"
                  }
                ],
                "returns": []
              },
              {
                "name": "removeListener",
                "parameters": [
                  {
                    "name": "key : ",
                    "type": "String"
                  }
                ],
                "returns": []
              },
              {
                "name": "selfSignOriginChain",
                "parameters": [],
                "returns": [
                  {
                    "type": "boundWitness",
                    "desc": "self-signs then goes through the onBoundWitnessCompleted listener"
                  }
                ]
              },
              {
                "name": "addBoundWitnessOption",
                "parameters": [
                  {
                    "name": "key : ",
                    "type": "String"
                  },
                  {
                    "name": "option : ",
                    "type": "XyoBoundWitnessOption"
                  }
                ],
                "returns": []
              },
              {
                "name": "removeBoundWitnessOption",
                "parameters": [
                  {
                    "name": "key : ",
                    "type": "String"
                  }
                ],
                "returns": []
              },
              {
                "name": "boundWitness",
                "parameters": [
                  {
                    "name": "handler : ",
                    "type": "XyoNetworkHandler"
                  },
                  {
                    "name": "procedureCatalogue : ",
                    "type": "XyoProcedureCatalog"
                  },
                  {
                    "name": "completion : ",
                    "type": "@escaping"
                  }
                ],
                "returns": [
                  {
                    "type": "XyoBoundWitness",
                    "desc": "after completion and choices set returns an ",
                  }
                ]
              }
            ]          
        },
        {
          "super": "XyoOriginChainCreator, XyoNodeListener",
          "desc": "a relay node for bound witness information which executes listening functions for the origin chain",
          "name": "XyoRelayNode",
        },
      ]
    },
    {
      "desc": "origin chain classes",
      "name": "origin",
      "objects": [
        {
          "super": "",
          "desc": "Struct to help with the orgin related utilities of an origin chain",
          "name": "XyoOriginBoundWitnessUtil",
          "functions": [
            {
              "name": "getBridgedBlocks",
              "parameters": [
                {
                  "name": "boundWitness",
                  "type": "XyoBoundWitness"
                }
              ],
              "returns": [
                {
                  "type": "XyoIterableStructure",
                  "desc": "the bridged blocks of the first party that has them"
                }
              ]
            }
          ]
        },
        {
          "desc": "updates the XyoOriginChainStateRepository to reflect the current root state of the node ",
          "name": "XyoOriginChainState",
          "properties": [
            {
              "name": "repo",
              "desc": "the repository that the state uses as source of truth to persist data",
              "type": "XyoOriginChainStateRepository"
            }
          ],
          "functions": [
            {
              "name": "init",
              "parameters": [
                {
                  "name": "repository",
                  "type": "XyoOriginChainStateRepository"
                }
              ],
              "returns": []
            },
            {
              "name": "getIndex",
              "parameters": [],
              "returns": [
                {
                  "type": "XyoObjectStructure",
                  "desc": "the index to include in the current bound witness"
                }
              ]
            },
            {
              "name": "getPreviousHash",
              "parameters": [],
              "returns": [
                {
                  "type": "XyoObjectStructure",
                  "desc": "the previous hash to include in the current bound witness"
                }
              ]
            },
            {
              "name": "getSigners",
              "parameters": [],
              "returns": [
                {
                  "type": "[XyoSigner]",
                  "desc": "the current signers to include in the next bound witness"
                }
              ]
            },
            {
              "name": "getNextPublicKey",
              "parameters": [],
              "returns": [
                {
                  "type": "XyoObjectStructure",
                  "desc": "the next public key to include in the next bound witness"
                }
              ]
            },
            {
              "name": "removeOldestSigner",
              "parameters": [],
              "returns": []
            },
            {
              "name": "addSigner",
              "parameters": [
                {
                  "name": "signer : ",
                  "type": "XyoSigner"
                }
              ],
              "returns": []
            },
            {
              "name": "addOriginBlock",
              "parameters": [
                {
                  "name": "hash : ",
                  "type": "XyoObjectStructure"
                }
              ],
              "returns": []
            }
          ]
        },
      ]      
    },
    {
      "desc": "persist storage classes",
      "name": "persist",
      "objects": [
        {
          "desc": "XYO in memory storage using the XYOStorageProvider",
          "name": "XyoInMemoryStorage",
          "functions": [
            {
              "name": "write",
              "parameters": [
                {
                  "name": "key : ",
                  "type": "[UInt8]"
                }
              ],
              "returns": []
            },
            {
              "name": "read",
              "parameters": [
                {
                  "name": "key : ",
                  "type": "[UInt8]"
                }
              ],
              "returns": [
                {
                  "type": "UInt8",
                  "desc": "the storage map from the key inputed"
                }
              ]
            },
            {
              "name": "delete",
              "parameters": [
                {
                  "name": "key : ",
                  "type": "[UInt8]"
                }
              ],
              "returns": []
            },
            {
              "name": "containsKey",
              "parameters": [
                {
                  "name": "key : ",
                  "type": "[UInt8]"
                }
              ],
              "returns": [
                {
                  "type": "Boolean",
                  "desc": "confirmation that the key inputed is in storage"
                }
              ]
            }
          ]
        },
        {
          "super": "",
          "desc": "primary methods for the XyoInMemoryStorageProvider",
          "name": "XyoStorageProvider",
          "functions": [
            {
              "name": "write",
              "parameters": [
                {
                "name": "key : ",
                "type": "[UInt8]"
                }
            ],
              "returns": []
            },
            {
              "name": "read",
              "parameters": [
                {
                "name": "key : ",
                "type": "[UInt8]"
                }
            ],
              "returns": [
                {
                "type": "UInt8"
                }
              ]
            },
            {
              "name": "delete",
              "parameters": [
                {
                "name": "key : ",
                "type": "[UInt8]"
                }
            ],
              "returns": []
            },
            {
              "name": "containsKey",
              "parameters": [
                {
                "name": "key : ",
                "type": "[UInt8]"
                }
            ],
              "returns": [
                {
                "type": "Boolean"
                }
              ]
            }
          ]
        },
      ]      
    },
    {
      "desc": "repository storage classes",
      "name": "repositories",
      "objects": [        
        {
          "desc": "Repository to facilitate the persistence of a queue",
          "name": "XyoBridgeQueueRepository",
          "functions": [
            {
              "name": "getQueue",
              "parameters": [
            ],
              "returns": [
                {
                  "type": "[XyoBridgeQueueItem]",
                  "desc": "the entire queue"
                }
              ]
            },
            {
              "name": "setQueue",
              "parameters": [
                {
                "name": "queue : ",
                "type": "[XyoBridgeQueueItem]"
                }
            ],
              "returns": []
            },
            {
              "name": "addQueueItem",
              "parameters": [
                {
                "name": "item : ",
                "type": "XyoBridgeQueueItem"
                }
            ],
              "returns": []
            },
            {
              "name": "removeQueueItems",
              "parameters": [
                {
                "name": "hashes : ",
                "type": "[XyoObjectStructure]"
                }
            ],
              "returns": []
            },
            {
              "name": "getLowestWeight",
              "parameters": [
                {
                "name": "n : ",
                "type": "Int"
                }
            ],
              "returns": [
                {
                  "type": "[XyoBridgeQueueItem]",
                  "desc": "minimum number of blocks in queue"
                }
              ]
            },
            {
              "name": "incrementWeights",
              "parameters": [
                {
                "name": "hashes : ",
                "type": "[XyoObjectStructure]"
                }
            ],
              "returns": []
            }
          ]          
        },
        {
          "super": "",
          "desc": "A repository to store origin blocks in a persistent manner",
          "name": "XyoOriginBlockRepository",
          "functions": [
            {
              "name": "removeOriginBlock",
              "parameters": [
                {
                "name": "originBlockHash : ",
                "type": "[UInt8]"
                }
            ],
              "returns": []
            },
            {
              "name": "getOriginBlock",
              "parameters": [
                {
                "name": "originBlockHash : ",
                "type": "[UInt8]"
                }
            ],
              "returns": [
                {
                "type": "XyoBoundWitness",
                "desc": "The origin block pertaining to the hash"
                }
              ]
            },
            {
              "name": "containsOriginBlock",
              "parameters": [
                {
                "name": "originBlockHash : ",
                "type": "[UInt8]"
                }
            ],
              "returns": [
                {
                  "type": "Boolean"
                }
              ]
            },
            {
              "name": "addOriginBlock",
              "parameters": [
                {
                "name": "originBlock : ",
                "type": "XyoBoundWitness"
                }
            ],
              "returns": []
            }
          ]          
        },
        {
          "desc": "A repository to facilitate the storage of origin chain state related items",
          "name": "XyoOriginChainStateRepository",
          "functions": [
            {
              "name": "getIndex",
              "parameters": [],
              "returns": [
                {
                  "type": "XyoObjectStructure",
                  "desc": "the index from the repo"
                }
              ]
            },
            {
              "name": "putIndex",
              "parameters": [
                {
                "name": "index : ",
                "type": "XyoObjectStructure"
                }
            ],
              "returns": []
            },
            {
              "name": "getPreviousHash",
              "parameters": [],
              "returns": [
                {
                  "type": "XyoObjectStructure",
                  "desc": "the previous hash from the repo" 
                }
              ]
            },
            {
              "name": "putPreviousHash",
              "parameters": [
                {
                "name": "hash : ",
                "type": "XyoObjectStructure"
                }
            ],
              "returns": []
            },
            {
              "name": "getSigners",
              "parameters": [],
              "returns": [
                {
                  "type": "[XyoSigner]",
                  "desc": "all of the current signers that are being persisted"
                }
              ]
            },
            {
              "name": "removeOldestSigner",
              "parameters": [],
              "returns": []
            },
            {
              "name": "putSigner",
              "parameters": [
                {
                  "name": "signer : ",
                  "type": "XyoSigner"
                }
              ],
              "returns": []
            },
            {
              "name": "commit",
              "parameters": [],
              "returns": []
            },
            {
              "name": "setStaticHeuristics",
              "parameters": [
                {
                  "name": "heuristics : ",
                  "type": "XyoObjectStructure"
                }
              ],
              "returns": []
            },
            {
              "name": "getStaticHeuristics",
              "parameters": [],
              "returns": [
                {
                  "type": "[XyoObjectStructure]",
                  "desc": "static heuristics that are being persisted"
                }
              ]
            },
            {
              "name": "onBoundWitness",
              "parameters": [],
              "returns": []
            },
            {
              "name": "lastBoundWitnessTime",
              "parameters": [],
              "returns": [
                {
                  "type": "UInt64",
                  "desc": "time of bound witness last persisted in unix"
                }
              ]
            }
          ]           
        },
        {
          "super": "",
          "desc": "configuration for a repository in xyo for chain state persistence",
          "name": "XyoRepositoryConfiguration",
          "properties": [
            {
              "name": "originState",
              "type": "XyoOriginChainStateRepository"
            },
            {
              "name": "originBlock",
              "type": "XyoOriginBlockRepository"
            }
          ],          
        },
        {
          "super": "",
          "desc": "Persists the state of tcp peers",
          "name": "XyoTcpPeerRepository",
          "functions": [
            {
              "name": "getRandomPeer",
              "parameters": [
            ],
              "returns": [
                {
                  "type": "XyoTcpPeer",
                  "desc": "a random peer in all of the peers"
                }
              ]
            },
            {
              "name": "getPeers",
              "parameters": [],
              "returns": [
                {
                  "type": "[XyoTcpPeer]",
                  "desc": "all of the peers"
                }
              ]
            },
            {
              "name": "addPeer",
              "parameters": [
                {
                "name": "peer : ",
                "type": "XyoTcpPeer"
                }
            ],
              "returns": []
            },
            {
              "name": "removePeer",
              "parameters": [
                {
                "name": "peer : ",
                "type": "XyoTcpPeer"
                }
            ],
              "returns": []
            }
          ]           
        },
      ]
    },
    {
      "desc": "XyoSchemas Available",
      "name": "schemas",
      "objects": []
    }
  ],
}]