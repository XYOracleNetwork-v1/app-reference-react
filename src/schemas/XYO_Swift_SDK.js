module.exports = [{
  "id": "sdk-xyo-swift",
  "name": "XYO Swift SDK",
  "locale": "EN",
  "platform": "iOS",
  "lang": "Swift",
  "type": "SDK",
  "desc": "High level SDK for XYO integration in Swift for iOS/MacOS/iPadOS",
  "modules": [
    {
      "name": "sdk",
      "desc": "",
      "objects": [
        {
          "name": "XyoSdk",
          "desc": "",
          "properties": [],
          "functions": [],
        },
        {
          "name": "XyoNodeBuilder",
          "desc": "Class that builds an XYONode with set properties using XYO Client and Server",
          "functions": [
            {
              "name": "build",
              "desc": "Builds an XyoNode with defaults.",
              "parameters": [],
              "returns": [
                {
                  "desc": "node",
                  "type": "XyoNode"
                }
              ]
            },
            {
              "name": "addNetwork",
              "desc": "Adds a network to the node builder.",
              "parameters": [
                {
                  "name": "name : ",
                  "type": "String,"
                },
                {
                  "name": "network : ",
                  "type": "XyoNetwork"
                },
              ],
            },          
            {
              "name": "setStorage",
              "desc": "Sets a storage provider for the node builder.",
              "parameters": [
                {
                  "name": "storage : ",
                  "type": "XyoStorageProvider"
                },
              ],
            },          
            {
              "name": "setBoundWitnessDelegate",
              "desc": "Sets a delegate for bound witness to the node builder.",
              "parameters": [
                {
                  "name": "delegate : ",
                  "type": "BoundWitnessDelegate"
                },
              ],
            },          
          ], 
        },
        {
          "name": "XyoNode",
          "desc": "Node structure for builder to set storage, network, and bound witness delegates.",
          "properties": [
            {
              "name": "networks",
              "type": "[String: XyoNetwork]",
              "desc": "The list of networks that are set after the node is initiated",
            },
            {
              "name": "storage",
              "type": "XyoStorageProvider",
              "desc": "The storage provider for the node on init",
            },
          ],
          "functions": [
            {
              "name": "setAllDelegates",
              "desc": "Set the default bound witness delegates for the node.",
              "parameters": [
                {
                  "name": "delegate",
                  "type": "BoundWitnessDelegate"
                }
              ],
            }
          ],
        },
        {
          "name": "XyoBoundWitnessTarget",
          "desc": "Protocol for setting bound witnessing with instructions.",
          "properties": [
            {
              "name": "acceptBridging",
              "type": "Bool",
              "desc": "Accept bound witnesess that have bridged payloads.",
            },
            {
              "name": "autoBridge",
              "type": "Bool",
              "desc": "Auto bridge the chain after auto bound witnessing.",
            },
            {
              "name": "delegate",
              "type": "BoundWitnessDelegate",
              "desc": "The delegate for bound witness.",
            },
            {
              "name": "relayNode",
              "type": "XyoRelayNode",
              "desc": "",
            },
            {
              "name": "procedureCatalog",
              "type": "XyoProcedureCatalog",
              "desc": "",
            },
          ],
          "functions": [
            {
              "name": "init",
              "desc": "Create the bound witness target.",
              "parameters": [
                {
                  "name": "relayNode",
                  "type": "XyoRelayNode"
                },
                {
                  "name": "procedureCatalog",
                  "type": "XyoProcedureCatalog"
                },
              ],
            }
          ],
        },
        {
          "name": "BoundWitnessDelegate",
          "desc": "Protocol for a bound witness delegate.",
          "functions": [
            {
              "name": "getPayloadData",
              "desc": "Retrieves client data to pass into a bound witness.",
              "returns": [
                {
                  "type": "[UInt8]",
                  "desc": "The payload data as a byte array",
                }
              ],
            },
            {
              "name": "boundWitness",
              "desc": "Verify bound witness start.",
              "parameters": [
                {
                  "name": "started withTarget : ",
                  "type": "XyoBoundWitnessTarget",
                }
              ],
            },
            {
              "name": "boundWitness",
              "desc": "Verify bound witness completion.",
              "parameters": [
                {
                  "name": "completed withTarget : ",
                  "type": "XyoBoundWitnessTarget,",
                },
                {
                  "name": "withBoundWitness : ",
                  "type": "XyoBoundWitness?"
                }
              ],
            },
            {
              "name": "boundWitness",
              "desc": "Verify bound witness failure.",
              "parameters": [
                {
                  "name": "failed withTarget : ",
                  "type": "XyoBoundWitnessTarget?",
                },
                {
                  "name": "withError",
                  "type": "XyoError",
                }
              ],
            },
          ],
        },        
      ],
    },
    { 
      "name": "network",
      "desc": "",
      "objects": [
        {
          "name": "XyoNetwork",
          "desc": "Protocol to set network type for client or server.",
          "properties": [
            {
              "name": "type",
              "type": "XyoNetworkType",
              "desc": "Enumeration that will be set for node building, bound witness and bridging.",
            },
            {
              "name": "client",
              "type": "XyoClient",
              "desc": "The client for node building, bound witness and bridging.",
            },
            {
              "name": "server",
              "type": "XyoServer",
              "desc": "The server for node building, bound witness and bridging.",
            },
          ],
          "enumerations": [
            {
              "name": "XyoNetworkType",
              "values": [
                {
                  "name": "bluetoothLe"
                },
                {
                  "name": "tcpIp"
                },
                {
                  "name": "other"
                },
              ],
            }
          ],
        },
        {
          "name": "XyoBleNetwork",
          "desc": "Network protocol for BLE based on XYONetwork protocol",
          "properties": [
            {
              "name": "client",
              "type": "XyoBleClient",
              "desc": "The client for node building, bound witness and bridging.",
            },
            {
              "name": "server",
              "type": "XyoBleServer",
              "desc": "The server for node building, bound witness and bridging.",
            },
          ],
          "functions": [
            {
              "name": "init",
              "desc": "Start a ble network for client or server.",
              "parameters": [
                {
                "name": "relayNode : ",
                "type": "XyoRelayNode,",
                },
                {
                  "name": "procedureCatalog",
                  "type": "XyoProcedureCatalog",
                },
              ],
            },
          ],
        },
        {
          "name": "XyoTcpipNetwork",
          "desc": "Network protocol for TcpIp based on XYONetwork protocol",
          "properties": [
            {
              "name": "client",
              "type": "XyoTcpipClient",
              "desc": "The client for node building, bound witness and bridging.",
            },
            {
              "name": "server",
              "type": "XyoTcpipServer",
              "desc": "The server for node building, bound witness and bridging.",
            },
          ],
          "functions": [
            {
              "name": "init",
              "desc": "Start a tcpip network for client or server.",
              "parameters": [
                {
                "name": "relayNode : ",
                "type": "XyoRelayNode,",
                },
                {
                  "name": "procedureCatalog",
                  "type": "XyoProcedureCatalog",
                },
              ],
            },
          ],
        },
      ],
    },
    { 
      "name": "client",
      "desc": "Protocols for client operations for ble and tcpip clients.",
      "objects": [
        {
          "name": "XyoClient",
          "desc": "Protocol for client operations using XyoBoundWitnessTarget.",
          "properties": [
            {
              "name": "scan",
              "type": "Bool",
            },
            {
              "name": "autoBoundWitness",
              "type": "Bool",
            },
            {
              "name": "knownBridges",
              "type": "[String]?",
            },
          ],
        },
        {
          "name": "XyoBleClient",
          "desc": "Client operations using the XyoClient protocol",
          "properties": [
            {
              "name": "knownBridges",
              "type": "[String]",
              "desc": "An array of bridges both default and/or set by the user.",
            },
            {
              "name": "relayNode",
              "type": "XyoRelayNode",
              "desc": "Node to create data then relay using client over Ble.",
            },
            {
              "name": "procedureCatalog",
              "type": "XyoProcedureCatalog",
              "desc": "Procedure Catalog to what client can do over Ble.",
            },
            {
              "name": "delegate",
              "type": "BoundWitnessDelegate?",
            },
            {
              "name": "acceptBridging",
              "type": "Bool",
              "desc": "Set to accept bridged bound witnesses",
            },
            {
              "name": "autoBoundWitness",
              "type": "Bool",
              "desc": "Set to automatically start and complete bound witnesses",
            },
            {
              "name": "autoBridge",
              "type": "Bool",
              "desc": "Set for automatic bridging of bound witnesses",
            },
            {
              "name": "scan",
              "type": "Bool",
              "desc": "When set will either start or stop scan for devices."
            },
          ],
          "functions": [
            {
              "name": "init",
              "desc": "",
              "parameters": [
                {
                  "name": "relayNode : ",
                  "type": "XyoRelayNode,",
                },
                {
                  "name": "procedureCatalog : ",
                  "type": "XyoProcedureCatalog,",
                },
                {
                  "name": "autoBridge : ",
                  "type": "Bool,",
                },
                {
                  "name": "acceptBridging : ",
                  "type": "Bool,",
                },
                {
                  "name": "autoBoundWitness : ",
                  "type": "Bool",
                },
              ],
              "returns": [],
            },
            {
              "name": "startScanningForDevices",
              "desc": "Sets the delegate and starts the scanner",
              "parameters": [],
              "returns": [],
            },
            {
              "name": "stopScanningForDevices",
              "desc": "Stops the delegate and stops the scanner",
              "parameters": [],
              "returns": [],
            },
            {
              "name": "doBoundWitness",
              "desc": "",
              "parameters": [
                {
                  "name": "withDevice : ",
                  "type": "XyoBluetoothDevice",
                },
              ],
              "returns": [],
            },
            {
              "name": "doBoundWitness",
              "desc": "",
              "parameters": [
                {
                  "name": "withDevice : ",
                  "type": "XyoBluetoothDevice,",
                },
                {
                  "name": "withCompletion : ",
                  "type": "BoundWitnessCallback",
                },
              ],
              "returns": [],
            },
          ],
        },
        {
          "name": "XyoTcpipClient",
          "desc": "Client operations for tcpip bound witnessing and bridging.",
          "properties": [
            {
              "name": "knownBridges",
              "type": "[String]",
              "desc": "An array of bridges both default and/or set by the user.",
            },
            {
              "name": "relayNode",
              "type": "XyoRelayNode",
              "desc": "Node to create data then relay using client over Tcpip.",
            },
            {
              "name": "procedureCatalog",
              "type": "XyoProcedureCatalog",
              "desc": "Procedure Catalog to what client can do over Tcpip.",
            },
            {
              "name": "delegate",
              "type": "BoundWitnessDelegate?",
            },
            {
              "name": "acceptBridging",
              "type": "Bool",
              "desc": "Set to accept bridged bound witnesses",
            },
            {
              "name": "autoBoundWitness",
              "type": "Bool",
              "desc": "Set to automatically start and complete bound witnesses",
            },
            {
              "name": "autoBridge",
              "type": "Bool",
              "desc": "Set for automatic bridging of bound witnesses",
            },
            {
              "name": "scan",
              "type": "Bool",
            },            
          ],
          "functions": [
            {
              "name": "init",
              "desc": "",
              "parameters": [
                {
                  "name": "relayNode : ",
                  "type": "XyoRelayNode,",
                },
                {
                  "name": "procedureCatalog : ",
                  "type": "XyoProcedureCatalog,",
                },
                {
                  "name": "autoBridge : ",
                  "type": "Bool,",
                },
                {
                  "name": "acceptBridging : ",
                  "type": "Bool,",
                },
                {
                  "name": "autoBoundWitness : ",
                  "type": "Bool",
                },
              ],
              "returns": [],
            },            
            {
              "name": "startBridging",
              "desc": "Start auto bridging and set semaphore. It will execute bridge() function after bound witness discovery.",
              "parameters": [],
              "returns": [],
            },            
            {
              "name": "bridge",
              "desc": "If semaphore and knownBridges exist, this bridges a bound witness over a socket peer-to-peer.",
              "parameters": [],
              "returns": [],
            },            
          ],
        },
      ],
    },
    {
      "name": "server",
      "desc": "Protocols for servers operations for ble and tcpip clients.",
      "objects": [
        {
          "name": "XyoServer",
          "desc": "Protocol for server operations, starts listening for bound witnesses.",
          "properties": [
            {
              "name": "listen",
              "type": "Bool",
            }
          ],
        },
        {
          "name": "XyoBleServer",
          "desc": "Server operations for ble based on the XyoServer protocol",
          "properties": [
            {
              "name": "delegate",
              "type": "BoundWitnessDelegate?",
            },
            {
              "name": "relayNode",
              "type": "XyoRelayNode",
            },
            {
              "name": "procedureCatalog",
              "type": "XyoProcedureCatalog",
            },
            {
              "name": "listen",
              "type": "Bool",
            },
            {
              "name": "autoBridge",
              "type": "Bool",
            },
            {
              "name": "acceptBridging",
              "type": "Bool",
            },
            {
              "name": "advertiser",
              "type": "XyoBluetoothServer",
            },
          ],
          "functions": [
            {
              "name": "init",
              "desc": "",
              "parameters": [
                {
                  "name": "relayNode : ",
                  "type": "XyoRelayNode,",
                },
                {
                  "name": "procedureCatalog : ",
                  "type": "XyoProcedureCatalog,",
                },
                {
                  "name": "autoBridge : ",
                  "type": "Bool,",
                },
                {
                  "name": "acceptBridging : ",
                  "type": "Bool,",
                },
              ],
            },
            {
              "name": "startListening",
              "desc": "Starts the advertiser.",
            },
            {
              "name": "stopListening",
              "desc": "Stops the advertiser."
            },          
          ],
        },
        {
          "name": "XyoTcpipServer",
          "desc": "Server operations for ble based on the XyoServer protocol for tcpip.",
          "properties": [
            {
              "name": "delegate",
              "type": "BoundWitnessDelegate?",
            },
            {
              "name": "relayNode",
              "type": "XyoRelayNode",
            },
            {
              "name": "procedureCatalog",
              "type": "XyoProcedureCatalog",
            },
            {
              "name": "autoBridge",
              "type": "Bool",
            },
            {
              "name": "acceptBridging",
              "type": "Bool",
            },
            {              
              "name": "listen",
              "type": "Bool",
            },
          ],
          "functions": [
            {
              "name": "init",
              "desc": "",
              "parameters": [
                {
                  "name": "relayNode : ",
                  "type": "XyoRelayNode,",
                },
                {
                  "name": "procedureCatalog : ",
                  "type": "XyoProcedureCatalog,",
                },
                {
                  "name": "autoBridge : ",
                  "type": "Bool,",
                },
                {
                  "name": "acceptBridging : ",
                  "type": "Bool,",
                },
              ],
            },
          ],
        },
      ],
    }
  ]
}];