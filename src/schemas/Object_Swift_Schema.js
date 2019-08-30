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
          "desc": "A object that constructs and parses a bound witness. This is the foundation of the core library. ",
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
          "desc": "This class provides utilities for mutating a bound witness. This is a low level object. ",
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
          "desc": "This object is a class for creating a bound witness with a pipe interface  (send and receive), but, does not handle network handshake",
          "name": "XyoZigZagBoundWitnessSession",
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
          "desc": "Interface/Protocol for hashing funcions. We use the XyoHasher to abstract a hashing algorithm from the XYO protocol ",
          "name": "XyoHasher",
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
                  "desc": "a hash as an "
                }
              ]
            }
          ]
        },
        {
          "desc": "Implementation of XyoHasher with sha256",
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
          "desc": "Interface for putting data inside a bound witness. An object that implements this protocol can be added to XyoOriginChainCreator to add data to bound witnesses",
          "name": "XyoHeuristicGetter",
          "functions": [
            {
            "name": "getHeuristic",
            "desc": "Gets the Heuristic for the getter. If the heuristic is null, the heuristic will not be included in the payload.",
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
          "desc": "Unix time operations for a heuristic using the XyoObjectStructure",
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
          "desc": "An implementation of XyoHeuristicGetter that puts time in a bound witness.",
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
          "desc": "Helper object to help parse the advertising stage of the network protocol",
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
          "desc": "Helper object to help parse the choice stage of the network protocol",
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
          "desc": "Helper object for negotiations in the handshake network protocol",
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
          "desc": "Helps send network protocol packets over a XyoNetworkPipe",
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
          "desc": "Network abstraction that can be used for doing bound witnesses with other devices. This library comes with two implementations, a memory pipe used for testing and simulations, and a tcp device with for communicating with tcp/ip devices.",
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
          "desc": "Interface used for advertising and negotiating what a device can do and support",
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
          "desc": "Used for putting conditional data inside the bound witness based on negotiation.",
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
          "desc": "A queue for an XYO bridge which holds hashes of blocks to offload.",
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
          "desc": "Simple object that ties a block hash to the number of times it's been offloaded by the bridge queue.",
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
          "desc": "Implementation of the XyoBoundWitnessOption for bridging blocks when the bridge flag is set in the network handshake",
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
          "desc": "A node listener, added through the .addListener() method from XyoOriginChainCreator to receive callbacks to when a bound witness starts, occurs, discovered, and/or fails.",
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
          "desc": "The main entry point for creating and maintaining an origin chain",
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
                "desc": "Adds a heuristic to be used when creating bound witnesses.",
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
                "desc": "Removes a heuristic from the current heuristic pool.",
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
                "desc": "Adds a Node Listener to listen for bound witness creations.",
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
                "desc": "Removes a listener from the current listener pool.",
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
                "desc": "Self signs an origin block to the devices origin chain.",
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
          "desc": "An origin chain that knows how to bridge blocks to origin nodes (sentinel/bridge)",
          "name": "XyoRelayNode",
        },
      ]
    },
    {
      "desc": "origin chain classes",
      "name": "origin",
      "objects": [
        {
          "desc": "Helper object helps parse origin chain related information out of a single bound witness.",
          "name": "XyoOriginBoundWitnessUtil",
          "functions": [
            {
              "name": "getBridgedBlocks",
              "desc": "Gets the bridged blocks from a bound witness.",
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
          "desc": "Updates the XyoOriginChainStateRepository to reflect the current root state of the node, the origin chain state is where the previous hash, the index, the signers are held for the origin chain.",
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
          "desc": "XYO in memory store storing key-value pairs in memory when testing/simulating any type of persistence, it's also an implementation of the XyoStorageProvider",
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
          "desc": "Abstration for persisting key-value pairs",
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
          "desc": "A repository to facilitate the persistence of a queue, or a series of weights and hashes. It is optional to implement a caching mechanism behind this repo, but it is highly recommended. This repository does not need to persist any data until the commit() function is called. No getter should have a default value.",
          "name": "XyoBridgeQueueRepository",
          "functions": [
            {
              "name": "getQueue",
              "desc": "This function is called every time blocks need to be cleaned from the queue. It is called so that weights can determine if a hash needs to be removed from the queue.",
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
              "desc": "This function is not currently called in the XYO core, and is only called by certain unit tests. Although it should be implemented for future use.",
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
              "desc": "This function is called every time a new bound witness is discovered to add to the queue. It does not matter where this item is added in the queue.",
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
              "desc": "This function should remove all of the queue items by their hash. If a hash does not exist, skip over it. This function is called after every successful bridge is made to keep the storage light.",
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
              "desc": "This function should get the lowest weight queue items and return them. It should return the number of parameter n, if the repo does not have n queue items, it should return the entire queue. This function is called every time the device is getting ready to bridge.",
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
              "desc": "This function is called every time after a successful bridge event to increment their weights by weight += 1.",
              "parameters": [
                {
                  "name": "hashes : ",
                  "type": "[XyoObjectStructure]"
                }
              ],
              "returns": []
            },
            {
              "name": "commit",
              "desc": "This function is called after every bound witness to persist the state of the queue, if there is non caching implemented, there is no reason to implement this method.",
              "parameters": [],
              "returns": []
            }
          ]          
        },
        {
          "super": "",
          "desc": "A repository to store origin blocks in a persistent manner. These functions are called as often as a device does bound witnesses. This repo should be optimized for containsOriginBlock() as it is called the most.",
          "name": "XyoOriginBlockRepository",
          "functions": [
            {
              "name": "removeOriginBlock",
              "desc": "This function should remove an origin block by a its hash from the repository and update the persisted state.",
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
              "desc": "This function gets an origin block by its hash.",
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
              "desc": "This function should check if an origin block is found in the repo. This should be optimized given this it is called often.",
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
              "desc": "This function adds an origin block to the repo.",
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
          "desc": "A repository to facilitate the storage of origin chain state related items. It is optional to implement a caching mechanism behind this repo, but it is highly recomended. This repo does not need to persist any data until the commit() function is called. No getter should have a defualt value.",
          "name": "XyoOriginChainStateRepository",
          "functions": [
            {
              "name": "getIndex",
              "desc": "This function gets the index from the repo, and should return null if none exists. This function is called before every bound witness.",
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
              "desc": "This function should persist the state of the index after the commit() function is called. This function is called before every bound witness.",
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
              "desc": "This function gets the previous hash from the repo, and should return null if none exists. This function is called before every bound witness.",
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
              "desc": "This function should persist the state of the previous hash after the commit() function is called. This function is called before every bound witness.",
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
              "desc": "This function should get all of the current signers that are being persisted. This function is called before every bound witness.",
              "parameters": [],
              "returns": [
                {
                  "type": "[XyoSigner]"
                }
              ]
            },
            {
              "name": "removeOldestSigner",
              "desc": "This function should remove getSigners()[0], or not remove the oldest signer if none are in the repo. This function is called whenever a user is roatating keys.",
              "parameters": [],
              "returns": []
            },
            {
              "name": "putSigner",
              "desc": "This function should add a signer to the end of the signer list. This function is only called when a user wants to rotate kets.",
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
              "desc": "This function is called after every bound witness to persist the state, if there is non caching implemented, there is no reason to implement this method.",
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
          "desc": "This repository is meant to persist the state of tcp peers, although this is not called in the XYO core, it may be used by other nodes and applications to persist the nodes that they know about.",
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
      "objects": [
        {
          "desc": "The list of all of the official encoding headers for XYO Serialization"
        }
      ]
    }
  ],
}]