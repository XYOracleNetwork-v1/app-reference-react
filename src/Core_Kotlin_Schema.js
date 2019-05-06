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
          "enumerations": [],
          "functions": [
            {
              "name": "getFetterOfParty",
              "parameters": [
                {
                  "name": "hashCreator",
                  "type": "XyoHashProvider"
                }
              ],
              "returns": [
                {
                  "type": "XyoIterableObject",
                  "desc": "Returns the party's fetter as an XyoIterableObject."
                }
              ]
            },
            {
              "name": "getWitnessOfParty",
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
              "parameters": [
                {
                  "name": "id",
                  "type": "ByteArray"
                },
                {
                  "name": "signer",
                  "type": "XyoSigner"
                }
              ],
              "returns": []
            },
            {
              "name": "createWitness",
              "parameters": [
                {
                  "name": "id",
                  "type": "ByteArray"
                },
                {
                  "name": "signer",
                  "type": "XyoSigner"
                }
              ],
              "returns": []
            },
            {
              "name": "getHash",
              "parameters": [
                {
                  "name": "byteArray",
                  "type": "ByteArray"
                }
              ],
              "returns": [
                {
                  "type": "XyoHash",
                  "desc": "asynchronously returns a deferred XyoHash\n"
                }
              ]
            },
            {
              "name": "signCurrent",
              "parameters": [
                {
                  "name": "shortArrayReadSize",
                  "type": "Int"
                }
              ],
              "returns": [
                {
                  "type": "XyoSigner",
                  "desc": "asynchronously returns a deferred XyoObject (signature)"
                }
              ]
            },
            {
              "name": "removeAllUnsigned",
              "parameters": [],
              "returns": []
            },
            {
              "name": "getSigningData",
              "parameters": [],
              "returns": []
            },
            {
              "name": "makeBoundWitness",
              "parameters": [],
              "returns": []
            },
            {
              "name": "makePublicKeys",
              "parameters": [],
              "returns": []
            },
            {
              "name": "makePayloads",
              "parameters": [],
              "returns": []
            },
            {
              "name": "makeSignatures",
              "parameters": [],
              "returns": []
            },
            {
              "name": "removeTypeFromUnsigned",
              "parameters": [
                {
                  "name": "intArrayReadSize",
                  "type": "Int"
                }
              ],
              "returns": []
            }
          ]
        },
        {
          "name": "XyoBoundWitnessUtil",
          "desc": "A helper object to preform operations on bound witnesses. Will most likely replace certain helpers in XyoBoundWitness",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "removeTypeFromUnsigned",
              "parameters": [
                {
                  "name": "intArrayReadSize",
                  "type": "Int"
                }
              ],
              "returns": []
            },
            {
              "name": "getPartyNumberFromPublicKey",
              "parameters": [
                {
                  "name": "boundWitness",
                  "type": "XyoBoundWitness"
                },
                {
                  "name": "signature",
                  "type": "XyoBuff"
                }
              ],
              "returns": []
            },
            {
              "name": "getBridgedBlocks",
              "parameters": [
                {
                  "name": "boundWitness",
                  "type": "XyoBoundWitness"
                }
              ],
              "returns": []
            },
            {
              "name": "checkPartyForPublicKey",
              "parameters": [
                {
                  "name": "boundWitness",
                  "type": "XyoIterableObject"
                },
                {
                  "name": "signature",
                  "type": "XyoBuff"
                }
              ],
              "returns": []
            },
            {
              "name": "removeTypeFromUnsignedPayload",
              "parameters": [
                {
                  "name": "type",
                  "type": "Byte"
                },
                {
                  "name": "boundWitness",
                  "type": "XyoIterableObject"
                }
              ],
              "returns": [
                {
                  "type": "XyoIterableObject",
                  "desc": "Returns a bound witness without the type specified"
                }
              ]
            },
            {
              "name": "getPartyNumberFromPublicKey",
              "parameters": [
                {
                  "name": "boundWitness",
                  "type": "XyoBoundWitness"
                },
                {
                  "name": "publicKey",
                  "type": "XyoBuff"
                }
              ],
              "returns": [
                {
                  "type": "Int",
                  "desc": "Returns the index of the party"
                }
              ]
            }
          ]
        },
        {
          "name": "XyoBoundWitnessVerify",
          "desc": "Verifies a bound witness",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "verify",
              "parameters": [
                {
                  "name": "boundWitness",
                  "type": "XyoBoundWitness"
                }
              ],
              "returns": [
                {
                  "type": "Boolean",
                  "desc": "Bound Witness Success"
                }
              ]
            },
            {
              "name": "checkAllSignatures",
              "parameters": [
                {
                  "name": "numberOfParties ",
                  "type": "Int"
                },
                {
                  "name": "signingData",
                  "type": "ByteArray"
                },
                {
                  "name": "signer",
                  "type": "XyoSigner"
                }
              ],
              "returns": []
            },
            {
              "name": "checkSinglePartySignatures",
              "parameters": [
                {
                  "name": "keys",
                  "type": "Arrray<XyoObject>"
                },
                {
                  "name": "signer",
                  "type": "XyoSigner"
                },
                {
                  "name": "publicKeys",
                  "type": "Array<XyoKetSet>"
                }
              ],
              "returns": []
            }
          ]
        },
        {
          "name": "XyoZigZagBoundWitness",
          "desc": "A zig-zag bound witness protocol",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "incomingData",
              "parameters": [
                {
                  "name": "endPoint",
                  "type": "Boolean"
                },
                {
                  "name": "transfer",
                  "type": "XyoIterableObject"
                }
              ],
              "returns": [
                {
                  "type": "XyoBoundWitnessTransfer",
                  "desc": "transfer to send to other party"
                }
              ]
            },
            {
              "name": "getNumberOfSignaturesFromTransfer",
              "parameters": [
                {
                  "name": "signatureReceivedSize",
                  "type": "Int"
                }
              ],
              "returns": []
            },
            {
              "name": "getReturnFromIncoming",
              "parameters": [
                {
                  "name": "incomingKeySets",
                  "type": "Array<XyoObject>"
                },
                {
                  "name": "endPoint",
                  "type": "Boolean"
                },
                {
                  "name": "id",
                  "type": "ByteArray"
                }
              ],
              "returns": []
            },
            {
              "name": "passAndSign",
              "parameters": [
                {
                  "name": "incomingKeySets",
                  "type": "Array<XyoObject>"
                },
                {
                  "name": "id",
                  "type": "ByteArray"
                }
              ],
              "returns": []
            },
            {
              "name": "addTransfer",
              "parameters": [
                {
                  "name": "signatureReceivedSize",
                  "type": "Int"
                }
              ],
              "returns": []
            },
            {
              "name": "encodeTransfer",
              "parameters": [
                {
                  "name": "incomingPayloads",
                  "type": "Array<XyoObject>"
                }
              ],
              "returns": []
            },
            {
              "name": "addIncomingKeys",
              "parameters": [
                {
                  "name": "incomingSignatures",
                  "type": "Array<XyoObject>"
                }
              ],
              "returns": []
            },
            {
              "name": "addIncomingPayload",
              "parameters": [
                {
                  "name": "partyNum",
                  "type": "Int"
                }
              ],
              "returns": []
            },
            {
              "name": "addIncomingSignatures",
              "parameters": [
                {
                  "name": "payload",
                  "type": "Array<XyoBuff>"
                }
              ],
              "returns": []
            },
            {
              "name": "makeSelfKeySet",
              "parameters": [],
              "returns": []
            },
            {
              "name": "signBoundWitness",
              "parameters": [
                {
                  "name": "id",
                  "type": "ByteArray"
                }
              ],
              "returns": []
            },
            {
              "name": "signForSelf",
              "parameters": [
                {
                  "name": "id",
                  "type": "ByteArray"
                }
              ],
              "returns": []
            }
          ]
        },
        {
          "name": "XyoZigZagBoundWitnessSession",
          "desc": "Creates an XyoZigZagBoundWitness session",
          "properties": [
            {
              "name": "signedPayload",
              "desc": "Signed Payload ",
              "type": "Array<XyoBuff>"
            },
            {
              "name": "unsignedPayload",
              "desc": "Payload that is unsigned",
              "type": "Array<XyoBuff>"
            },
            {
              "name": "signers",
              "desc": "All signers in a session",
              "type": "Array<XyoSigner>"
            }
          ],
          "enumerations": [],
          "functions": []
        }
      ]
    },
    {
      "desc": "Crypto Encrypt",
      "name": "crypto - encrypt",
      "objects": [
        {
          "name": "XyoAES",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "encrypt ",
              "parameters": [
                {
                  "name": "transfer",
                  "type": "XyoIterableObject"
                },
                {
                  "name": "itemsToTransfer",
                  "type": "Array<XyoBuff>"
                },
                {
                  "name": "unsignedPayload",
                  "type": "Array<XyoBuff>"
                }
              ],
              "returns": []
            },
            {
              "name": "decrypt",
              "parameters": [
                {
                  "name": "transfer",
                  "type": "XyoIterableObject"
                },
                {
                  "name": "pipe",
                  "type": "XyoNetworkPipe"
                },
                {
                  "name": "unsignedPayload",
                  "type": "Array<XyoBuff>"
                }
              ],
              "returns": []
            },
            {
              "name": "doAes",
              "parameters": [
                {
                  "name": "choice",
                  "type": "ByteArray"
                },
                {
                  "name": "itemsToTransfer",
                  "type": "Array<XyoBuff>"
                },
                {
                  "name": "transfer",
                  "type": "XyoIterableObject"
                },
                {
                  "name": "unsignedPayload",
                  "type": "Array<XyoBuff>"
                }
              ],
              "returns": []
            },
            {
              "name": "hashPassword",
              "parameters": [
                {
                  "name": "transfer",
                  "type": "XyoIterableObject"
                }
              ],
              "returns": []
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
          "enumerations": [],
          "functions": [
            {
              "name": "encrypt",
              "parameters": [
                {
                  "name": "iV",
                  "type": "ByteArray"
                },
                {
                  "name": "value",
                  "type": "ByteArray"
                },
                {
                  "name": "password",
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
                  "name": "iV",
                  "type": "ByteArray"
                },
                {
                  "name": "encryptedValue",
                  "type": "ByteArray"
                },
                {
                  "name": "password",
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
      "desc": "Exceptions",
      "name": "exceptions",
      "objects": [
        {
          "name": "XyoBoundWitnessCreationException",
          "desc": "Thrown when an error happens during the creation of a bound witness.",
          "properties": [],
          "enumerations": [],
          "functions": []
        },
        {
          "name": "XyoCorruptDataException",
          "desc": "Exception is thrown whenever data is malformed.",
          "properties": [],
          "enumerations": [],
          "functions": []
        },
        {
          "name": "XyoException",
          "desc": "Base class for XYO Exceptions",
          "properties": [],
          "enumerations": [],
          "functions": []
        },
        {
          "name": "XyoNoObjectException",
          "desc": "Exception is trowed whenever data contains a major and minor it does not understand.",
          "properties": [],
          "enumerations": [],
          "functions": []
        }
      ]
    },
    {
      "desc": "Hashing",
      "name": "hashing",
      "objects": [
        {
          "name": "XyoHash",
          "desc": "Base class for containing and encoding hashes.",
          "properties": [
            {
              "name": "hash",
              "desc": "encoded hash",
              "type": "byteArray"
            }
          ],
          "enumerations": [],
          "functions": []
        },
        {
          "name": "XyoHashProvider",
          "desc": "Base class for creating hashes",
          "properties": [
            {
              "name": "createHash",
              "desc": "Creates a hash given a ByteArray",
              "type": "ByteArray"
            }
          ],
          "enumerations": [],
          "functions": [
            {
              "name": "createHash",
              "async": "true",
              "parameters": [
                {
                  "name": "GlobalScope",
                  "type": "XyoBasicHashBase"
                }
              ],
              "returns": []
            },
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
                  "type": "XyoBasicHashBase",
                  "desc": "object"
                }
              ]
            },
            {
              "name": "createHashType",
              "parameters": [
                {
                  "name": "schema",
                  "type": "XyoObjectSchema"
                },
                {
                  "name": "standardDigestKey",
                  "type": "String"
                }
              ],
              "returns": [
                {
                  "type": "XyoBasicHashBaseProvider",
                  "desc": "object"
                }
              ]
            }
          ]
        },
        {
          "name": "XyoBasicHashBase",
          "desc": "Base class for creating Standard Java hashes supported by MessageDigest",
          "properties": [],
          "enumerations": [],
          "functions": []
        },
        {
          "name": "XyoBasicHashBaseProvider",
          "desc": "Base class for creating Standard Java hashes supported by MessageDigest",
          "properties": [
            {
              "name": "standardDigestKey",
              "desc": "The MessageDigest instance key. e.g. \"SHA-256\"",
              "type": "String"
            },
            {
              "name": "schema",
              "type": "XyoObjectSchema"
            }
          ],
          "enumerations": [],
          "functions": []
        }
      ]
    },
    {
      "desc": "Log",
      "name": "log",
      "objects": [
        {
          "name": "XyoLogger ",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "logDebug",
              "parameters": [
                {
                  "name": "mode ",
                  "type": "Int"
                },
                {
                  "name": "encryptedValue",
                  "type": "ByteArray"
                }
              ],
              "returns": []
            },
            {
              "name": "logInfo",
              "parameters": [
                {
                  "name": "mode ",
                  "type": "Int"
                },
                {
                  "name": "encryptedValue",
                  "type": "ByteArray"
                }
              ],
              "returns": []
            },
            {
              "name": "logSpecial",
              "parameters": [
                {
                  "name": "mode ",
                  "type": "Int"
                },
                {
                  "name": "encryptedValue",
                  "type": "ByteArray"
                }
              ],
              "returns": []
            },
            {
              "name": "logError",
              "parameters": [
                {
                  "name": "mode ",
                  "type": "Int"
                },
                {
                  "name": "encryptedValue",
                  "type": "ByteArray"
                },
                {
                  "name": "privateKey",
                  "type": "ByteArray"
                }
              ],
              "returns": []
            }
          ]
        }
      ]
    },
    {
      "desc": "XYO Network",
      "name": "network",
      "objects": [
        {
          "name": "XyoNetworkPeer",
          "desc": "An abstraction for a network peer when talking through a pipe",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "getRole",
              "parameters": [],
              "returns": []
            },
            {
              "name": "getTemporaryPeerId",
              "parameters": [],
              "returns": []
            }
          ]
        },
        {
          "name": "XyoNetworkPipe",
          "desc": "A network abstraction to communicate with another peer",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "send",
              "parameters": [
                {
                  "name": "signature",
                  "type": "XyoBuff"
                },
                {
                  "name": "byteArray",
                  "type": "ByteArray"
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
          "name": "XyoNetworkProcedureCatalogueInterface",
          "desc": "Used for advertising what a device can do and support",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "canDo",
              "parameters": [
                {
                  "name": "bytes",
                  "type": "ByteArray"
                }
              ],
              "returns": []
            },
            {
              "name": "getEncodedCanDo",
              "parameters": [],
              "returns": []
            }
          ]
        },
        {
          "name": "XyoNetworkProviderInterface",
          "desc": "A network provider that allows components to talk to other parties",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "find",
              "parameters": [
                {
                  "name": "byte",
                  "type": "Byte"
                }
              ],
              "returns": []
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
          "desc": "A base class for bound witness options. ",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "getSignedPayload",
              "parameters": [],
              "returns": []
            },
            {
              "name": "getUnsignedPayload",
              "parameters": [],
              "returns": []
            },
            {
              "name": "onCompleted",
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
          "desc": "A class to manage outgoing origin blocks for bridges and sentinels",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "addBlock",
              "parameters": [
                {
                  "name": "data",
                  "type": "ByteArray"
                },
                {
                  "name": "info",
                  "type": "String"
                }
              ],
              "returns": []
            },
            {
              "name": "purgeQueue",
              "parameters": [
                {
                  "name": "tag",
                  "type": "String"
                }
              ],
              "returns": []
            },
            {
              "name": "getBlocksToBridge",
              "parameters": [],
              "returns": []
            },
            {
              "name": "sortQueue",
              "parameters": [],
              "returns": []
            },
            {
              "name": "getToRemove",
              "parameters": [],
              "returns": []
            },
            {
              "name": "setQueue",
              "parameters": [
                {
                  "name": "waitForResponse",
                  "type": "Boolean"
                },
                {
                  "name": "exception",
                  "type": "Exception?"
                }
              ],
              "returns": []
            },
            {
              "name": "getAllBlocks ",
              "parameters": [],
              "returns": []
            },
            {
              "name": "getAllWeights",
              "parameters": [],
              "returns": []
            },
            {
              "name": "XyoBridgeJob",
              "parameters": [],
              "returns": []
            }
          ]
        },
        {
          "name": "XyoBridgingOption",
          "desc": "A bound witness option which depends on the XyoProcedureCatalog.GIVE_ORIGIN_CHAIN flag setting. If the flag is set, will call the bridge queue to get the latest bridge blocks.",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "getSignedPayload",
              "parameters": [],
              "returns": []
            },
            {
              "name": "getUnsignedPayload",
              "parameters": [],
              "returns": []
            },
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
              "name": "updateOriginChain",
              "parameters": [],
              "returns": []
            }
          ]
        },
        {
          "name": "XyoHeuristicGetter",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "getHeuristic",
              "parameters": [],
              "returns": []
            }
          ]
        },
        {
          "name": "XyoNodeBase",
          "desc": "A base class for all things creating and managing an origin chain",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "getChoice ",
              "parameters": [
                {
                  "name": "other"
                },
                {
                  "name": "boundWitnessHash",
                  "type": "XyoBuff"
                }
              ],
              "returns": []
            },
            {
              "name": "addHeuristic",
              "parameters": [
                {
                  "name": "originBlocks",
                  "type": "XyoStorageProviderInterface"
                },
                {
                  "name": "bridgeQueue",
                  "type": "XyoBridgeQueue"
                }
              ],
              "returns": []
            },
            {
              "name": "removeHeuristic",
              "parameters": [
                {
                  "name": "originBlocks",
                  "type": "XyoStorageProviderInterface"
                }
              ],
              "returns": []
            },
            {
              "name": "addListener",
              "parameters": [
                {
                  "name": "originBlocks",
                  "type": "XyoStorageProviderInterface"
                },
                {
                  "name": "storageProvider",
                  "type": "XyoStorageProviderInterface"
                }
              ],
              "returns": []
            },
            {
              "name": "removeListener",
              "parameters": [
                {
                  "name": "originBlocks",
                  "type": "XyoStorageProviderInterface"
                }
              ],
              "returns": []
            },
            {
              "name": "selfSignOriginChain",
              "parameters": [
                {
                  "name": "hashingProvider",
                  "type": "XyoHash.XyoHashProvider"
                }
              ],
              "returns": []
            },
            {
              "name": "addBoundWitnessOption",
              "parameters": [
                {
                  "name": "strict",
                  "type": "Boolean"
                }
              ],
              "returns": []
            },
            {
              "name": "getBoundWitnessOptionPayloads",
              "parameters": [
                {
                  "name": "key",
                  "type": "String"
                }
              ],
              "returns": []
            },
            {
              "name": "getBoundWitnessOptions",
              "parameters": [
                {
                  "name": "key",
                  "type": "String"
                }
              ],
              "returns": []
            },
            {
              "name": "getHeuristics ",
              "parameters": [],
              "returns": []
            },
            {
              "name": "onBoundWitnessStart",
              "parameters": [],
              "returns": []
            },
            {
              "name": "onBoundWitnessEndSuccess",
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
              "parameters": [
                {
                  "name": "listener",
                  "type": "XyoNodeListener"
                }
              ],
              "returns": []
            },
            {
              "name": "loadCreatedBoundWitness",
              "parameters": [
                {
                  "name": "boundWitness",
                  "type": "XyoBoundWitness"
                }
              ],
              "returns": []
            },
            {
              "name": "doBoundWitness",
              "parameters": [
                {
                  "name": "flag",
                  "type": "Int?"
                },
                {
                  "name": "fetter",
                  "type": "XyoIterableObject"
                }
              ],
              "returns": []
            },
            {
              "name": "createStartingData",
              "parameters": [
                {
                  "name": "flag",
                  "type": "Int?"
                }
              ],
              "returns": []
            },
            {
              "name": "notifyOptions",
              "parameters": [
                {
                  "name": "key",
                  "type": "String"
                },
                {
                  "name": "boundWitness",
                  "type": "XyoBoundWitness"
                }
              ],
              "returns": []
            },
            {
              "name": "updateOriginState",
              "parameters": [
                {
                  "name": "boundWitness",
                  "type": "XyoBoundWitness"
                }
              ],
              "returns": []
            },
            {
              "name": "makeSignedPayload",
              "parameters": [
                {
                  "name": "key",
                  "type": "String"
                }
              ],
              "returns": []
            },
            {
              "name": "makeUnsignedPayload",
              "parameters": [
                {
                  "name": "key",
                  "type": "String"
                }
              ],
              "returns": []
            }
          ]
        },
        {
          "name": "XyoNodeListener",
          "desc": "An interface that listens for Xyo nodes.",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "onBoundWitnessStart",
              "parameters": [],
              "returns": []
            },
            {
              "name": "onBoundWitnessDiscovered",
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
              "parameters": [
                {
                  "name": "listener",
                  "type": "XyoNodeListener"
                }
              ],
              "returns": []
            },
            {
              "name": "onBoundWitnessEndSuccess",
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
          "name": "XyoRelayNode",
          "desc": "A base class for nodes creating data then relaying it between sentinels and bridges",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "start",
              "parameters": [],
              "returns": []
            },
            {
              "name": "stop",
              "parameters": [],
              "returns": []
            },
            {
              "name": "purgeQueue",
              "parameters": [
                {
                  "name": "tag",
                  "type": "String"
                }
              ],
              "returns": []
            },
            {
              "name": "getChoice ",
              "parameters": [
                {
                  "name": "other"
                },
                {
                  "name": "boundWitnessHash",
                  "type": "XyoBuff"
                }
              ],
              "returns": []
            },
            {
              "name": "doConnection",
              "parameters": [],
              "returns": []
            },
            {
              "name": "loop",
              "parameters": [],
              "returns": []
            }
          ]
        },
        {
          "name": "XyoUnixTimeGetter",
          "desc": "A class that gets a Unix Timestamp for a heuristic ",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "getHeuristic",
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
          "name": "XyoIndexableOriginBlockRepository",
          "desc": "An open class for a repository for origin blocks which is indexable.",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "addIndexer",
              "parameters": [
                {
                  "name": "originBlocks",
                  "type": "XyoStorageProviderInterface"
                },
                {
                  "name": "unsignedOptions",
                  "type": "Array<XyoBuff>"
                }
              ],
              "returns": []
            },
            {
              "name": "removerIndexer",
              "parameters": [
                {
                  "name": "originBlocks",
                  "type": "XyoStorageProviderInterface"
                }
              ],
              "returns": []
            },
            {
              "name": "addBoundWitness",
              "parameters": [
                {
                  "name": "options",
                  "type": "Array<XyoBoundWitnessOption>"
                }
              ],
              "returns": []
            },
            {
              "name": "removeOriginBlock",
              "parameters": [
                {
                  "name": "bitFlag",
                  "type": "Int"
                }
              ],
              "returns": []
            }
          ]
        },
        {
          "name": "XyoOriginBlockRepository",
          "desc": "An interface adds a bound witness to a navigator, gets all of the origin blocks in storage, checks if an origin block exists in storage, and removes an origin block from the navigator and from storage.",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "removeOriginBlock",
              "parameters": [
                {
                  "name": "bitFlag",
                  "type": "Int"
                }
              ],
              "returns": []
            },
            {
              "name": "containsOriginBlock",
              "parameters": [
                {
                  "name": "bitFlag",
                  "type": "Int"
                }
              ],
              "returns": []
            },
            {
              "name": "getAllOriginBlockHashes",
              "parameters": [],
              "returns": []
            },
            {
              "name": "addBoundWitness",
              "parameters": [
                {
                  "name": "options",
                  "type": "Array<XyoBoundWitnessOption>"
                }
              ],
              "returns": []
            }
          ]
        },
        {
          "name": "XyoOriginChainStateManager",
          "desc": "A class that is an implementation of the XyoOriginStateRepository, the functions are used in the repository class as needed. ",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "getSigners ",
              "parameters": [],
              "returns": []
            },
            {
              "name": "addSigner",
              "parameters": [
                {
                  "name": "shortArrayReadSize",
                  "type": "Int"
                }
              ],
              "returns": []
            },
            {
              "name": "removeOldestSigner",
              "parameters": [],
              "returns": []
            },
            {
              "name": "newOriginBlock",
              "parameters": [
                {
                  "name": "hashingProviderInterface",
                  "type": "XyoStorageProviderInterface"
                }
              ],
              "returns": []
            },
            {
              "name": "addWaitingSigner",
              "parameters": [],
              "returns": []
            }
          ]
        },
        {
          "name": "XyoOriginStateRepository",
          "desc": "An interface that is used to keep track of the state when creating the origin chain. This includes the previous hash, index, and the current/next keypairs to sign with.",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "newOriginBlock",
              "parameters": [
                {
                  "name": "hashingProviderInterface",
                  "type": "XyoStorageProviderInterface"
                }
              ],
              "returns": []
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
                  "name": "shortArrayReadSize",
                  "type": "Int"
                }
              ],
              "returns": []
            }
          ]
        },
        {
          "name": "XyoStorageOriginBlockRepository",
          "desc": "This class is used as a bucket to store origin blocks, and fill links between them.",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "removeOriginBlock",
              "parameters": [
                {
                  "name": "bitFlag",
                  "type": "Int"
                }
              ],
              "returns": []
            },
            {
              "name": "containsOriginBlock",
              "parameters": [
                {
                  "name": "bitFlag",
                  "type": "Int"
                }
              ],
              "returns": []
            },
            {
              "name": "getAllOriginBlockHashes",
              "parameters": [],
              "returns": []
            },
            {
              "name": "readIteratorFromKey",
              "parameters": [
                {
                  "name": "originBlocks",
                  "type": "XyoStorageProviderInterface"
                }
              ],
              "returns": []
            },
            {
              "name": "addBoundWitness",
              "parameters": [
                {
                  "name": "options",
                  "type": "Array<XyoBoundWitnessOption>"
                }
              ],
              "returns": []
            },
            {
              "name": "getOriginBlockByBlockHash",
              "parameters": [
                {
                  "name": "bitFlag",
                  "type": "Int"
                }
              ],
              "returns": []
            },
            {
              "name": "updateIndex",
              "parameters": [
                {
                  "name": "data",
                  "type": "ByteArray"
                }
              ],
              "returns": []
            },
            {
              "name": "removeIndex",
              "parameters": [
                {
                  "name": "data",
                  "type": "ByteArray"
                }
              ],
              "returns": []
            }
          ]
        },
        {
          "name": "XyoOriginChainStateRepository",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "commit",
              "parameters": [],
              "returns": [
                {
                  "type": "Deferred<Unit>"
                }
              ]
            },
            {
              "name": "getLastBoundWitnessTime",
              "parameters": [],
              "returns": [
                {
                  "type": "Long"
                }
              ]
            },
            {
              "name": "onBoundWitness",
              "parameters": [],
              "returns": []
            },
            {
              "name": "setStatics",
              "parameters": [],
              "returns": [
                {
                  "type": "Array<XyoBuff>",
                  "desc": "statics"
                }
              ]
            },
            {
              "name": "getStatics",
              "parameters": [],
              "returns": [
                {
                  "type": "Array<XyoBuff>"
                }
              ]
            },
            {
              "name": "putSigner",
              "parameters": [],
              "returns": [
                {
                  "type": "XyoSigner",
                  "desc": "signer"
                }
              ]
            },
            {
              "name": "removeOldestSigner",
              "parameters": [],
              "returns": []
            },
            {
              "name": "getSigners",
              "parameters": [],
              "returns": [
                {
                  "type": "Array<XyoSigner>"
                }
              ]
            },
            {
              "name": "putPreviousHash",
              "parameters": [],
              "returns": [
                {
                  "type": "XyoBuff"
                }
              ]
            },
            {
              "name": "getPreviousHash",
              "parameters": [],
              "returns": [
                {
                  "type": "XyoBuff"
                }
              ]
            },
            {
              "name": "putIndex",
              "parameters": [],
              "returns": [
                {
                  "type": "XyoBuff",
                  "desc": "index"
                }
              ]
            },
            {
              "name": "getIndex",
              "parameters": [],
              "returns": [
                {
                  "type": "XyoBuff"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "desc": "XYO Queries",
      "name": "queries",
      "objects": [
        {
          "name": "XyoCurrentState",
          "desc": "A class that queries the current state of a block in XYO",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "getSigners ",
              "parameters": [],
              "returns": []
            }
          ]
        },
        {
          "name": "XyoGetOriginBlockByHash",
          "desc": "Interface that can get an origin block by its previous hash field. ",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "getOriginBlockByBlockHash",
              "parameters": [
                {
                  "name": "bitFlag",
                  "type": "Int"
                }
              ],
              "returns": []
            }
          ]
        },
        {
          "name": "XyoGetOriginBlocksByPublicKey",
          "desc": "Interface that can get a group of origin blocks that belong to a given party by public key",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "getOriginChainByPublicKey",
              "parameters": [
                {
                  "name": "originBlocks",
                  "type": "XyoStorageProviderInterface"
                }
              ],
              "returns": []
            }
          ]
        }
      ]
    },
    {
      "desc": "XYO Schemas",
      "name": "schemas",
      "objects": [
        {
          "name": "XyoInterpret",
          "properties": [],
          "enumerations": [],
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
                  "type": "XyoBuff"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "desc": "XYO Storage",
      "name": "storage",
      "objects": [
        {
          "name": "XyoInMemoryStorageProvider",
          "desc": "A simple in-memory storage implementation of the XyoStorageProviderInterface",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "containsKey",
              "parameters": [
                {
                  "name": "originBlocks",
                  "type": "XyoStorageProviderInterface"
                }
              ],
              "returns": []
            },
            {
              "name": "delete",
              "parameters": [
                {
                  "name": "originBlocks",
                  "type": "XyoStorageProviderInterface"
                }
              ],
              "returns": []
            },
            {
              "name": "getAllKeys",
              "parameters": [],
              "returns": []
            },
            {
              "name": "read",
              "parameters": [
                {
                  "name": "originBlocks",
                  "type": "XyoStorageProviderInterface"
                }
              ],
              "returns": []
            },
            {
              "name": "write",
              "parameters": [
                {
                  "name": "originBlocks",
                  "type": "XyoStorageProviderInterface"
                },
                {
                  "name": "itemsToTransfer",
                  "type": "Array<XyoBuff>"
                }
              ],
              "returns": []
            }
          ]
        },
        {
          "name": "XyoSaveQueue",
          "desc": "class that implements a queue for key and weight storage",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "saveKeys",
              "parameters": [
                {
                  "name": "keys",
                  "type": "Arrray<XyoObject>"
                }
              ],
              "returns": []
            },
            {
              "name": "getKeys",
              "parameters": [],
              "returns": []
            },
            {
              "name": "saveWeights",
              "parameters": [
                {
                  "name": "exception",
                  "type": "Exception?"
                }
              ],
              "returns": []
            },
            {
              "name": "getWeights ",
              "parameters": [],
              "returns": []
            }
          ]
        },
        {
          "name": "XyoSaveState",
          "desc": "class that manages save state for keys and hashes",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "saveIndex",
              "parameters": [
                {
                  "name": "indexer",
                  "type": "XyoOriginBlockIndexerInterface"
                }
              ],
              "returns": []
            },
            {
              "name": "saveSigners",
              "parameters": [
                {
                  "name": "originBlock",
                  "type": "XyoBoundWitness"
                }
              ],
              "returns": []
            },
            {
              "name": "savePreviousHash",
              "parameters": [
                {
                  "name": "hashingProviderInterface",
                  "type": "XyoStorageProviderInterface"
                }
              ],
              "returns": []
            },
            {
              "name": "getIndex",
              "parameters": [],
              "returns": []
            },
            {
              "name": "getPreviousHash",
              "parameters": [],
              "returns": [
                {
                  "type": "XyoBuff"
                }
              ]
            },
            {
              "name": "getSigners ",
              "parameters": [],
              "returns": []
            },
            {
              "name": "readFromKey",
              "parameters": [
                {
                  "name": "originBlocks",
                  "type": "XyoStorageProviderInterface"
                }
              ],
              "returns": []
            },
            {
              "name": "writeFromKey",
              "parameters": [
                {
                  "name": "originBlocks",
                  "type": "XyoStorageProviderInterface"
                },
                {
                  "name": "itemsToTransfer",
                  "type": "Array<XyoBuff>"
                }
              ],
              "returns": []
            },
            {
              "name": "readBuffFromKey",
              "parameters": [
                {
                  "name": "originBlocks",
                  "type": "XyoStorageProviderInterface"
                }
              ],
              "returns": []
            }
          ]
        },
        {
          "name": "XyoStorageProviderInterface",
          "desc": "An XyoStorageProviderInterface is meant to provide a persistence layer. It abstracts exactly how that is done. This could be in-memory storage or some disk strategy. It aims to persist data in a non-volatile way.",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "write",
              "parameters": [
                {
                  "name": "originBlocks",
                  "type": "XyoStorageProviderInterface"
                },
                {
                  "name": "itemsToTransfer",
                  "type": "Array<XyoBuff>"
                }
              ],
              "returns": []
            },
            {
              "name": "read",
              "parameters": [
                {
                  "name": "originBlocks",
                  "type": "XyoStorageProviderInterface"
                }
              ],
              "returns": []
            },
            {
              "name": "getAllKeys",
              "parameters": [],
              "returns": []
            },
            {
              "name": "delete",
              "parameters": [
                {
                  "name": "originBlocks",
                  "type": "XyoStorageProviderInterface"
                }
              ],
              "returns": []
            },
            {
              "name": "containsKey",
              "parameters": [
                {
                  "name": "originBlocks",
                  "type": "XyoStorageProviderInterface"
                }
              ],
              "returns": []
            }
          ]
        },
        {
          "name": "XyoWeakReferenceCaching",
          "desc": "An XyoStorageProviderInterface that uses weak references to add a caching layer.",
          "properties": [],
          "enumerations": [],
          "functions": [
            {
              "name": "write",
              "parameters": [
                {
                  "name": "originBlocks",
                  "type": "XyoStorageProviderInterface"
                },
                {
                  "name": "itemsToTransfer",
                  "type": "Array<XyoBuff>"
                }
              ],
              "returns": []
            },
            {
              "name": "read",
              "parameters": [
                {
                  "name": "originBlocks",
                  "type": "XyoStorageProviderInterface"
                }
              ],
              "returns": []
            },
            {
              "name": "containsKey",
              "parameters": [
                {
                  "name": "originBlocks",
                  "type": "XyoStorageProviderInterface"
                }
              ],
              "returns": []
            },
            {
              "name": "delete",
              "parameters": [
                {
                  "name": "originBlocks",
                  "type": "XyoStorageProviderInterface"
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
      "desc": "Crypto Signing",
      "name": "signing",
      "objects": [
        {
          "name": "XyoSigner",
          "desc": "Abstract class performing public key cryptographic operations. A XyoSigner is obtained from a XyoSignerProvider with newInstance(). If a compatible private key is provided the XyoCryptoSigner will create its keypair using this private key. Otherwise, it will create a random keypair. ",
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
          "enumerations": [],
          "functions": [
            {
              "name": "signData",
              "parameters": [
                {
                  "name": "bytes",
                  "type": "ByteArray"
                }
              ],
              "returns": [
                {
                  "type": "Deferred<XyoBuff>",
                  "desc": "deferred cryptographic signature of the data field"
                }
              ]
            }
          ]
        },
        {
          "name": "XyoSignerProvider",
          "desc": "Gives access to a XyoSigner that can preform public key cryptographic functions. Note: all functions in this class are abstract. ",
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
          "enumerations": [],
          "functions": [
            {
              "name": "disable",
              "parameters": [],
              "returns": []
            },
            {
              "name": "enable",
              "parameters": [],
              "returns": []
            },
            {
              "name": "verifySign",
              "parameters": [
                {
                  "name": "publicKey",
                  "type": "XyoBuff"
                },
                {
                  "name": "byteArray",
                  "type": "ByteArray"
                },
                {
                  "name": "signature",
                  "type": "XyoBuff"
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
              "parameters": [
                {
                  "name": "privateKey",
                  "type": "ByteArray"
                }
              ],
              "returns": [
                {
                  "type": "XyoSigner",
                  "desc": "new instance of a XyoSigner for the given algorithm, generates a keypair with given private key"
                }
              ]
            },
            {
              "name": "newInstance",
              "parameters": [],
              "returns": [
                {
                  "type": "XyoSigner",
                  "desc": "Provides a new instance of a XyoSigner for the given algorithm and generates a keypair"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
  }
]