module.exports = [{
  "id": "sdk-core-kotlin",
    "name": "Core XYO Kotlin SDK",
    "locale": "EN",
    "platform": "java",
    "lang": "Kotlin",
    "type": "SDK",
    "desc": "Generalized Bluetooth Library with additional support for XY and XYO devices",
    "modules": [
      {
        "desc": "XYO Bound Witness",
        "name": "bound witness",
        "objects": [
          {
            "name": "XyoBoundWitness",
            "desc": "A Bound Witness Object that is independent of origin state. This implements the XYO cryptographic structure.",
            "properties": [
              {
                "name": "completed ",
                "desc": "Is the bound witness completed or not.",
                "type": "boolean"
              },
              {
                "name": "numberOfParties",
                "desc": "The number of parties in the bound witness ",
                "type": "Int"
              }
            ],
            "functions": [
              {
                "name": "getFetterOfParty",
                "desc": "Gets a fetter from a party in a bound witness.",
                "parameters": [
                  {
                    "name": "hashCreator",
                    "type": "XyoHashProvider"
                  }
                ],
                "returns": [
                  {
                    "type": "XyoIterableObject"
                  }
                ]
              },
              {
                "name": "getWitnessOfParty",
                "desc": "Gets a witness from a party in a bound witness.",
                "parameters": [
                  {
                    "name": "hashCreator",
                    "type": "XyoHashProvider"
                  }
                ],
                "returns": [
                  {
                    "type": "XyoIterableObject",
                    "desc": "Returns the party's witness, if out of index, will return null."
                  }
                ]
              },
              {
                "name": "createFetter",
                "desc": "Creates a fetter with the given payload and publicKeys.",
                "parameters": [
                  {
                    "name": "payload",
                    "type": "Array<XyoObjectStructure>"
                  },
                  {
                    "name": "publicKeys",
                    "type": "XyoObjectStructure"
                  }
                ],
                "returns": [
                  {
                    "type": "XyoIterableObject",
                  }
                ]
              },
              {
                "name": "createWitness",
                "desc": "Creates a witness with the given payload and signatures.",
                "parameters": [
                  {
                    "name": "payload",
                    "type": "XyoObjectStructure"
                  },
                  {
                    "name": "signatures",
                    "type": "XyoObjectStructure"
                  }
                ],
                "returns": [
                  {
                    "type": "XyoIterableObject",
                  }
                ]
              },
              {
                "name": "getHash",
                "desc": "Gets the hash of the bound witness.",
                "parameters": [
                  {
                    "name": "hashCreator",
                    "type": "XyoHash.XyoHashProvider"
                  }
                ],
                "returns": [
                  {
                    "type": "GlobalScope",
                    "desc": "asynchronously returns a deferred XyoHash using"
                  }
                ]
              },
              {
                "name": "signCurrent",
                "desc": "Creates a signature of the bound witness.",
                "parameters": [
                  {
                    "name": "signer",
                    "type": "XyoSigner"
                  }
                ],
                "returns": [
                  {
                    "type": "XyoObjectStructure",
                    "desc": "asynchronously returns a deferred XyoObject signature as an"
                  }
                ]
              }
            ]
          },
          {
            "name": "XyoBoundWitnessUtil",
            "desc": "This class provides utilities for mutating a bound witness. This is a low level object.",
            "functions": [
              {
                "name": "removeTypeFromUnsignedPayload",
                "desc": "Removes a type from the bound witness witnesses and returns a new bound witness object wrought the type.",
                "parameters": [
                  {
                    "name": "type",
                    "type": "Byte"
                  },
                  {
                    "name": "boundWitness",
                    "type": "XyoIterableStructure"
                  }
                ],
                "returns": [
                  {
                    "type": "XyoIterableStructure",
                    "desc": "Returns a bound witness without type as"
                  }
                ]
              },
              {
                "name": "getPartyNumberFromPublicKey",
                "desc": "Gets the index of the party of the bound witness (What index is their fetter).",
                "parameters": [
                  {
                    "name": "boundWitness",
                    "type": "XyoBoundWitness"
                  },
                  {
                    "name": "publicKey",
                    "type": "XyoObjectStructure"
                  }
                ],
                "returns": [
                  {
                    "type": "Int",
                    "desc": "Returns the index of a party as"
                  }
                ]
              }
            ]
          },
          {
            "name": "XyoBoundWitnessVerify",
            "desc": "A class to verify if a single bound witness is valid (does not validate indexes and hashes).",
            "functions": [
              {
                "name": "verify",
                "desc": "Verify a single bound witness.",
                "parameters": [
                  {
                    "name": "boundWitness",
                    "type": "XyoBoundWitness"
                  }
                ],
                "returns": [
                  {
                    "type": "Deferred Boolean through GlobalScope",
                    "desc": "Bound Witness Success as"
                  }
                ]
              }
            ]
          },
          {
            "name": "XyoZigZagBoundWitness",
            "desc": "This object is a class for creating a bound witness with a pipe interface  (send and receive), but, does not handle network handshake",
            "functions": [
              {
                "name": "incomingData",
                "desc": "Adds data to the bound witness and returns whats the party should send back.",
                "parameters": [
                  {
                    "name": "transfer",
                    "type": "XyoIterableStructre"
                  },
                  {
                    "name": "endpoint",
                    "type": "Boolean"
                  }
                ],
                "returns": [
                  {
                    "type": "XyoIterableStructure deferred through GlobalScope",
                    "desc": "A XyoBoundWitnessTransfer to send as"
                  }
                ]
              }
            ]
          },
          {
            "name": "XyoZigZagBoundWitnessSession",
            "desc": "This object is a class for creating a bound witness with a pipe interface (send and receive), but does not handle network handshake",
            "properties": [
              {
                "name": "signedPayload",
                "desc": "Signed Payload ",
                "type": "Array<XyoObjectStructure>"
              },
              {
                "name": "unsignedPayload",
                "desc": "Payload that is unsigned",
                "type": "Array<XyoObjectStructure>"
              },
              {
                "name": "signers",
                "desc": "All signers in a session",
                "type": "Array<XyoSigner>"
              }
            ],
          }
        ]
      },
      {
        "desc": "Crypto Encrypt",
        "name": "crypto-encrypt",
        "objects": [
          {
            "name": "XyoAES",
            "desc": "XyoEncrypter",
            "functions": [
              {
                "name": "encrypt ",
                "parameters": [
                  {
                    "name": "password",
                    "type": "ByteArray"
                  },
                  {
                    "name": "value",
                    "type": "ByteArray"
                  },
                  {
                    "name": "iV",
                    "type": "ByteArray"
                  }
                ],
                "returns": [
                  {
                    "type": "ByteArray",
                    "desc": "A encryption value as a"
                  }
                ]
              },
              {
                "name": "decrypt",
                "parameters": [
                  {
                    "name": "password",
                    "type": "ByteArray"
                  },
                  {
                    "name": "encryptedValue",
                    "type": "ByteArray"
                  },
                  {
                    "name": "iV",
                    "type": "ByteArray"
                  }
                ],
                "returns": [
                  {
                    "type": "ByteArray",
                    "desc": "A decrypted value of an encrypted value as a "
                  }
                ]
              }
            ]
          },
          {
            "name": "XyoEncrypter",
            "desc": "Interface that takes a encrypt and decrypt function. Is used in XyoAES",
            "properties": [
              {
                "name": "iVSize",
                "type": "Int"
              },
              {
                "name": "algorithmName",
                "type": "String"
              }
            ],
            "functions": [
              {
                "name": "encrypt",
                "parameters": [
                  {
                    "name": "password",
                    "type": "ByteArray"
                  },
                  {
                    "name": "value",
                    "type": "ByteArray"
                  },
                  {
                    "name": "iV",
                    "type": "ByteArray"
                  }
                ],
                "returns": [
                  {
                    "type": "ByteArray"
                  }
                ]
              },
              {
                "name": "decrypt",
                "parameters": [
                  {
                    "name": "password",
                    "type": "ByteArray"
                  },
                  {
                    "name": "encryptedValue",
                    "type": "ByteArray"
                  },
                  {
                    "name": "iV",
                    "type": "ByteArray"
                  }
                ],
                "returns": [
                  {
                    "type": "ByteArray"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "desc": "Crypto Signing",
        "name": "crypto-signing",
        "objects": [
          {
            "name": "XyoSigner",
            "desc": "Performs public key cryptographic operations. A XyoSigner is obtained from a XyoSignerProvider with newInstance(). If a compatible private key is provided the XyoCryptoSigner will create its keypair using this private key. Otherwise, it will create a random keypair. ",
            "properties": [
              {
                "name": "privateKey",
                "desc": "The private key of the XyoSigner, this can be used to restore signer state",
                "type": "XyoPrivateKey"
              },
              {
                "name": "publicKey",
                "desc": "The public key of the XyoSigner",
                "type": "XyoPublicKey"
              }
            ],
            "functions": [
              {
                "name": "signData",
                "desc": "Cryptographically signs a given ByteArray so that it can verified with verify().",
                "parameters": [
                  {
                    "name": "bytes",
                    "type": "ByteArray"
                  }
                ],
                "returns": [
                  {
                    "type": "Deferred<XyoObjectStructure>",
                    "desc": "deferred cryptographic signature of the data field"
                  }
                ]
              }
            ]
          },
          {
            "name": "XyoSignerProvider",
            "desc": "Gives access to a XyoSigner that can perform public key cryptographic functions. Note: all functions in this class are abstract. ",
            "properties": [
              {
                "name": "supportedSignatures",
                "desc": "signaturePacking types the signer supports",
                "type": "Array<Byte>"
              },
              {
                "name": "supportedKeys",
                "desc": "keys types the signer supports",
                "type": "Array<Byte>"
              },
              {
                "name": "key",
                "desc": "Key to identify the signer provider by so it can be added to a mapping",
                "type": "Byte"
              }
            ],
            "functions": [
              {
                "name": "disable",
                "desc": "Removes the signer provider to the mapping.",
                "parameters": [],
                "returns": []
              },
              {
                "name": "enable",
                "desc": "Adds the signer provider to the mapping.",
                "parameters": [],
                "returns": []
              },
              {
                "name": "verifySign",
                "desc": "Cryptographically verifies a signature given data, the signature, and a public key that the XyoSigner supports.",
                "parameters": [
                  {
                    "name": "publicKey",
                    "type": "XyoObjectStructure"
                  },
                  {
                    "name": "byteArray",
                    "type": "ByteArray"
                  },
                  {
                    "name": "signature",
                    "type": "XyoObjectStructure"
                  }
                ],
                "returns": [
                  {
                    "type": "Deferred<Boolean>",
                    "desc": "valid signature? deferred true : false"
                  }
                ]
              },
              {
                "name": "newInstance",
                "desc": "Provides a new instance of a XyoSigner for the given algorithm and generates a keypair with the given private key.",
                "parameters": [
                  {
                    "name": "privateKey",
                    "type": "ByteArray"
                  }
                ],
                "returns": [
                  {
                    "type": "XyoSigner",
                  }
                ]
              },
              {
                "name": "newInstance",
                "desc": "Provides a new instance of a XyoSigner for the given algorithm and generates a keypair",
                "parameters": [],
                "returns": [
                  {
                    "type": "XyoSigner"
                  }
                ]
              }
            ]
          }
        ]
      },      
      {
        "desc": "Hashing",
        "name": "hashing",
        "objects": [
          {
            "name": "XyoBasicHashBase",
            "desc": "A base class for fixed size hashes.",
            "properties": [
              {
                "name": "byteArray",
                "desc": "XyoHash",
                "type": "ByteArray"
              }
            ],
            "functions": [
                  {
                "name": "createHash",
                "parameters": [
                  {
                    "name": "data",
                    "type": "ByteArray"
                  }
                ],
                "returns": [
                  {
                    "type": "XyoHash",
                    "desc": "a deferred object as "
                  }
                ]
              }
            ]
          },
          {
            "name": "XyoHash",
            "desc": "Base class for containing and encoding hashes created as a deferred XyoObjectStructure.",
            "properties": [
              {
                "name": "hash",
                "desc": "encoded hash",
                "type": "ByteArray"
              }
            ],
          },
          {
            "name": "XyoHashProvider",
            "desc": "A base class for creating hashes.",
            "functions": [
                {
                "name": "createHash",
                "desc": "Creates a hash given a ByteArray.",
                "parameters": [
                  {
                    "name": "data",
                    "type": "ByteArray"
                  }
                ],
                "returns": [
                  {
                    "type": "XyoHash",
                    "desc": "a deferred object as "
                  }
                ]
              }              
            ]
          },
          {
            "name": "XyoSha3",
            "desc": "A Keccak hash (256 bit)",
            "properties": [
              {
                "name": "standardDigestKey",
                "desc": "A sha3 string",
                "type": "String"
              },
              {
                "name": "schema",
                "desc": "A sha3 schema",
                "type": "XyoObjectSchema"
              }
            ],
            "functions": [
              {
                "name": "createHash",
                "desc": "Creates a hash given a ByteArray.",
                "parameters": [
                  {
                    "name": "data",
                    "type": "ByteArray"
                  }
                ],
                "returns": [
                  {
                    "type": "XyoBasicHashBase as sha3",
                    "desc": "A deferred XyoHash as"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "desc": "Heuristics",
        "name": "heuristics",
        "objects": [
          {
            "name": "XyoHeuristicGetter ",
            "desc": "Interface for putting data inside a bound witness. An object that implements this protocol can be added to XyoOriginChainCreator to add data to bound witnesses.",
            "functions": [
              {
                "name": "getHeuristic",
                "desc": "Gets the Heuristic for the getter. If the heuristic is null, the heuristic will not be included in the payload.",
                "parameters": [],
                "returns": [
                  {
                    "type": "XyoObjectStructure",
                  }
                ]
              }
            ]
          },
          {
            "name": "XyoUnixTime",
            "desc": "Unix time operations for a heuristic using the XyoObjectStructure.",
            "properties": [
              {
                "name": "time",
                "desc": "The time the heuristic was created",
                "type": "Long",
              },
              {
                "name": "byteArray",
                "desc": "byteArray from heuristic",
                "type": "ByteArray",
              }
            ]
          }
        ]
      },
      {
        "desc": "Log",
        "name": "log",
        "objects": [
          {
            "name": "XyoLogger ",
            "desc": "An interface object that handles debug, info, special, and error logs.",
            "functions": [
              {
                "name": "logDebug",
                "parameters": [
                  {
                    "name": "info ",
                    "type": "String"
                  },
                  {
                    "name": "tag",
                    "type": "string"
                  }
                ],
                "returns": []
              },
              {
                "name": "logInfo",
                "parameters": [
                  {
                    "name": "info ",
                    "type": "String"
                  },
                  {
                    "name": "tag ",
                    "type": "String"
                  }
                ],
                "returns": []
              },
              {
                "name": "logSpecial",
                "parameters": [
                  {
                    "name": "info ",
                    "type": "String"
                  },
                  {
                    "name": "tag ",
                    "type": "String"
                  }
                ],
                "returns": []
              },
              {
                "name": "logError",
                "parameters": [
                  {
                    "name": "info ",
                    "type": "String"
                  },
                  {
                    "name": "tag",
                    "type": "String"
                  },
                  {
                    "name": "exception",
                    "type": "Exception"
                  }
                ],
                "returns": []
              }
            ]
          },
          {
            "name": "XyoLog ",
            "desc": "Object for access to the XyoLogger interface.",
            "properties": [
              {
                "name": "XyoLogger",
                "desc": "interface object that handles debug",
                "type": "XyoAsciiLogger"
              }
            ],
          }
        ]
      },
      {
        "desc": "Network",
        "name": "network",
        "objects": [
          {
            "name": "XyoAdvertisePacket",
            "desc": "Helper object to help parse the advertising stage of the network protocol.",
            "functions": [
              {
                "name": "getChoice",
                "parameters": [],
                "returns": [
                  {
                    "type": "ByteArray",
                    "desc": "the advertise packet as a "
                  }
                ]
              }
            ]
          },
          {
            "name": "XyoNetworkPipe",
            "desc": "Network abstraction that can be used for doing bound witnesses with other devices. This library comes with two implementations, a memory pipe used for testing and simulations, and a tcp device with for communicating with tcp/ip devices.",
            "properties": [
              {
                "name": "initiationData",
                "desc": "Data that is sent when the pipe is created",
                "type": "XyoAdvertisePacket"
              }
            ],
            "functions": [
              {
                "name": "send",
                "parameters": [
                  {
                    "name": "data",
                    "type": "ByteArray"
                  },
                  {
                    "name": "waitForResponse",
                    "type": "Boolean"
                  }
                ],
                "returns": [
                  {
                    "type": "Deferred<ByteArray>",
                    "desc": "returns the response from the peer as a "
                  }
                ]
              },
              {
                "name": "close",
                "parameters": [],
                "returns": [
                  {
                    "type": "Deferred<Any>",
                    "desc": "closes the pipe "
                  }
                ]
              },
              {
                "name": "getNetworkHeuristics",
                "parameters": [],
                "returns": [
                  {
                    "type": "Array<XyoObjectStructure>",
                    "desc": "gets network heuristics as an "
                  }
                ]
              }
            ]
          },
          {
            "name": "XyoChoicePacket",
            "desc": "Helper object to help parse the choice stage of the network protocol.",
            "functions": [
              {
                "name": "getChoice",
                "parameters": [],
                "returns": [
                   {
                     "type": "ByteArray",
                     "desc": "gets a range based on choice matching choice size against byte size as a "
                   }
                ]
              },
              {
                "name": "getResponse",
                "parameters": [],
                "returns": [
                   {
                     "type": "ByteArray",
                     "desc": "gets a response based on choice as a "
                   }
                ]
              }
            ]
          },
          {
            "name": "XyoNetworkHandler",
            "desc": "Helps send network protocol packets over a XyoNetworkPipe.",
            "functions": [
              {
                "name": "sendCataloguePacket",
                "parameters": [
                  {
                    "name": "catalogue",
                    "type": "ByteArray"
                  }
                ],
                "returns": [
                  {
                    "type": "Deferred<ByteArray>",
                    "desc": "returns an encoded catalog packet as a "
                  }
                ]
              },
              {
                "name": "sendChoicePacket",
                "parameters": [
                  {
                    "name": "catalogue",
                    "type": "ByteArray"
                  },
                  {
                    "name": "response",
                    "type": "ByteArray"
                  }
                ],
                "returns": []
              }
            ]
          },
          {
            "name": "XyoNetworkProcedureCatalog",
            "desc": "Interface used for advertising and negotiating what a device can do and support.",
            "functions": [
              {
                "name": "canDo",
                "parameters": [
                  {
                    "name": "byteArray",
                    "type": "ByteArray"
                  }
                ],
                "returns": []
              },
              {
                "name": "getEncodedCanDo",
                "parameters": [],
                "returns": []
              },
              {
                "name": "choose",
                "parameters": [
                  {
                    "name": "byteArray",
                    "type": "ByteArray"
                  }
                ],
                "returns": []
              }
            ]
          },
          {
            "name": "XyoProcedureCatalogFlags",
            "desc": "Creates bit flags for negotiations between two parties.",
            "properties": [
              {
                "name": "Bound Witness",
                "desc": "Does a standard bound witness",
                "type": "BOUND_WITNESS"
              },
              {
                "name": "Take Origin Chain",
                "desc": "Does a standard bound witness taking another party's origin chain",
                "type": "TAKE_ORIGIN_CHAIN"
              },
              {
                "name": "Bound Witness",
                "desc": "Does a standard bound witness while giving another party the origin chain",
                "type": "GIVE_ORIGIN_CHAIN"
              }
            ],
            "functions": [
              {
                "name": "flip",
                "parameters": [
                  {
                    "name": "bytes",
                    "type": "ByteArray"
                  }
                ],
                "returns": [ 
                  {
                    "type": "ByteArray",
                    "desc": "after giving and taking of origin chain in  "
                  }
                ]
              },
              {
                "name": "stop",
                "parameters": [],
                "returns": []
              }
            ]
          }
        ]
      },
      {
        "desc": "XYO Node",
        "name": "node",
        "objects": [
          {
            "name": "XyoBoundWitnessOption",
            "desc": "Used for putting conditional data inside the bound witness based on negotiation.",
            "properties": [
              {
                "name": "flag",
                "desc": "a flag for the bound witness option taken by the node",
                "type": "ByteArray"
              }
            ],
            "functions": [
              {
                "name": "getPayload",
                "desc": "Gets the signed data to include in the bound witness.",
                "parameters": [],
                "returns": [
                  {
                    "type": "XyoBoundWitnessPair",
                    "desc": "Returns optional signed data "
                  }
                ]
              },
              {
                "name": "onCompleted",
                "desc": "This function will be called after the current bound witness has been completed. If the bound witness is null, there was an error creating the bound witness.",
                "parameters": [
                  {
                    "name": "boundWitness",
                    "type": "XyoBoundWitness"
                  }
                ],
                "returns": []
              }
            ]
          },
          {
            "name": "XyoBridgeQueue",
            "desc": "A class to manage outgoing origin blocks for bridges and sentinels.",
            "properties": [
              {
                "name": "sendLimit",
                "desc": "maximum number of blocks to send at a given time",
                "type": "Int"
              },
              {
                "name": "removeWeight",
                "desc": "The point when blocks should be removed from the queue",
                "type": "Int"
              }
            ],
            "functions": [
              {
                "name": "addBlock",
                "desc": "Adds an origin block into the bridge queue.",
                "parameters": [
                  {
                    "name": "blockHash",
                    "type": "XyoObjectStructure"
                  }
                ],
                "returns": []
              },
              {
                "name": "addBlock",
                "desc": "Adds an origin block into the bridge queue with a weight.",
                "parameters": [
                  {
                    "name": "blockHash",
                    "type": "XyoObjectStructure"
                  },
                  {
                    "name": "weight",
                    "type": "Int"
                  }
                ],
                "returns": []
              },
              {
                "name": "getBlocksToBridge",
                "desc": "Gets the current list of origin blocks to send.",
                "parameters": [],
                "returns": [
                  {
                    "type": "Array<XyoBridgeQueueItem>",
                    "desc": "array of blocks to send to a bridge"
                  }
                ]
              },
              {
                "name": "onBlocksBridged",
                "parameters": [
                  {
                    "name": "blocks",
                    "type": "Array<XyoBridgeQueueItem>"
                  }
                ],
                "returns": []
              },
              {
                "name": "getBlocksToRemove",
                "desc": "Get the blocks that have exceeded the removeWeight and are out of the queue.",
                "parameters": [],
                "returns": [
                  {
                    "type": "Array<XyoObjectStructure",
                    "desc": "gets a block to remove based on exceeded weight and are out of the queue"
                  }
                ]
              }
            ]
          },
          {
            "name": "XyoBridgeQueueItem",
            "desc": "Simple object that ties a block hash to the number of times it's been offloaded by the bridge queue.",
            "properties": [
              {
                "name": "weight",
                "desc": "weight of the queue item",
                "type": "Int"
              },
              {
                "name": "hash",
                "desc": "the representation of the item",
                "type": "Int"
              }
            ],
          },
          {
            "name": "XyoBridgingOption",
            "desc": "Implementation of the XyoBoundWitnessOption for bridging blocks when the bridge flag is set in the network handshake.",
            "properties": [
              {
                "name": "flag",
                "desc": "byteArray to flag the take origin chain",
                "type": "ByteArray"
              },
            ],
            "functions": [
              {
                "name": "onCompleted",
                "parameters": [
                  {
                    "name": "boundWitness",
                    "type": "XyoBoundWitness"
                  }
                ],
                "returns": []
              },
              {
                "name": "getPayload",
                "parameters": [],
                "returns": [
                  {
                    "type": "XyoBoundWitnessPair",
                    "desc": "returns a bound witness payload with hash and block set as an "
                  }
                ]
              }
            ]
          },
          {
            "name": "XyoNodeListener",
            "desc": "A node listener, added through the .addListener() method from XyoOriginChainCreator to receive callbacks to when a bound witness starts, occurs, discovered, and/or fails.",
            "functions": [
              {
                "name": "onBoundWitnessStart",
                "desc": "This function will be called on every bound witness start.",
                "parameters": [],
                "returns": []
              },
              {
                "name": "onBoundWitnessDiscovered",
                "desc": "This function will be called on evey time a bound witness discovered for the first time successfully.",
                "parameters": [
                  {
                    "name": "boundWitness",
                    "type": "XyoBoundWitness"
                  }
                ],
                "returns": []
              },
              {
                "name": "onBoundWitnessEndFailure",
                "desc": "This function will be called on evey time a bound witness did not end successfully.",
                "parameters": [
                  {
                    "name": "error",
                    "type": "Exception"
                  }
                ],
                "returns": []
              },
              {
                "name": "onBoundWitnessEndSuccess",
                "desc": "This function will be called every time a bound witness is completed successfully.",
                "parameters": [
                  {
                    "name": "boundWitness",
                    "type": "XyoBoundWitness"
                  }
                ],
                "returns": []
              }
            ]
          },
          {
            "name": "XyoOriginChainCreator",
            "desc": "A base class for all things creating an managing an origin chain (e.g. Sentinel, Bridge).",
            "properties": [
              {
                "name": "blockRepository",
                "desc": "storage for origin blocks",
                "type": "XyoOriginBlockRepository"
              },
              {
                "name": "stateRepository",
                "desc": "storage for chain state ",
                "type": "XyoOriginChainStateRepository"
              },
              {
                "name": "originState",
                "desc": "manages the storage of chain state for signing and state management ",
                "type": "XyoOriginChainStateManager"
              }
            ],
            "functions": [
              {
                "name": "addHeuristic",
                "desc": "Adds a heuristic to be used when creating bound witnesses.",
                "parameters": [
                  {
                    "name": "key",
                    "type": "String"
                  },
                  {
                    "name": "heuristic",
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
                    "name": "key",
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
                    "name": "key",
                    "type": "String"
                  },
                  {
                    "name": "listener",
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
                    "name": "key",
                    "type": "String"
                  }
                ],
                "returns": []
              },
              {
                "name": "selfSignOriginChain",
                "desc": "Self signs an origin block to the devices origin chain.",
                "parameters": [
                  {
                    "name": "flag",
                    "type": "Deferred<Int>"
                  }
                ],
                "returns": []
              },
              {
                "name": "addBoundWitnessOption",
                "parameters": [
                  {
                    "name": "key",
                    "type": "String"
                  },
                  {
                    "name": "boundWitnessOption",
                    "type": "XyoBoundWitnessOption"
                  }
                ],
                "returns": []
              },
              {
                "name": "boundWitness",
                "parameters": [
                  {
                    "name": "handler",
                    "type": "XyoNetworkHandler"
                  },
                  {
                    "name": "procedureCatalogue",
                    "type": "XyoProcedureCatalog"
                  }
                ],
                "returns": [
                  {
                    "type": "Deferred<XyoBoundWitness>",
                    "desc": "returns a bound witness with pipe and choice",
                  }
                ]
              }
            ]
          },
          {
            "name": "XyoRelayNode",
            "desc": "A base class for nodes creating data then relaying it between sentinels and bridges.",
            "properties": [
              {
                "name": "blockRepository",
                "desc": "storage for origin blocks",
                "type": "XyoOriginBlockRepository"
              }, 
              {
                "name": "stateRepository",
                "desc": "storage for chain state ",
                "type": "XyoOriginChainStateRepository"
              }, 
              {
                "name": "bridgeQueueRepository",
                "desc": "manages the storage of bridge queues ",
                "type": "XyoBridgeQueueRepository"
              },
              {
                "name": "originBlocksToBridge",
                "desc": "the queue for origin blocks to be relayed ",
                "type": "XyoBridgeQueue"
              }
            ],
            "functions": [
              {
                "name": "init",
                "desc": "Starts the relay node",
                "parameters": [],
                "returns": []
              }
            ]
          }
        ]
      },
      {
        "desc": "XYO Origin",
        "name": "origin",
        "objects": [
          {
            "name": "XyoOriginBoundWitnessUtil",
            "desc": "Helper object helps parse origin chain related information out of a single bound witness.",
            "functions": [
              {
                "name": "getBridgedBlocks",
                "desc": "Gets the bridged blocks from a bound witness.",
                "parameters": [
                  {
                    "name": "boundWitness",
                    "type": "XyoBoundWitness"
                  },
                ],
                "returns": []
              }
            ]
          },
          {
            "name": "XyoOriginChainStateManager",
            "desc": "A class that manages chain state for use in origin chain creation and getting current state.",
            "properties": [
              {
                "name": "repo",
                "desc": "source of chain state to manage",
                "type": "XyoOriginChainStateRepository"
              }, 
              {
                "name": "nextPublicKey",
                "desc": "public key for new instance",
                "type": "XyoObjectStructure"
              }, 
              {
                "name": "statics",
                "desc": "static heuristics ",
                "type": "Array<XyoObjectStructure>"
              }, 
              {
                "name": "index",
                "desc": "index of item in chain",
                "type": "XyoObjectStructure"
              },
              {
                "name": "previousHash",
                "desc": "previous hash in chain",
                "type": "XyoObjectStructure"
              },
              {
                "name": "signers",
                "desc": "array of signers from the state repo ",
                "type": "Array<XyoSigner>"
              }
            ],
            "functions": [
              {
                "name": "removeOldestSigner",
                "parameters": [],
                "returns": []
              },
              {
                "name": "addSigner",
                "parameters": [
                  {
                    "name": "signer",
                    "type": "XyoSigner"
                  }
                ],
                "returns": []
              },
              {
                "name": "newOriginBlock",
                "parameters": [
                  {
                    "name": "hash",
                    "type": "XyoHash"
                  }
                ],
                "returns": []
              }
            ]
          },
        ]
      },
      {
        "desc": "XYO Storage",
        "name": "persist",
        "objects": [
          {
            "name": "XyoStorageBridgeQueueRepository",
            "desc": "Persist storage for bridge queues.",
            "functions": [{
                "name": "getQueue",
                "parameters": [],
                "returns": [
                  {
                    "type": "Array<XyoBridgeQueueItem>",
                    "desc": "gets a queue as an"
                  }
                ]
              },
              {
                "name": "setQueue",
                "parameters": [
                  {
                  "name": "queue",
                  "type": "Array<XyoBridgeQueueItem>"
                  }
              ],
                "returns": []
              },
              {
                "name": "addQueueItem",
                "parameters": [
                  {
                    "name": "item",
                    "type": "XyoBridgeQueueItem"
                  }
                ],
                "returns": []
              },
              {
                "name": "removeQueueItems",
                "parameters": [
                  {
                  "name": "items",
                  "type": "Array<XyoObjectStructure>"
                  }
              ],
                "returns": []
              },
              {
                "name": "getLowestWeight",
                "parameters": [
                  {
                  "name": "n",
                  "type": "Int"
                  }
              ],
                "returns": [
                  {
                    "type": "Array<XyoBridgeQueueItem>",
                    "desc": "lowest weight bridge queue item as"
                  }
                ]
              },
              {
                "name": "incremementWeights",
                "parameters": [
                  {
                  "name": "hashes",
                  "type": "Array<XyoObjectStructure>"
                  }
              ],
                "returns": []
              },
              {
                "name": "commit",
                "parameters": [],
                "returns": [
                  {
                    "type": "Array",
                    "desc": "committed encoded queue items in",
                  }
                ]
              },
              {
                "name": "restore",
                "parameters": [],
                "returns": []
              }
            ]
          },
          {
            "name": "XyoStorageOriginBlockRepository",
            "desc": "This class is used as a bucket to store origin blocks, and finds links between them.",
            "properties": [
              {
                "name": "storageProvider",
                "desc": "key value store for origin block storage",
                "type": "XyoKeyValueStore"
              },
              {
                "name": "hashingObject",
                "desc": "hashing for blocks in storage",
                "type": "XyoHash.XyoHashProvider"
              }
            ],
            "functions": [{
                "name": "removeOriginBlock",
                "parameters": [
                  {
                  "name": "originBlockHash",
                  "type": "XyoObjectStructure"
                  }
              ],
                "returns": []
              },
              {
                "name": "containsOriginBlock",
                "desc": "Confirmation that the storage provider contains the origin block.",
                "parameters": [
                  {
                  "name": "originBlockHash",
                  "type": "XyoObjectStructure"
                  }
              ],
                "returns": [
                  {
                    "type": ""
                  }
                ]
              },
              {
                "name": "getAllOriginBlockHashes",
                "parameters": [],
                "returns": [
                  {
                    "type": "Deferred<Iterator<XyoObjectStructure>?>",
                    "desc": "returns origin block hashes using a "
                  }
                ]
              },
              {
                "name": "addBoundWitness",
                "parameters": [
                  {
                  "name": "originBlock",
                  "type": "XyoBoundWitness"
                  }
              ],
                "returns": []
              },
              {
                "name": "getOriginBlockByBlockHash",
                "parameters": [
                  {
                  "name": "originBlockHash",
                  "type": "ByteArray"
                  }
              ],
                "returns": [
                  {
                    "type": "XyoBoundWitness",
                    "desc": "async instance with packed hash as "
                  }
                ]
              }
            ]
          },
          {
            "name": "XyoStorageOriginStateRepository",
            "desc": "An object that provides persistent storage for the XyoOriginChainStateRepository, refer to that interface for methods.",
          },
          {
            "name": "XyoInMemoryStorageProvider",
            "desc": "A simple in-memory persist implementation of the XyoKeyValueStore.",
            "functions": [
              {
                "name": "containsKey",
                "parameters": [
                  {
                    "name": "key",
                    "type": "ByteArray"
                  }
                ],
                "returns": [
                  {
                    "type": "",
                    "desc": "(confirmation that the storage hash map contains the key for the key value store)",
                  }
                ]
              },
              {
                "name": "delete",
                "parameters": [
                  {
                    "name": "key",
                    "type": "ByteArray"
                  }
                ],
                "returns": []
              },
              {
                "name": "getAllKeys",
                "parameters": [],
                "returns": [
                  {
                    "type": "iterator",
                    "desc": "(gets all keys asynchronously as an iterator)",
                  }
                ]
              },
              {
                "name": "read",
                "parameters": [
                  {
                    "name": "key",
                    "type": "ByteArray"
                  }
                ],
                "returns": [
                  {
                    "type": "storageHashMap[key]",
                    "desc": "reads the key from the storage provider",
                  }
                ]
              },
              {
                "name": "write",
                "parameters": [
                  {
                    "name": "key",
                    "type": "ByteArray"
                  },
                  {
                    "name": "value",
                    "type": "ByteArray"
                  }
                ],
                "returns": []
              }
            ]
          },
          {
            "name": "XyoKeyValueStore",
            "desc": "Provides a persistence layer which aims to persist data in a non-volatile way. Each method throws an XyoStorageException if this is an error in its operations.",
            "functions": [
              {
                "name": "write",
                "desc": "Writes to the persist layer.",
                "parameters": [
                  {
                    "name": "key",
                    "type": "ByteArray"
                  },
                  {
                    "name": "value",
                    "type": "ByteArray"
                  }
                ],
                "returns": []
              },
              {
                "name": "read",
                "desc": "Read from persist layer.",
                "parameters": [
                  {
                    "name": "key",
                    "type": "ByteArray"
                  }
                ],
                "returns": []
              },
              {
                "name": "getAllKeys",
                "desc": "Returns all the corresponding keys for the values stored.",
                "parameters": [],
                "returns": []
              },
              {
                "name": "delete ",
                "desc": "Deletes the value for the corresponding key.",
                "parameters": [
                  {
                    "name": "key",
                    "type": "ByteArray"
                  }
                ],
                "returns": []
              },
              {
                "name": "containsKey ",
                "desc": "Checks if a key exists in persist.",
                "parameters": [
                  {
                    "name": "key",
                    "type": "ByteArray"
                  }
                ],
                "returns": []
              }
            ]
          },
          {
            "name": "XyoStorageException",
            "desc": "An exception for the StorageProviderInterface. Can throw during writing, reading, deleting, and other persist related operations.",
            "properties": [
              {
                "name": "message",
                "desc": "error message",
                "type": "String"
              }
            ],
          },
          {
            "name": "XyoWeakReferenceCaching",
            "desc": "An XyoKeyValueStore that uses weak references to add a caching layer.",
            "properties": [],
            "enumerations": [],
            "functions": [
              {
                "name": "write",
                "parameters": [
                  {
                    "name": "key",
                    "type": "ByteArray"
                  },
                  {
                    "name": "value",
                    "type": "ByteArray"
                  }
                ],
                "returns": []
              },
              {
                "name": "read",
                "parameters": [
                  {
                    "name": "key",
                    "type": "ByteArray"
                  }
                ],
                "returns": []
              },
              {
                "name": "containsKey",
                "parameters": [
                  {
                    "name": "key",
                    "type": "ByteArray"
                  }
                ],
                "returns": []
              },
              {
                "name": "delete",
                "parameters": [
                  {
                    "name": "key",
                    "type": "ByteArray"
                  }
                ],
                "returns": []
              },
              {
                "name": "getAllKeys",
                "parameters": [],
                "returns": []
              }
            ]
          }
        ]
      },
      {
        "desc": "XYO Repositories",
        "name": "repositories",
        "objects": [
          {
            "name": "XyoBridgeQueueRepository",
            "desc": "An interface for bridge queue storage.",
            "properties": [],
            "enumerations": [],
            "functions": [{
                "name": "getQueue",
                "parameters": [],
                "returns": []
              },
              {
                "name": "setQueue",
                "parameters": [
                  {
                  "name": "queue",
                  "type": "Array<XyoBridgeQueueItem>"
                  }
              ],
                "returns": []
              },
              {
                "name": "addQueueItem",
                "parameters": [
                  {
                    "name": "item",
                    "type": "XyoBridgeQueueItem"
                  }
                ],
                "returns": []
              },
              {
                "name": "removeQueueItems",
                "parameters": [
                  {
                  "name": "items",
                  "type": "Array<XyoObjectStructure>"
                  }
              ],
                "returns": []
              },
              {
                "name": "getLowestWeight",
                "parameters": [
                  {
                  "name": "n",
                  "type": "Int"
                  }
              ],
                "returns": []
              },
              {
                "name": "incrementWeights",
                "parameters": [
                  {
                  "name": "hashes",
                  "type": "Array<XyoObjectStructure>"
                  }
              ],
                "returns": []
              },
              {
                "name": "commit",
                "parameters": [],
                "returns": []
              }
            ]
          },
          {
            "name": "XyoOriginBlockRepository",
            "desc": "An interface that removes an origin block from the navigator and from persist, each method throws an XyoStorageException in the case of an error in operation.",
            "functions": [{
                "name": "removeOriginBlock",
                "parameters": [
                  {
                  "name": "originBlockHash",
                  "type": "XyoObjectStructure"
                  }
              ],
                "returns": []
              },
              {
                "name": "containsOriginBlock",
                "parameters": [
                  {
                  "name": "originBlockHash",
                  "type": "XyoObjectStructure"
                  }
              ],
                "returns": [
                  {
                    "type": "Deferred<Boolean>",
                    "desc": "a check is the origin block exists in persist as a "
                  }
                ]
              },
              {
                "name": "getAllOriginBlockHashes",
                "parameters": [],
                "returns": [
                  {
                    "type": "Deferred<Iterator<XyoObjectStructure>?>",
                    "desc": "all of the origin blocks in persist "
                  }
                ]
              },
              {
                "name": "addBoundWitness",
                "parameters": [{
                  "name": "originBlock",
                  "type": "XyoBoundWitness"
                }],
                "returns": []
              },
              {
                "name": "getOriginBlockByHash",
                "parameters": [
                  {
                  "name": "originBlockHash",
                  "type": "ByteArray"
                  }
              ],
                "returns": [
                  {
                    "type": "Deferred<XyoBoundWitness?>",
                    "desc": "an origin block as a "
                  }
                ]
              }
            ]
          },
          {
            "name": "XyoOriginChainStateRepository",
            "desc": "An interface that is used to keep track of the state when creating the origin chain.",
            "functions": [
              {
                "name": "getIndex",
                "parameters": [],
                "returns": []
              },
              {
                "name": "putIndex",
                "parameters": [
                  {
                    "name": "index",
                    "type": "XyoObjectStructure"
                  }
                ],
                "returns": []
              },
              {
                "name": "getPreviousHash",
                "parameters": [],
                "returns": []
              },
              {
                "name": "putPreviousHash",
                "parameters": [
                  {
                  "name": "hash",
                  "type": "XyoObjectStructure"
                  }
              ],
                "returns": []
              },
              {
                "name": "getSigners",
                "parameters": [],
                "returns": []
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
                  "name": "signer",
                  "type": "XyoSigner"
                  }
              ],
                "returns": []
              },
              {
                "name": "getStaticHeuristics",
                "parameters": [],
                "returns": []
              },
              {
                "name": "setStaticHeuristics",
                "parameters": [
                  {
                  "name": "statics",
                  "type": "Array<XyoObjectStructure>"
                  }
              ],
                "returns": []
              },
              {
                "name": "onBoundWitness",
                "parameters": [],
                "returns": []
              },
              {
                "name": "getLastBoundWitnessTime",
                "parameters": [],
                "returns": []
              },
              {
                "name": "commit",
                "parameters": [],
                "returns": []
              }
            ]
          }
        ]
      },
      {
        "desc": "XYO Schemas",
        "name": "schema",
        "objects": [
          {
            "name": "XyoInterpret",
            "desc": "An interface schema to interpret a byteArray into an XyoObjectStructure (note structures are part of the objectModel).",
            "functions": [
              {
                "name": "getInstance",
                "parameters": [
                  {
                    "name": "byteArray",
                    "type": "ByteArray"
                  }
                ],
                "returns": [
                  {
                    "type": "XyoObjectStructure",
                    "desc": ""
                  }
                ]
              }
            ]
          },
          {
            "name": "XyoSchemas",
            "desc": "Schemas available for the core library.",
            "properties": [
              {
                "name": "ARRAY_TYPED",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "ARRAY_UNTYPED",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "BW",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "INDEX",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "NEXT_PUBLIC_KEY",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "BRIDGE_BLOCK_SET",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "BRIDGE_HASH_SET",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "PAYMENT_KEY",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "PREVIOUS_HASH",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "EC_SIGNATURE",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "RSA_SIGNATURE",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "STUB_SIGNATURE",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "EC_PUBLIC_KEY",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "RSA_PUBLIC_KEY",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "STUB_PUBLIC_KEY",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "STUB_HASH",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "SHA_256",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "SHA_3",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "GPS",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "RSSI",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "UNIX_TIME",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "FETTER",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "FETTER_SET",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "WITNESS",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "WITNESS_SET",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "KEY_SET",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "SIGNATURE_SET",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "BW_FRAGMENT",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "LAT",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "LNG",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "BLE_POWER_LVL",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "EC_PRIVATE_KEY",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "RSA_PRIVATE_KEY",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
              {
                "name": "BLOB",
                "desc": "key value store for origin block storage",
                "type": "XyoObjectSchema"
              },              
            ],            
          }
        ]
      }
    ]
  }
]