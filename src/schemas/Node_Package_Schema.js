module.exports = [{
  "id": "sdk-pkg-node",
  "name": "Node Package Library",
  "type": "SDK",
  "locale": "EN",
  "lang": "Node",
  "platform": "web",
  "modules": [
      {
        "desc": "identity package ",
        "name": "about-me ",
        "objects": [
          {
            "name": "XyoAboutMeService",
            "properties": [],
            "enumerations": [],
            "functions": [
              {
                "name": "getAboutMe",
                "async": "true",
                "parameters": [],
                "returns": [
                  {
                    "type": "me",
                    "desc": "IXyoPeerDescriptionWithPeers"
                  }
                ]
              },
              {
                "name": "startDiscoveringPeers",
                "parameters": [],
                "returns": [
                  {
                    "type": "start",
                    "desc": "Boolean"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "desc": "diviner id package",
        "name": "about-diviner",
        "objects": [
          {
            "name": "IXyoAboutDiviner",
            "properties": [
              {
                "name": "name",
                "desc": "String"
              },
              {
                "name": "version",
                "desc": "String"
              },
              {
                "name": "url",
                "desc": "String"
              },
              {
                "name": "address",
                "desc": "String "
              },
              {
                "name": "seeds",
                "desc": "string[]"
              },
              {
                "name": "scsc",
                "desc": "IXyoSCSCDescription"
              }
            ],
            "enumerations": [],
            "functions": []
          }
        ]
      },
      {
        "desc": "archivist api package ",
        "name": "api-archivist-graphql",
        "objects": [
          {
            "name": "XyoAboutMeResolver",
            "properties": [],
            "enumerations": [],
            "functions": [
              {
                "name": "resolve",
                "parameters": [
                  {
                    "name": "obj",
                    "type": "any"
                  },
                  {
                    "name": "args",
                    "type": "any"
                  },
                  {
                    "name": "context",
                    "type": "any"
                  },
                  {
                    "name": "info",
                    "type": "GraphQLResolveInfo"
                  }
                ],
                "returns": [
                  {
                    "type": "this.aboutMeService.getAboutMe",
                    "desc": "aboutMeService"
                  }
                ]
              }
            ]
          },
          {
            "name": "XyoGetBlockByHashResolver",
            "properties": [],
            "enumerations": [],
            "functions": [
              {
                "name": "resolve",
                "async": "true",
                "parameters": [
                  {
                    "name": "obj",
                    "type": "any"
                  },
                  {
                    "name": "args",
                    "type": "any"
                  },
                  {
                    "name": "context",
                    "type": "any"
                  },
                  {
                    "name": "info",
                    "type": "GraphQLResolveInfo"
                  }
                ],
                "returns": [
                  {
                    "type": "humanReadableValue",
                    "desc": "humanReadable"
                  },
                  {
                    "type": "serializeHex",
                    "desc": "bytes"
                  },
                  {
                    "type": "signatures.map",
                    "desc": "sigSet"
                  },
                  {
                    "type": "heuristics",
                    "desc": "heuristicSet"
                  },
                  {
                    "type": "this.hashProvider.createHash",
                    "desc": "signedHash"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "desc": "archivist app package ",
        "name": "app-archivist",
        "objects": []
      },
      {
        "desc": "diviner app package",
        "name": "app-diviner",
        "objects": []
      },
      {
        "desc": "archivist network package",
        "name": "archivist-network",
        "objects": []
      },
      {
        "desc": "archivist storage package ",
        "name": "archivist-repository",
        "objects": []
      },
      {
        "desc": "base node package",
        "name": "base-node",
        "objects": []
      },
      {
        "desc": "base package",
        "name": "base",
        "objects": []
      },
      {
        "desc": "bound witness package",
        "name": "bound-witness",
        "objects": []
      },
      {
        "desc": "buffer utils package",
        "name": "buffer-utils",
        "objects": []
      },
      {
        "desc": "data generator package",
        "name": "data-generator",
        "objects": []
      },
      {
        "desc": "archivist and diviner client package",
        "name": "diviner-archivist-client",
        "objects": []
      },
      {
        "desc": "diviner graphql api package",
        "name": "diviner-graphql-api",
        "objects": []
      },
      {
        "desc": "graphql server package",
        "name": "graphql-server",
        "objects": []
      },
      {
        "desc": "hashing package ",
        "name": "hashing",
        "objects": []
      },
      {
        "desc": "common hueristics package",
        "name": "hueristics-common",
        "objects": []
      },
      {
        "desc": "heuristics package",
        "name": "heuristics",
        "objects": []
      },
      {
        "desc": "ip service package",
        "name": "ip-service",
        "objects": []
      },
      {
        "desc": "ipfs client package",
        "name": "ipfs-client",
        "objects": []
      },
      {
        "desc": "logger package",
        "name": "logger",
        "objects": []
      },
      {
        "desc": "meta list package",
        "name": "meta-list",
        "objects": []
      },
      {
        "desc": "network package",
        "name": "network",
        "objects": []
      },
      {
        "desc": "node network package",
        "name": "node-network",
        "objects": []
      },
      {
        "desc": "node runner package",
        "name": "node-runner",
        "objects": []
      },
      {
        "desc": "origin block storage package",
        "name": "origin-block-repository",
        "objects": []
      },
      {
        "desc": "origin chain package",
        "name": "origin-chain",
        "objects": []
      },
      {
        "desc": "p2p package",
        "name": "p2p",
        "objects": []
      },
      {
        "desc": "peer connection package",
        "name": "peer-connections",
        "objects": []
      },
      {
        "desc": "peer discovery package ",
        "name": "peer-discovery",
        "objects": []
      },
      {
        "desc": "peer interaction handler package",
        "name": "peer-interaction-handlers",
        "objects": []
      },
      {
        "desc": "peer interaction router package",
        "name": "peer-interaction-router",
        "objects": []
      },
      {
        "desc": "peer interaction package",
        "name": "peer-interaction",
        "objects": []
      },
      {
        "desc": "question package ",
        "name": "questions",
        "objects": []
      },
      {
        "desc": "scsc package",
        "name": "scsc",
        "objects": []
      },
      {
        "desc": "schema serialization package",
        "name": "serialization-schema",
        "objects": []
      },
      {
        "desc": "serialization package",
        "name": "serialization",
        "objects": []
      },
      {
        "desc": "serializer package",
        "name": "serializer",
        "objects": []
      },
      {
        "desc": "signing package",
        "name": "signing",
        "objects": []
      },
      {
        "desc": "web3 question service package",
        "name": "web3-question-service",
        "objects": []
      },
      {
        "desc": "web3 service package",
        "name": "web3-service",
        "objects": []
      }
    ]
  }
]