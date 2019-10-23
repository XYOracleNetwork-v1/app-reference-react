module.exports = [{
  "id": "sdk-xyo-android",
  "name": "XYO Android SDK",
  "locale": "EN",
  "platform": "android",
  "lang": "Kotlin",
  "type": "SDK",
  "desc": "High level SDK for XYO integration in Android",
  "modules": [
    {
      "name": "sdk",
      "desc": "",
      "objects": [
        {
          "name": "XyoSdk",
          "desc": "",
          "properties": [],
        },
        {
          "name": "XyoNodeBuilder",
          "desc": "Class that builds an XYONode with set properties using XYO Client and Server",
          "properties": [],
          "functions": [
            {
              "name": "build",
              "desc": "Builds an XyoNode with a given context.",
              "parameters": [
                {
                  "name": "context : ",
                  "type": "Context"
                }
              ],
              "returns": [
                {
                  "desc": "node",
                  "type": "XyoNode"
                }
              ]
            },
          ],
        },
        {
          "name": "XyoNode",
          "desc": "Node structure for builder to set storage, network, and bound witness listeners.",
          "properties": [
            {
              "name": "networks",
              "type": "Map<String, XyoNetwork>",
            }
          ],
          "functions": [
            {
              "name": "setAllListeners",
              "desc": "Set all listeners for client and server.",
              "parameters": [
                {
                  "name": "name : ",
                  "type": "String,",
                },
                {
                  "name": "listener : ",
                  "type": "XyoBoundWitness",
                },
              ],
            }
          ], 
        },
        {
          "name": "XyoBoundWitnessTarget",
          "desc": "Protocol for setting bound witnessing with instructions.",
          "properties": [
            {
              "name": "publicKey",
              "type": "String",
              "desc": "A base58 converted key for signed origin state."
            },
            {
              "name": "relayNode",
              "type": "XyoRelayNode",
              "desc": "Node to create data then relay over Ble."
            },
            {
              "name": "procedureCatalog",
              "type": "XyoProcedureCatalog",
              "desc": "Procedure Catalog to what client or server can do over Ble."
            },
            {
              "name": "acceptBridging",
              "type": "Boolean",
              "desc": "Set to accept bound witnesses with bridged payloads.",
            },
            {
              "name": "autoBridge",
              "type": "Boolean",
              "desc": "Set to bridge claims when auto bound witnessing.",
            },
          ],
          "functions": [
            {
              "name": "boundWitnessStarted",
              "desc": "Listen for the start of a bound witness.",
              "parameters": [
                {
                  "name": "source : ",
                  "type": "Any?",
                },
              ],
            },
            {
              "name": "boundWitnessCompleted",
              "desc": "Listen for the completion of a bound witness.",
              "parameters": [
                {
                  "name": "source : ",
                  "type": "Any?,",
                },
                {
                  "name": "boundWitness : ",
                  "type": "XyoBoundWitness?,",
                },
                {
                  "name": "error : ",
                  "type": "String",
                },
              ],
            },
          ],
        },
      ]
    },
    {
      "name": "network",
      "desc": "XYO Ble Network(Client/Server)",
      "objects": [
          {
          "name": "XyoBleNetwork",
          "desc": "",
          "properties": [
            {
              "name": "context",
              "type": "Context",
              "desc": "Android context for network"
            },
            {
              "name": "relayNode",
              "type": "XyoRelayNode",
              "desc": "Node to create data then relay over Ble."
            },
            {
              "name": "procedureCatalog",
              "type": "XyoProcedureCatalog",
              "desc": "Procedure Catalog to what client or server can do over Ble."
            },
            {
              "name": "client",
              "type": "XyoBleClient",
              "desc": "Client for BLE"
            },
            {
              "name": "server",
              "type": "XyoBleServer",
              "desc": "Server for Ble"
            },
          ]
        },
        {
          "name": "XyoTcpIpNetwork",
          "desc": "",
          "properties": [
            {
              "name": "relayNode",
              "type": "XyoRelayNode",
              "desc": "Node to create data then relay over TcpIp"
            },
            {
              "name": "procedureCatalog",
              "type": "XyoProcedureCatalog",
              "desc": "Procedure Catalog to what client or server can do over TcpIp."
            },
            {
              "name": "client",
              "type": "XyoTcpIpClient",
              "desc": "Client for TcpIp"
            },
            {
              "name": "server",
              "type": "XyoTcpIpServer",
              "desc": "Server for TcpIp"
            },
          ],
        }
      ]
    },
    {
      "name": "client",
      "desc": "XYO Client",
      "objects": [
        {
          "name": "XyoClient",
          "desc": "Abstract class for client operations in bound witnessing and bridging",
          "properties": [
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
              "name": "autoBoundWitnesses",
              "type": "Boolean",
              "desc": "Set to automatically start and complete bound witnesses",
            },
            {
              "name": "knownBridges",
              "type": "List<String>",
              "desc": "List of bridges that can be set by client, or use of default.",
            },
          ],
        },
        {
          "name": "XyoBleClient",
          "desc": "Ble client for bound witnessing and bridging",
          "properties": [
            {
              "name": "context",
              "type": "Context",
              "desc": "Android context for client"
            },
            {
              "name": "relayNode",
              "type": "XyoRelayNode",
              "desc": "Node to create data then relay using client over Ble."
            },
            {
              "name": "procedureCatalog",
              "type": "XyoProcedureCatalog",
              "desc": "Procedure Catalog to what client can do over Ble."
            },
            {
              "name": "autoBridge",
              "type": "Boolean",
              "desc": "Set for automatic bridging of bound witnesses"
            },
            {
              "name": "acceptBridging",
              "type": "Boolean",
              "desc": "Set to accept bridged bound witnesses"
            },
            {
              "name": "autoBoundWitnesses",
              "type": "Boolean",
              "desc": "Set to automatically start and complete bound witnesses"
            },
            {
              "name": "scan",
              "type": "Boolean",
              "desc": "Set to start scanning for devices to bound witness with"
            },
          ],
          "functions": [],
        },
        {
          "name": "XyoTcpIpClient",
          "desc": "TcpIp client for bound witnessing and bridging",
          "properties": [
            {
              "name": "relayNode",
              "type": "XyoRelayNode",
              "desc": "Node to create data then relay using client over TcpIp."
            },
            {
              "name": "procedureCatalog",
              "type": "XyoProcedureCatalog",
              "desc": "Procedure Catalog to what client can do over Ble."
            },
            {
              "name": "autoBridge",
              "type": "Boolean",
              "desc": "Set for automatic bridging of bound witnesses"
            },
            {
              "name": "acceptBridging",
              "type": "Boolean",
              "desc": "Set to accept bridged bound witnesses"
            },
            {
              "name": "autoBoundWitnesses",
              "type": "Boolean",
              "desc": "Set to automatically start and complete bound witnesses"
            },
          ],
          "functions": [],
        },
      ],
    },
    {
      "name": "server",
      "desc": "XYO Server",
      "objects": [
        {
          "name": "XyoBleServer",
          "desc": "Ble server to receive bridged bound witnesses",
          "properties": [
            {
              "name": "context",
              "type": "Context",
              "desc": "Android context for server"
            },
            {
              "name": "relayNode",
              "type": "XyoRelayNode",
              "desc": "Node to bound witness with"
            },
            {
              "name": "procedureCatalog",
              "type": "XyoProcedureCatalog",
              "desc": "Procedure Catalog to set for server"
            },
            {
              "name": "autoBridge",
              "type": "Boolean",
              "desc": "Set for automatic bridging of bound witnesses"
            },
            {
              "name": "acceptBridging",
              "type": "Boolean",
              "desc": "Set to accept bridged bound witnesses"
            },
            {
              "name": "listen",
              "type": "Boolean",
              "desc": "Set to listen for bridged bound witnesses and data"
            }            
          ]
        },
        {
          "name": "XyoTcpIpServer",
          "desc": "TcpIp server to receive bridged bound witnesses and data",
          "properties": [
            {
              "name": "context",
              "type": "Context",
              "desc": "Android context for server"
            },
            {
              "name": "relayNode",
              "type": "XyoRelayNode",
              "desc": "Node to bound witness with"
            },
            {
              "name": "procedureCatalog",
              "type": "XyoProcedureCatalog",
              "desc": "Procedure Catalog to set for server"
            },
            {
              "name": "autoBridge",
              "type": "Boolean",
              "desc": "Set for automatic bridging of bound witnesses"
            },
            {
              "name": "acceptBridging",
              "type": "Boolean",
              "desc": "Set to accept bridged bound witnesses"
            },
            {
              "name": "listen",
              "type": "Boolean",
              "desc": "Set to listen for bridged bound witnesses and data"
            }             
          ],
        }
      ]
    },
  ]
}]