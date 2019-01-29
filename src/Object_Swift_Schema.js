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
  ],
}]