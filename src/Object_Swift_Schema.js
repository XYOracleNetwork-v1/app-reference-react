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
          "desc": "creates a bound Witness ",
          "name": "XyoBoundWitness",
        },
        {
          "super": "XyoBoundWitness",
          "desc": "creates a ZigZag bound Witness ",
          "name": "XyoZigZagBoundWitness",
        }
      ]
    },
    {
      "desc": "hashing classes",
      "name": "hashing",
      "objects": [
        {
          "super": "",
          "desc": "creates a new XYO Hasher as an XYOObjectStructure ",
          "name": "XyoHasher",
        },
        {
          "super": "XyoHasher",
          "desc": "creates a sha256 from an XYO HAsher ",
          "name": "XyoSha256",
        }
      ]
    },
    {
      "desc": "heuristic classes",
      "name": "heuristics",
      "objects": [
        {
          "super": "",
          "desc": "creates an Xyo Heuristic Getter as an XyoObjectStructure",
          "name": "XyoHeuristicGetter",
        },
        {
          "super": "XyoObjectStructure",
          "desc": "sets unix time for a heuristic",
          "name": "XyoUnixTime",
        }
      ]
    },
    {
      "desc": "network classes",
      "name": "network",
      "objects": [
        {
          "super": "XyoProcedureCatalogue",
          "desc": "creates an Xyo Heuristic Getter as an XyoObjectStructure",
          "name": "XyoFlagProcedureCatalogue",
        },
        {
          "super": "XyoObjectStructure",
          "desc": "protocol for peer networking",
          "name": "XyoNetworkPeer",
        },
        {
          "super": "",
          "desc": "protocol for piping in XYO",
          "name": "XyoNetworkPipe",
        },
        {
          "super": "",
          "desc": "protocol for an XYO Procedure Catalogue",
          "name": "XyoProcedureCatalogue",
        },
      ]
    },
    {
      "desc": "node classes",
      "name": "node",      
      "objects": [
        {
          "super": "",
          "desc": "a struct for an Xyo Bound Witness Heuristic pair",
          "name": "XyoBoundWitnessHueresticPair",
        },
        {
          "super": "",
          "desc": "protocol for bound witness option",
          "name": "XyoBoundWitnessOption",
        },
        {
          "super": "",
          "desc": "a queue for an XYO bridge",
          "name": "XyoBridgeQueue",
        },
        {
          "super": "",
          "desc": "item to be placed into an XYOBridgeQueue",
          "name": "XyoBridgeQueueItem",
        },
        {
          "super": "XyoBoundWitnessOption",
          "desc": "using the bound witness option protocol, initiates XYO bridging options",
          "name": "XyoBridgingOption",
        },
        {
          "super": "",
          "desc": "starts listening for bound witness",
          "name": "XyoNodeListener",
        },
        {
          "super": "", 
          "desc": "creates an XYO Origin Chain",
          "name": "XyoOriginChainCreator",
        },
        {
          "super": "XyoOriginChainCreator, XyoNodeListener",
          "desc": "a relay node for bound witness information which will listen and create an origin chain",
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
          "desc": "a util for bound witnesses in the origin chain",
          "name": "XyoOriginBoundWitnessUtil",
        },
        {
          "super": "",
          "desc": "the state of the origin chain",
          "name": "XyoOriginChainState",
        },
      ]      
    },
    {
      "desc": "persist storage classes",
      "name": "persist",
      "objects": [
        {
          "super": "XyoStorageProvider",
          "desc": "XYO in memory storage",
          "name": "XyoInMemoryStorage",
        },
        {
          "super": "",
          "desc": "protocol for origin block storage",
          "name": "XyoOriginBlockRepository",
        },
        {
          "super": "",
          "desc": "struct with flags for bound witnesses and origin chain",
          "name": "XyoProcedureCatalogueFlags",
        },
        {
          "super": "",
          "desc": "xyo storage provider with CRUD functionality",
          "name": "XyoStorageProvider",
        },
        {
          "super": "XyoOriginBlockRepository",
          "desc": "implements origin block storage protocol for XYO origin block storage",
          "name": "XyoStrageProviderOriginBlockRepository",
        },
      ]      
    },
  ],
}]