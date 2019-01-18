module.exports = [
  {
    "id": "rec03N8A5LRuyM8cz",
    "fields": {
      "functionName": "addIndexer",
      "superClass": "XyoIndexableOriginBlockRepository",
      "arguments": "indexer, key",
      "visibility": "public",
      "description": "adds an indexer to the indexers array ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T21:24:14.000Z"
  },
  {
    "id": "rec0I6xSEh8xju6dE",
    "fields": {
      "functionName": "XyoFromSelf",
      "visibility": "public",
      "overrideFunctions": "getInstance",
      "compainionObjectTo": "XyoBoundWitness",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T18:45:33.000Z"
  },
  {
    "id": "rec0aNzfkkHBmPEb2",
    "fields": {
      "functionName": "removeListener",
      "superClass": "XyoNodeBase",
      "arguments": "key",
      "visibility": "public",
      "description": "Removes a listener from the current listener pool",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T23:49:44.000Z"
  },
  {
    "id": "rec0nYSBbEkjyfB0d",
    "fields": {
      "functionName": "getChoice ",
      "superClass": "XyoNodeBase",
      "arguments": "strict, catalog",
      "output": "Returns the choice to preform in the bound witness",
      "visibility": "public",
      "description": "Gets the choice of a catalog from another party ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T23:49:56.000Z"
  },
  {
    "id": "rec1gjCS2ib304awa",
    "fields": {
      "functionName": "XyoCurrentState",
      "visibility": "public",
      "description": "A class that queries the current state of a block in XYO",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T22:10:33.000Z"
  },
  {
    "id": "rec2IFLp5TbKF1m1B",
    "fields": {
      "functionName": "getAllKeys",
      "superClass": "XyoWeakReferenceCaching",
      "visibility": "public",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T23:04:39.000Z"
  },
  {
    "id": "rec2RB5mYkpSaGdKA",
    "fields": {
      "functionName": "XyoInMemoryStorageProvider",
      "visibility": "public",
      "overrideFunctions": "containsKey, delete, getAllKeys, read, write",
      "description": "A simple in-memory storage implementation of the XyoStorageProviderInterface",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T22:27:37.000Z"
  },
  {
    "id": "rec2kExYs2DvXdbwI",
    "fields": {
      "functionName": "updateOriginState",
      "superClass": "XyoNodeBase",
      "arguments": "boundWitness",
      "visibility": "private",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T00:42:17.000Z"
  },
  {
    "id": "rec32lAkhdAryw41g",
    "fields": {
      "functionName": "XyoBridgeQueueItem",
      "superClass": "XyoBridgeQueue",
      "arguments": "weight, boundWitnessHash",
      "visibility": "public",
      "compainionObjectTo": "XyoBridgeQueue",
      "description": "a class to create a comparable queue item. With hash and weight",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T23:22:44.000Z"
  },
  {
    "id": "rec3BFHMhz9yuJp58",
    "fields": {
      "functionName": "getAllBlocks ",
      "superClass": "XyoBridgeQueue",
      "output": "Returns an array of origin block hashes",
      "visibility": "public",
      "description": "Get all the block hashes in the origin block queue.",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T23:18:53.000Z"
  },
  {
    "id": "rec3RgLQXOtRejbHt",
    "fields": {
      "functionName": "XyoLogger ",
      "visibility": "public",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T21:47:08.000Z"
  },
  {
    "id": "rec3cyBiTinbQiuvz",
    "fields": {
      "functionName": "getTemporaryPeerId",
      "superClass": "XyoNetworkPeer",
      "output": "Returns the peer ID",
      "visibility": "public",
      "description": "Gets an ID for the peer so for reference ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T22:08:03.000Z"
  },
  {
    "id": "rec4CCrkpxTteS5gK",
    "fields": {
      "functionName": "verifySign",
      "superClass": "XyoSignerProvider",
      "arguments": "publicKey, byteArray, signature",
      "output": "Returns a deferred Boolean that is true if the signature is valid, and false if invalid. ",
      "visibility": "public",
      "description": "Cryptographically verify a signature given data, a signature, and a public key that the XyoSigner supports. ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T21:34:36.000Z"
  },
  {
    "id": "rec4INRqstsv4hS8n",
    "fields": {
      "functionName": "addIncomingKeys",
      "superClass": "XyoZigZagBoundWitness",
      "arguments": "incomingKeySets",
      "visibility": "private",
      "Branch": [
        "Master",
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T00:37:27.000Z"
  },
  {
    "id": "rec4L87x8Kd1w0Mzu",
    "fields": {
      "functionName": "XyoOptionPayload",
      "arguments": "signedOptions, unsignedOptions",
      "visibility": "private",
      "description": "A private class to bring in signed and unsigned bound witness options",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T00:02:38.000Z"
  },
  {
    "id": "rec4tKIeomVZlnVyA",
    "fields": {
      "functionName": "unpackFromArrays",
      "superClass": "XyoObjectProvider",
      "arguments": "signatures, payloads, keysets",
      "visibility": "private",
      "Branch": [
        "Master"
      ]
    },
    "createdTime": "2019-01-08T23:54:51.000Z"
  },
  {
    "id": "rec4xU0Ufd3s4V4Fv",
    "fields": {
      "functionName": "XyoBoundWitnessOption",
      "visibility": "public",
      "description": "A base class for bound witness options. ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T22:25:39.000Z"
  },
  {
    "id": "rec5Bo9EUH9lB9xzf",
    "fields": {
      "functionName": "getEncodedCanDo",
      "superClass": "XyoNetworkProcedureCatalogueInterface",
      "output": "Returns a ByteArray of what the device can do according to its protocol",
      "visibility": "public",
      "description": "What the device can do ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T22:14:33.000Z"
  },
  {
    "id": "rec5nyDz5GJi5pJg6",
    "fields": {
      "functionName": "XyoSaveState",
      "arguments": "storageProvider",
      "visibility": "public",
      "description": "class that manages save state for keys and hashes",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T22:45:42.000Z"
  },
  {
    "id": "rec61U12kqpdD7GfY",
    "fields": {
      "functionName": "encodeTransfer",
      "superClass": "XyoZigZagBoundWitness",
      "arguments": "itemsToTransfer",
      "visibility": "private",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T19:24:58.000Z"
  },
  {
    "id": "rec642uSU4GDAk8wM",
    "fields": {
      "functionName": "XyoBoundWitnessUtil",
      "superClass": "XyoBoundWitnessUtil",
      "visibility": "public",
      "description": "A Helper object to preform operations on bound witnesses. Will most likely replace certain helpers in XyoBoundWitness",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T18:48:22.000Z"
  },
  {
    "id": "rec6J9QGma8pGE7kB",
    "fields": {
      "functionName": "getChoice",
      "superClass": "XyoRelayNode",
      "arguments": "strict, catalog",
      "output": "returns the bound witnesses from the XyoProcedureCatalog",
      "visibility": "public",
      "description": "Gets the choice of a catalog from another party ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T00:56:30.000Z"
  },
  {
    "id": "rec6dT96Qx0YvvrNA",
    "fields": {
      "functionName": "getRole",
      "superClass": "XyoNetworkPeer",
      "output": "Returns the current role that the peer is preforming ",
      "visibility": "public",
      "description": "Gets the current role the peer is preforming ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T22:07:13.000Z"
  },
  {
    "id": "rec6f8oZXQf6QNMq8",
    "fields": {
      "functionName": "read",
      "superClass": "XyoInMemoryStorageProvider",
      "arguments": "key",
      "visibility": "public",
      "description": "Views the hashMap by a given key",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T22:34:42.000Z"
  },
  {
    "id": "rec7GfEgoqu6x9ZwU",
    "fields": {
      "functionName": "getToRemove",
      "superClass": "XyoBridgeQueue",
      "visibility": "public",
      "description": "Get the blocks that have exceeded the removeWeight and are out of the queue.",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T22:40:17.000Z"
  },
  {
    "id": "rec7eh9LfU83TApsG",
    "fields": {
      "functionName": "XyoUnixTimeGetter",
      "visibility": "public",
      "overrideFunctions": "getHeuristic",
      "description": "A class that gets a Unix Timestamp for a heuristic ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T00:59:44.000Z"
  },
  {
    "id": "rec7o5LrAhlu2Ss9Q",
    "fields": {
      "functionName": "XyoNetworkPipe",
      "visibility": "public",
      "description": "A network abstraction to communicate with another peer",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T22:08:52.000Z"
  },
  {
    "id": "rec7tNX9ZSLLAiZFW",
    "fields": {
      "functionName": "logError",
      "superClass": "XyoLogger ",
      "arguments": "exception, tag, info",
      "visibility": "public",
      "description": "Logs an error",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T22:03:25.000Z"
  },
  {
    "id": "rec83kdLIfjFbFAmW",
    "fields": {
      "functionName": "makeBoundWitness",
      "superClass": "XyoBoundWitness",
      "output": "returns a ByteArray of newly created bound witnesses",
      "visibility": "private",
      "Branch": [
        "Master"
      ]
    },
    "createdTime": "2019-01-08T22:53:43.000Z"
  },
  {
    "id": "rec96R2YfKQf04mr6",
    "fields": {
      "functionName": "getUnsignedPayload",
      "superClass": "XyoBoundWitnessOption",
      "output": "Returns the optional unsigned data. ",
      "visibility": "public",
      "description": "Gets the unsigned payload to include in the bound witness ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T22:28:21.000Z"
  },
  {
    "id": "rec9Qz8ue4RTKB957",
    "fields": {
      "functionName": "removeHeuristic",
      "superClass": "XyoNodeBase",
      "arguments": "key",
      "visibility": "public",
      "description": "Removes a heuristic from the current heuristic pool. ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T23:55:01.000Z"
  },
  {
    "id": "rec9hxA8ZZXUgTRxQ",
    "fields": {
      "functionName": "getNumberOfParties",
      "superClass": "XyoObjectProvider, XyoFromSelf",
      "arguments": "boundWitness",
      "output": "returns the number of parties in a bound witness, if null, there is a inconsistent amount of parties",
      "visibility": "public",
      "description": "Will get the number of parties in a bound witness",
      "Branch": [
        "Master",
        "Develop"
      ]
    },
    "createdTime": "2019-01-08T23:59:31.000Z"
  },
  {
    "id": "rec9oxJbHeoM4Mhuh",
    "fields": {
      "functionName": "loop",
      "superClass": "XyoRelayNode",
      "visibility": "private",
      "description": "loop thread to standby for doConnection",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T00:58:57.000Z"
  },
  {
    "id": "recATgB5b1gORgScM",
    "fields": {
      "functionName": "getNumberOfSignaturesFromTransfer",
      "superClass": "XyoZigZagBoundWitness",
      "arguments": "transfer",
      "visibility": "private",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T19:28:25.000Z"
  },
  {
    "id": "recAUQ5jZbYgLZuH0",
    "fields": {
      "functionName": "doAes",
      "superClass": "XyoAES",
      "arguments": "iV, password, value, mode ",
      "output": "returns a cipher instance with the given value. ",
      "visibility": "public",
      "description": "Prepares a node for encryption or decryption. Inits a cipher ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T20:25:29.000Z"
  },
  {
    "id": "recAaCINSjYhZKcoh",
    "fields": {
      "functionName": "setQueue",
      "superClass": "XyoBridgeQueue",
      "arguments": "weights, blocks",
      "visibility": "public",
      "description": "Sets the queue for blocks to be added ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T22:41:22.000Z"
  },
  {
    "id": "recAmvJ1Dqx1jw9sb",
    "fields": {
      "functionName": "enable ",
      "superClass": "XyoSignerProvider",
      "visibility": "public",
      "description": "Adds the signer provider to the mapping. ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T21:38:34.000Z"
  },
  {
    "id": "recAqWtBH2LYPymGn",
    "fields": {
      "functionName": "verify",
      "superClass": "XyoBoundWitnessVerify",
      "arguments": "boundWitness",
      "output": "asynchronous function that verifies a bound witness, returns the bound witness if successful checks of numberOfParties, dataSignedOn, publicKeys, and signatures. If verification fails, returns null",
      "visibility": "public",
      "description": "Verifies a single bound witness.",
      "Branch": [
        "Master",
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T00:15:24.000Z"
  },
  {
    "id": "recAxm0s7xnWzKSCq",
    "fields": {
      "functionName": "getBoundWitnessOptionPayloads",
      "superClass": "XyoNodeBase",
      "arguments": "options",
      "output": "Asynchronously returns an XyoOptionPayload with unsigned and signed typed arrays.",
      "visibility": "private",
      "description": "A private function that builds signed and unsigned payloads to the XyoOptionPayload",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T00:04:46.000Z"
  },
  {
    "id": "recBAGoqf5NaKpS7w",
    "fields": {
      "functionName": "signForSelf",
      "superClass": "XyoZigZagBoundWitness",
      "arguments": "payload",
      "output": "adds signature from boundWitness signature array",
      "visibility": "private",
      "Branch": [
        "Master",
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T18:15:15.000Z"
  },
  {
    "id": "recBIaAcxbr8Ei3W6",
    "fields": {
      "functionName": "removeIndex",
      "superClass": "XyoOriginBlockIndexerInterface",
      "arguments": "blockKey",
      "visibility": "public",
      "description": "removes an index ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T21:35:02.000Z"
  },
  {
    "id": "recBM2ppT3hLFzep7",
    "fields": {
      "functionName": "XyoOriginChainStateManager",
      "visibility": "public",
      "overrideFunctions": "addSigner, getSigners, removeOldestSigner, newOriginBlock",
      "description": "A class that is an implementation of the XyoOriginStateRepository, the functions are used in the repository class as needed. ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T21:43:05.000Z"
  },
  {
    "id": "recBh2BLhunMMUFJN",
    "fields": {
      "functionName": "onCompleted",
      "superClass": "XyoBoundWitnessOption",
      "arguments": "boundWitness",
      "visibility": "public",
      "description": "Called after the current bound witness has been completed. If the bound witness is null, there was an error creating the bound witness. ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T22:29:12.000Z"
  },
  {
    "id": "recBmXcFbvWlrPM5M",
    "fields": {
      "functionName": "addSigner",
      "superClass": "XyoOriginStateRepository",
      "arguments": "signer",
      "visibility": "public",
      "description": "Adds a signer to the queue to be used in the origin chain",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T21:56:12.000Z"
  },
  {
    "id": "recC0OTHPHGdLrYeB",
    "fields": {
      "functionName": "logInfo",
      "superClass": "XyoLogger ",
      "arguments": "tag, info",
      "visibility": "public",
      "description": "Logs any info\n",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T22:02:55.000Z"
  },
  {
    "id": "recCRFfTRXA1caTOH",
    "fields": {
      "functionName": "containsOriginBlock",
      "superClass": "XyoStorageOriginBlockRepository",
      "arguments": "originBlockHash",
      "visibility": "public",
      "description": "Checks to see if the origin block is in storage",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T22:00:19.000Z"
  },
  {
    "id": "recCSo7tnNZd5nJjU",
    "fields": {
      "functionName": "onBoundWitnessEndSuccess",
      "superClass": "XyoNodeListener",
      "arguments": "boundWitness",
      "visibility": "public",
      "description": "function will be called every time a bound witness is completed successfully",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T00:51:21.000Z"
  },
  {
    "id": "recDFMbSnPjZTP6Fz",
    "fields": {
      "functionName": "getSigners",
      "superClass": "XyoSaveState",
      "visibility": "public",
      "description": "gets signers",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T22:51:11.000Z"
  },
  {
    "id": "recDlDF5U1IPHtN4e",
    "fields": {
      "functionName": "getBridgedBlocks",
      "superClass": "XyoBoundWitnessUtil",
      "arguments": "boundWitness",
      "output": "returns bridged blocks from the bound witness, will not return any if none are found.",
      "visibility": "public",
      "description": "Gets the bridged blocks from a bound witness",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T19:09:58.000Z"
  },
  {
    "id": "recDlj24aEPYs7WX2",
    "fields": {
      "functionName": "XyoWeakReferenceCaching",
      "visibility": "public",
      "description": "An XyoStorageProviderInterface that uses weak references to add a caching layer.",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T23:01:54.000Z"
  },
  {
    "id": "recDtLSLkkigLMluN",
    "fields": {
      "functionName": "createIndex",
      "superClass": "XyoOriginBlockIndexerInterface",
      "arguments": "block, blockKey",
      "visibility": "public",
      "description": "creates an index for use with the indexable origin block repository",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T21:33:15.000Z"
  },
  {
    "id": "recEjhmofJyIXbvuU",
    "fields": {
      "functionName": "incomingData",
      "superClass": "XyoZigZagBoundWitness",
      "arguments": "endPoint, transfer",
      "output": "Returns a XyoBoundWitnessTransfer to send to the other party",
      "visibility": "public",
      "description": "Adds data to the bound witness and returns what the party should send back",
      "Branch": [
        "Master"
      ]
    },
    "createdTime": "2019-01-09T00:27:51.000Z"
  },
  {
    "id": "recEpbOwKXmEolmEi",
    "fields": {
      "functionName": "XyoOriginBlockIndexerInterface",
      "superClass": "XyoIndexableOriginBlockRepository",
      "compainionObjectTo": "XyoIndexableOriginBlockRepository",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T21:31:41.000Z"
  },
  {
    "id": "recF5htGyZx9bYvXN",
    "fields": {
      "functionName": "removeTypeFromUnsignedPayload",
      "superClass": "XyoBoundWitnessUtil",
      "arguments": "boundWitness, type",
      "output": "Returns a bound witness without the type specified ",
      "visibility": "public",
      "description": "Removes a type from the bound witness and returns a new bound witness object without the type.",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T18:51:20.000Z"
  },
  {
    "id": "recFTa2X4vk3gIRPk",
    "fields": {
      "functionName": "getSigners ",
      "superClass": "XyoCurrentState",
      "visibility": "public",
      "description": "Gets all of the signers to use when creating the next origin block",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T22:12:02.000Z"
  },
  {
    "id": "recFWS2vsGjmO5QBR",
    "fields": {
      "functionName": "XyoObjectProvider",
      "superClass": "XyoType",
      "output": "creates an XYO object from a ByteArray and stores info.",
      "visibility": "public",
      "overrideFunctions": "readSize, createFromPacked",
      "compainionObjectTo": "XyoBoundWitness, XyoBoundWitnessTransfer",
      "Branch": [
        "Master"
      ]
    },
    "createdTime": "2019-01-08T23:19:38.000Z"
  },
  {
    "id": "recFlezhXG5PisAXm",
    "fields": {
      "functionName": "createWitness",
      "superClass": "XyoBoundWitness",
      "arguments": "signatures, payload",
      "output": "Returns a newly created witness. ",
      "visibility": "protected",
      "description": "Creates a witness with given payload and signatures. ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T18:36:40.000Z"
  },
  {
    "id": "recGgL9s830SDdv0s",
    "fields": {
      "functionName": "removeOldestSigner",
      "superClass": "XyoOriginChainStateManager",
      "visibility": "public",
      "description": "removes an old or stale signer ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T21:47:29.000Z"
  },
  {
    "id": "recGrS8dQF8AH4aLW",
    "fields": {
      "functionName": "makeWithJustSignatures",
      "superClass": "XyoBoundWitnessTransfer",
      "output": "makes with just signatures",
      "visibility": "private",
      "Branch": [
        "Master"
      ]
    },
    "createdTime": "2019-01-09T00:06:25.000Z"
  },
  {
    "id": "recGzlSq5iYUzO9wv",
    "fields": {
      "functionName": "XyoGetOriginBlocksByPublicKey",
      "visibility": "public",
      "description": "Interface that can get a group of origin blocks that belong to a given party by public key",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T22:17:58.000Z"
  },
  {
    "id": "recH2K7kzZ0yRe0Iq",
    "fields": {
      "functionName": "read",
      "superClass": "XyoStorageProviderInterface",
      "arguments": "key",
      "output": "returns a deferred array that contains the value of the key",
      "visibility": "public",
      "description": "Read from storage",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T22:56:30.000Z"
  },
  {
    "id": "recH7QgXCKVy6fZme",
    "fields": {
      "functionName": "readBuffFromKey",
      "superClass": "XyoSaveState",
      "arguments": "key",
      "visibility": "private",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T22:53:43.000Z"
  },
  {
    "id": "recHFy6c8PeVkrEUp",
    "fields": {
      "functionName": "sendAndReceive",
      "superClass": "XyoZigZagBoundWitnessSession",
      "arguments": "transfer, didHaveData",
      "output": "Returns a new XyoIterableObject with data updated. ",
      "visibility": "private",
      "description": "Asynchronously checks for data for sending and receiving",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T19:38:56.000Z"
  },
  {
    "id": "recHbmW2yOTqBhnMx",
    "fields": {
      "functionName": "onBoundWitnessStart",
      "superClass": "XyoNodeBase",
      "visibility": "private",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T00:22:10.000Z"
  },
  {
    "id": "recIJrkiz5ke0vDmc",
    "fields": {
      "functionName": "getUnsignedPayload",
      "superClass": "XyoBridgingOption",
      "output": "returns unsigned origin blocks to send to the bridge queue to get compatible keys (?)",
      "visibility": "public",
      "description": "Asynchronously retrieves origin blocks to send ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T23:38:42.000Z"
  },
  {
    "id": "recIUMZT2q8qUyClZ",
    "fields": {
      "functionName": "signData",
      "superClass": "XyoSigner",
      "arguments": "byteArray",
      "output": "returns a deferred cryptographic signature of the data field that was created with the private key in the form of a XyoObject.",
      "visibility": "public",
      "description": "Cryptographically signs a given byteArray so that it can be verified with verify()",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T21:26:03.000Z"
  },
  {
    "id": "recIUr2edVfU7TEfM",
    "fields": {
      "functionName": "getSigners",
      "superClass": "XyoOriginChainStateManager",
      "output": "returns a typed array with the received current signers",
      "visibility": "public",
      "description": "gets current signers ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T21:45:36.000Z"
  },
  {
    "id": "recIg9FBRYVCSHtZD",
    "fields": {
      "functionName": "makeSignatures",
      "superClass": "XyoBoundWitness",
      "output": "returns an array of signatures",
      "visibility": "private",
      "Branch": [
        "Master"
      ]
    },
    "createdTime": "2019-01-08T22:56:50.000Z"
  },
  {
    "id": "recIn7TYT7zMW7XOS",
    "fields": {
      "functionName": "readFromKey",
      "superClass": "XyoSaveState",
      "arguments": "key",
      "visibility": "private",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T22:51:36.000Z"
  },
  {
    "id": "recJGPC2HRUv1pKGc",
    "fields": {
      "functionName": "getOriginBlockByBlockHash",
      "superClass": "XyoGetOriginBlockByHash",
      "arguments": "originBlockHash",
      "output": "Returns a deferred XyoPartyOriginBlock and its previous hash. ",
      "visibility": "public",
      "description": "Gets an origin block by its previous hash field.",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T22:15:02.000Z"
  },
  {
    "id": "recJP6pKH8tiwExaT",
    "fields": {
      "functionName": "getPartyNumberFromPublicKey",
      "superClass": "XyoBoundWitnessUtil",
      "arguments": "publicKey, boundWitness",
      "output": "Returns the index of the party, if no corresponding public key is found, will return null. ",
      "visibility": "public",
      "description": "Gets the index of the part of the bound witness (what index is their fetter)",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T18:52:36.000Z"
  },
  {
    "id": "recJTBGX8vpPTw2bi",
    "fields": {
      "functionName": "XyoNetworkProviderInterface",
      "visibility": "public",
      "description": "A network provider that allows components to talk to other parties",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T22:15:36.000Z"
  },
  {
    "id": "recJV3Lfzjk9jK8fn",
    "fields": {
      "functionName": "removeOriginBlock",
      "superClass": "XyoOriginBlockRepository",
      "arguments": "originBlockHash",
      "output": "Returns a deferred XyoError, if the error is null, the operation was successful. ",
      "visibility": "public",
      "description": "Removes an origin block from the navigator and from storage. ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T21:38:11.000Z"
  },
  {
    "id": "recJXrJjuUaj4PBDD",
    "fields": {
      "functionName": "notifyOptions",
      "superClass": "XyoNodeBase",
      "arguments": "boundWitness, options",
      "visibility": "private",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T00:43:42.000Z"
  },
  {
    "id": "recJaBqCnf5sK0r6L",
    "fields": {
      "functionName": "removeOldestSigner",
      "superClass": "XyoOriginStateRepository",
      "visibility": "public",
      "description": "Removes the oldest signer so that a party can rotate keys when creating an origin chain",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T21:55:17.000Z"
  },
  {
    "id": "recKODN9zVKi7Sti8",
    "fields": {
      "functionName": "getAllWeights",
      "superClass": "XyoBridgeQueue",
      "output": "Returns an array of the weights. \n",
      "visibility": "public",
      "description": "Get all of the weights in the queue. Aligns with getAllBlocks().",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T23:20:19.000Z"
  },
  {
    "id": "recKPZR2N0LQT9NBm",
    "fields": {
      "functionName": "XyoBridgeQueue",
      "visibility": "public",
      "description": "A class to manage outgoing origin blocks for bridges and sentinels",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T22:31:34.000Z"
  },
  {
    "id": "recKaqMCfSB8p0CNP",
    "fields": {
      "functionName": "createFetter",
      "superClass": "XyoBoundWitness",
      "arguments": "signatures, payload",
      "output": " Returns a newly created fetter.",
      "visibility": "protected",
      "description": "Creates a fetter with a given payload and public keys.",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T18:34:14.000Z"
  },
  {
    "id": "recKp89VDzpn5P7Vn",
    "fields": {
      "functionName": "getOriginBlockByBlockHash",
      "superClass": "XyoStorageOriginBlockRepository",
      "arguments": "originBlockHash",
      "output": "Returns the origin block as an instance of a bound witness",
      "visibility": "public",
      "description": "gets an origin block by its hash",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T22:05:54.000Z"
  },
  {
    "id": "recL2lSiotZL9pCYi",
    "fields": {
      "functionName": "containsOriginBlock",
      "superClass": "XyoOriginBlockRepository",
      "arguments": "originBlockHash",
      "output": "Returns a deffered Boolean",
      "visibility": "public",
      "description": "Checks if an origin block exists in storage.",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T21:39:47.000Z"
  },
  {
    "id": "recLCltym38Twv8Gp",
    "fields": {
      "functionName": "XyoBridgingOption",
      "arguments": "bridgeQueue, originBlocks",
      "visibility": "public",
      "overrideFunctions": "getSignedPayload, getUnsignedPayload, onCompleted",
      "description": "A bound witness option which depends on the XyoProcedureCatalog.GIVE_ORIGIN_CHAIN flag setting. If the flag is set, will call the bridge queue to get the latest bridge blocks.",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T23:32:30.000Z"
  },
  {
    "id": "recM2Oq3rmOJqcZWj",
    "fields": {
      "functionName": "XyoIndexableOriginBlockRepository",
      "arguments": "hashingProviderInterface, storageProviderInterface",
      "visibility": "public",
      "overrideFunctions": "addBoundWitness, removeOriginBlock",
      "description": "An open class for a repository for origin blocks which is indexable.",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T21:22:19.000Z"
  },
  {
    "id": "recMNoQ3L75jNhlWl",
    "fields": {
      "functionName": "saveSigners",
      "superClass": "XyoSaveState",
      "arguments": "privateKeys",
      "visibility": "public",
      "description": "saves signers",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T22:48:22.000Z"
  },
  {
    "id": "recMc4CG8rR1EU034",
    "fields": {
      "functionName": "addTransfer",
      "superClass": "XyoZigZagBoundWitness",
      "arguments": "transfer",
      "visibility": "private",
      "Branch": [
        "Master"
      ]
    },
    "createdTime": "2019-01-09T00:36:32.000Z"
  },
  {
    "id": "recNHiw7GSmTBDnEp",
    "fields": {
      "functionName": "newInstance",
      "superClass": "XyoSignerProvider",
      "visibility": "public",
      "description": "Provides a new instance of a XyoSigner for the given algorithm and generates a keypair. ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T21:31:44.000Z"
  },
  {
    "id": "recNQbyGLb7OaKlTi",
    "fields": {
      "functionName": "getWeights ",
      "superClass": "XyoSaveQueue",
      "visibility": "public",
      "description": "gets weights from the queue",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T22:45:06.000Z"
  },
  {
    "id": "recNarWX0FoPrGgCE",
    "fields": {
      "functionName": "XyoBoundWitnessVerify",
      "superClass": "XyoBoundWitnessVerify",
      "arguments": "allowUnknown ",
      "visibility": "public",
      "description": "Verifies a bound witness",
      "Branch": [
        "Master",
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T00:09:48.000Z"
  },
  {
    "id": "recNpKrrYg23x28uY",
    "fields": {
      "functionName": "compareTo",
      "superClass": "XyoBridgeQueueItem",
      "arguments": "other",
      "output": "returns int comparison",
      "visibility": "public",
      "description": "compares bridge items ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T23:24:50.000Z"
  },
  {
    "id": "recNqKSiUaIEsfBmO",
    "fields": {
      "functionName": "XyoHeuristicGetter",
      "visibility": "public",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T23:44:32.000Z"
  },
  {
    "id": "recOGJZz1GXsKKtvf",
    "fields": {
      "functionName": "addBoundWitness",
      "superClass": "XyoOriginBlockRepository",
      "arguments": "originBlock",
      "visibility": "public",
      "description": "Adds a bound witness to the navigator and stores it, if the bound witness is not an origin block, it will return an error. ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T21:41:48.000Z"
  },
  {
    "id": "recOJ7QjjRlDjrhHL",
    "fields": {
      "functionName": "XyoEncrypter",
      "superClass": "XyoEncrypter",
      "visibility": "public",
      "description": "Interface that takes a encrypt and decrypt function. Is used in XyoAES",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T20:34:36.000Z"
  },
  {
    "id": "recOYoo4fw8oXSSvd",
    "fields": {
      "functionName": "XyoSignerProvider",
      "superClass": "XyoSignerProvider",
      "visibility": "public",
      "description": "Gives access to a XyoSigner that can preform public key cryptographic functions. Note: all functions in this class are abstract. ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-09T21:30:48.000Z"
  },
  {
    "id": "recP836AOlV1J5ORl",
    "fields": {
      "functionName": "getHash",
      "superClass": "XyoBoundWitness",
      "arguments": "hashCreator",
      "output": "asynchronously returns a deferred XyoHash\n",
      "visibility": "public",
      "description": "Gets the hash of a bound witness",
      "Branch": [
        "Master"
      ]
    },
    "createdTime": "2019-01-08T22:19:11.000Z"
  },
  {
    "id": "recPEM7H6Jidw9jfG",
    "fields": {
      "functionName": "getAllOriginBlockHashes",
      "superClass": "XyoStorageOriginBlockRepository",
      "visibility": "public",
      "description": "Gets all origin block hashes in storage",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T22:02:02.000Z"
  },
  {
    "id": "recPHzpKyswrRbb7O",
    "fields": {
      "functionName": "delete",
      "superClass": "XyoWeakReferenceCaching",
      "arguments": "key",
      "visibility": "public",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T23:04:19.000Z"
  },
  {
    "id": "recPbw1o8hurglvJk",
    "fields": {
      "functionName": "makePayloads",
      "superClass": "XyoBoundWitness",
      "output": "returns an array of XyoPayloads ",
      "visibility": "private",
      "Branch": [
        "Master"
      ]
    },
    "createdTime": "2019-01-08T22:56:18.000Z"
  },
  {
    "id": "recPwJpqtCSQGNHt8",
    "fields": {
      "functionName": "updateIndex",
      "superClass": "XyoStorageOriginBlockRepository",
      "arguments": "blockHash",
      "visibility": "private",
      "description": "updates the index of a given blockHash",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T22:07:48.000Z"
  },
  {
    "id": "recQFIIldw0dcv0vy",
    "fields": {
      "functionName": "delete",
      "superClass": "XyoInMemoryStorageProvider",
      "arguments": "key",
      "visibility": "public",
      "description": "removes a key",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T22:33:12.000Z"
  },
  {
    "id": "recQQR6YLFEt6aes2",
    "fields": {
      "functionName": "getAllKeys",
      "superClass": "XyoStorageProviderInterface",
      "output": "Returns a deferred array containing ByteArrays that are keys.",
      "visibility": "public",
      "description": "Provider returns all the corresponding keys for the values stored. ",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T22:57:16.000Z"
  },
  {
    "id": "recQUbweTojSAmG7d",
    "fields": {
      "functionName": "XyoStorageOriginBlockRepository",
      "arguments": "hashingObject, storageProvider",
      "visibility": "public",
      "overrideFunctions": "removeOriginBlock, containsOriginBlock, getAllOriginBlockHashes, addBoundWitness, getOriginBlockByBlockHash",
      "description": "This class is used as a bucket to store origin blocks, and fill links between them.",
      "Branch": [
        "Develop"
      ]
    },
    "createdTime": "2019-01-10T21:56:50.000Z"
  }
]