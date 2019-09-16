module.exports = [{
  "id": "sdk-ble-android",
  "name":"Android XYO BLE SDK",
  "locale":"EN",
  "platform":"Android",
  "lang":"Kotlin",
  "type":"SDK",
  "desc":"Generalized Bluetooth Library with additional support for XY and XYO devices",
  "modules": [
    {
      "desc": "BLE Advertisement classes",
      "name": "ads",
      "objects": [
        {
          "name": "XYBleAd",
          "super": "XYBase",
          "properties": [
            {
              "desc": "size for init, to get the buffer, and to get the data.",
              "name": "size",
              "type": "buffer"
            },              
            {
              "name": "type",
              "type": "Byte"
            },              
            {
              "name": "data",
              "type": "ByteArray"
            },              
          ],
          "enumerations": [
            {
              "name": "AdTypes",
              "values": [
                {
                  "name": "Flags",
                },
                {
                  "name": "Incomplete16BitServiceUuids",
                },
                {
                  "name": "Complete16BitServiceUuids",
                },
                {
                  "name": "Incomplete32BitServiceUuids",
                },
                {
                  "name": "Complete32BitServiceUuids",
                },
                {
                  "name": "Incomplete128BitServiceUuids",
                },
                {
                  "name": "Complete128BitServiceUuids",
                },
                {
                  "name": "ShortenedLocalName",
                },
                {
                  "name": "CompleteLocalName",
                },
                {
                  "name": "TxPowerLevel",
                },
                {
                  "name": "ClassOfDevice",
                },
                {
                  "name": "SimplePairingHashC",
                },
                {
                  "name": "SimplePairingHashC192",
                },
                {
                  "name": "SimpleParingRandomizerR",
                },
                {
                  "name": "SimpleParingRandomizerR192",
                },
                {
                  "name": "DeviceId",
                },
                {
                  "name": "SecurityManagerTkValue",
                },
                {
                  "name": "SecurityManagerOutOfBandFlags",
                },
                {
                  "name": "SlaveConnectionIntervalRange",
                },
                {
                  "name": "ListOf16BitServiceSolicitationUuids",
                },
                {
                  "name": "ListOf128BitServiceSolicitationUuids",
                },
                {
                  "name": "ServiceData",
                },
                {
                  "name": "ServiceData16BitUuid",
                },
                {
                  "name": "PublicTargetAddress",
                },
                {
                  "name": "RandomTargetAddress",
                },
                {
                  "name": "Appearance",
                },
                {
                  "name": "AdvertisingInterval",
                },
                {
                  "name": "LeBluetoothDeviceAddress",
                },
                {
                  "name": "LeRole",
                },
                {
                  "name": "SimpleParingHashC256",
                },
                {
                  "name": "SimpleParingRandomizerR256",
                },
                {
                  "name": "ListOf32BitServiceSolicitationUuids",
                },
                {
                  "name": "ServiceData32BitUuid",
                },
                {
                  "name": "ServiceData128BitUuid",
                },
                {
                  "name": "LeSecureConnectionsConfirmationValue",
                },
                {
                  "name": "LeSecureConnectionsRandomValue",
                },
                {
                  "name": "Uri",
                },
                {
                  "name": "IndoorPositioning",
                },
                {
                  "name": "TransportDiscoveryData",
                },
                {
                  "name": "LeSupportedFeatures",
                },
                {
                  "name": "ChannelMapUpdateIndication",
                },
                {
                  "name": "PbAdv",
                },
                {
                  "name": "MeshMessage",
                },
                {
                  "name": "MeshBeacon",
                },
                {
                  "name": "ThreeDInformationData",
                },
                {
                  "name": "ManufacturerSpecificData",
                },
              ]
            }
          ],
          "functions": [] 
        },
      ],
    },
    {
      "desc": "Bluetooth Implementations",
      "name": "bluetooth",
      "objects": [
        {
          "name": "BluetoothIntentReceiverListener",
          "functions": [
            {
              "name": "actionAclConnected",
              "desc": "Intent - make intent notes here",
              "parameters": [
                {
                  "name": "intent : ",
                  "type": "Intent?"
                },
              ]
            },                           
            {
              "name": "actionAclDisconnected",
              "parameters": [
                {
                  "name": "intent : ",
                  "type": "Intent?"
                },
              ]
            },                           
            {
              "name": "actionAclDisconnectRequested",
              "parameters": [
                {
                  "name": "intent : ",
                  "type": "Intent?"
                },
              ]
            },                           
            {
              "name": "actionBondStateChanged",
              "parameters": [
                {
                  "name": "intent : ",
                  "type": "Intent?"
                },
              ]
            },                           
            {
              "name": "actionClassChanged",
              "parameters": [
                {
                  "name": "intent : ",
                  "type": "Intent?"
                },
              ]
            },                           
            {
              "name": "actionFound",
              "parameters": [
                {
                  "name": "intent : ",
                  "type": "Intent?"
                },
              ]
            },                           
            {
              "name": "actionNameChanged",
              "parameters": [
                {
                  "name": "intent : ",
                  "type": "Intent?"
                },
              ]
            },                           
            {
              "name": "actionPairingRequest",
              "parameters": [
                {
                  "name": "intent : ",
                  "type": "Intent?"
                },
              ]
            },                           
            {
              "name": "actionUuid",
              "parameters": [
                {
                  "name": "intent : ",
                  "type": "Intent?"
                },
              ]
            },                           
            {
              "name": "extraBondState",
              "parameters": [
                {
                  "name": "intent : ",
                  "type": "Intent?"
                },
              ]
            },                           
            {
              "name": "extraClass",
              "parameters": [
                {
                  "name": "intent : ",
                  "type": "Intent?"
                },
              ]
            },                           
            {
              "name": "extraDevice",
              "parameters": [
                {
                  "name": "intent : ",
                  "type": "Intent?"
                },
              ]
            },                           
            {
              "name": "extraName",
              "parameters": [
                {
                  "name": "intent : ",
                  "type": "Intent?"
                },
              ]
            },                           
            {
              "name": "extraRssi",
              "parameters": [
                {
                  "name": "intent : ",
                  "type": "Intent?"
                },
              ]
            },                           
            {
              "name": "extraPairingKey",
              "parameters": [
                {
                  "name": "intent : ",
                  "type": "Intent?"
                },
              ]
            },                           
            {
              "name": "extraPairingVagrant",
              "parameters": [
                {
                  "name": "intent : ",
                  "type": "Intent?"
                },
              ]
            },                           
          ]
        }
      ]
    },
    {
      "desc": "Device Specific Client Implementations",
      "name": "devices",
      "objects": [
        {
          "name": "XY4BluetoothDevice",
          "super": "XYFinderBluetoothDevice",
          "properties": [
            {
              "name": "context",
              "type": "Context"
            },
            {
              "name": "scanResult",
              "type": "XYScanResult"
            },
            {
              "name": "hash",
              "type": "String"
            },
            {
              "name": "alertNotification",
              "type": "AlertNotificationService"
            },
            {
              "name": "batteryService",
              "type": "BatteryService"
            },
            {
              "name": "currentTimeService",
              "type": "CurrentTimeService"
            },
            {
              "name": "deviceInformationService",
              "type": "DeviceInformationService"
            },
            {
              "name": "genericAccessService",
              "type": "GenericAccessService"
            },
            {
              "name": "genericAttributeService",
              "type": "GenericAttributeService"
            },
            {
              "name": "linkLossService",
              "type": "LinkLossService"
            },
            {
              "name": "txPowerService",
              "type": "TxPowerService"
            },
            {
              "name": "primary",
              "type": "PrimaryService"
            },
            {
              "name": "spotaService",
              "type": "SpotaService"
            },
          ],
          "enumerations": [
            {
              "name": "StayAwake",
              "values": [
                {
                  "name": "Off"
                },
                {
                  "name": "On"
                },
              ],
            },
          ],
          "functions": [
            {
              "name": "find",
              "desc": "finds a connection to write a characteristic",
              "parameters": [],
              "returns": [
                {
                  "desc": "XYBluetoothResult"
                }
              ],
            },
            {
              "name": "stopFind",
              "desc": "stops the Primary service looking for a connection to write a characteristic",
              "parameters": [],
              "returns": [],
            },
            {
              "name": "lock",
              "parameters": [],
              "returns": [],
            },
            {
              "name": "unlock",
              "parameters": [],
              "returns": [],
            },
            {
              "name": "stayAwake",
              "parameters": [],
              "returns": [],
            },
            {
              "name": "fallAsleep",
              "parameters": [],
              "returns": [],
            },
            {
              "name": "batteryLevel",
              "parameters": [],
              "returns": [],
            },
            {
              "name": "onDetect",
              "parameters": [],
              "returns": [],
            },
            {
              "name": "updateFirmware",
              "parameters": [],
              "returns": [],
            },
            {
              "name": "cancelUpdateFirmware",
              "parameters": [],
              "returns": [],
            },
            {
              "name": "onConnectionStateChange",
              "parameters": [],
              "returns": [],
            },
            {
              "name": "reportButtonPressed",
              "parameters": [],
              "returns": [],
            },
          ],
        },
        {
          "name": "Listener",
          "super": "XyFinderBluetoothDevice.listener()",
          "enumerations": [
            {
              "name": "StayAwake",
              "values": [
                {
                  "name": "Off"
                },
                {
                  "name": "On"
                },
              ],
            },
          ],
          "functions": [
            {
              "name": "enable",
              "parameters": [
                {
                  "name": "enable : ",
                  "type": "Boolean"
                }
              ],
              "returns": [],
            },
            {
              "name": "addGlobalListener",
              "parameters": [
                {
                  "name": "key : ",
                  "type": "String"
                },
                {
                  "name": "listener : ",
                  "type": "Listener"
                }
              ],
              "returns": [],
            },
            {
              "name": "removeGlobalListener",
              "parameters": [
                {
                  "name": "key : ",
                  "type": "String"
                }
              ],
              "returns": [],
            },
            {
              "name": "reportGlobalButtonPressed",
              "parameters": [
                {
                  "name": "device : ",
                  "type": "XY4BluetoothDevice"
                },
                {
                  "name": "state : ",
                  "type": "ButtonPress"
                }
              ],
              "returns": [],
            },
          ]          
        },
        {
          "name": "XYAppleBluetoothDevice",
          "super": "XYBluetoothDevice",
          "properties": [
            {
              "name": "context",
              "type": "Context"
            },
            {
              "name": "device",
              "type": "BluetoothDevice"
            },
            {
              "name": "hash",
              "type": "String"
            },
            {
              "name": "Listener",
              "type": "XYBluetoothDevice.Listener()",
              "desc": "Use all listener functions in each class as they are separate"
            },
          ],
        },
        {
          "name": "XYBluetoothDevice",
          "super": "XYBluetoothGattClient",
          "properties": [
            {
              "name": "address",
              "desc": "device address",
              "type": "String"
            },
            {
              "name": "name",
              "desc": "device name",
              "type": "String"
            },
            {
              "name": "connected",
              "desc": "device connection status",
              "type": "Boolean"
            },
            {
              "name": "id",
              "desc": "device id",
              "type": "String"
            },
            {
              "name": "ads",
              "type": "SparseArray<XYBleAd>()"
            },
            {
              "name": "detectCount",
              "type": "Int"
            },
            {
              "name": "enterCount",
              "type": "Int"
            },
            {
              "name": "exitCount",
              "type": "Int"
            },
            {
              "name": "averageDetectGap",
              "type": "Long"
            },
            {
              "name": "lastDetectGap",
              "type": "Long"
            },
            {
              "name": "firstDetectTime",
              "type": "Long"
            },
            {
              "name": "lastDetectTime",
              "type": "Long"
            },
            {
              "name": "maxDetectTime",
              "type": "Long"
            },
            {
              "name": "exitAfterDisconnect",
              "type": "Boolean"
            },
            {
              "name": "outOfRangeDelay",
              "type": "OUT_OF_RANGE_DELAY"
            }
          ],
          "functions": [
            {
              "name": "hashCode",
              "parameters": [],
              "returns": [
                {
                  "type": "Int",
                }
              ],
            },
            {
              "name": "equals",
              "parameters": [
                {
                  "name": "other",
                  "type": "Any?"
                }
            ],
              "returns": [
                {
                  "type": "Boolean",
                }
              ],
            },
            {
              "name": "updateBluetoothDevice",
              "parameters": [
                {
                  "name": "device",
                  "type": "BluetoothDevice?"
                }
            ],
              "returns": [],
            },
            {
              "name": "onDetect",
              "parameters": [
                {
                  "name": "scanResult : ",
                  "type": "XYScanResult?"
                }
              ],
              "returns": [],
            },
            {
              "name": "onConnectionStateChange",
              "parameters": [
                {
                  "name": "newState : ",
                  "type": "Int"
                }
              ],
              "returns": [],
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
                  "type": "Listener"
                }
              ],
              "returns": [],
            },
            {
              "name": "removeListener",
              "parameters": [
                {
                  "name": "key : ",
                  "type": "String"
                }
              ],
              "returns": [],
            },
          ]
        },
        {
          "desc": "Abstract class for interface for self creating objects with a device list to prevent garbage collection",
          "name": "XYCreator",
          "super": "XyBase",
          "functions": [
            {
              "name": "getDevicesFromScanResult",
              "desc": "device object of best fit to prevent garbage collection",
              "parameters": [
                {
                  "name": "context : ",
                  "type": "Context"
                },
                {
                  "name": "scanResult : ",
                  "type": "XYScanResult"
                },
                {
                  "name": "globalDevices : ",
                  "type": "ConcurrentHashMap<String, XYBluetoothDevice>"
                },
                {
                  "name": "foundDevices : ",
                  "type": "HashMap<String, XYBluetoothDevice>"
                }
              ],
              "returns": [
                {
                  "type": "XyBase",
                }
              ],
            },
          ],
        },
        {
          "name": "XYFinderBluetoothDevice",
          "super": "XYIBeaconBluetoothDevice",
          "properties": [
            {
              "name": "context",
              "type": "Context"
            },
            {
              "name": "scanResult",
              "type": "XYScanResult"
            },
            {
              "name": "hash",
              "type": "String"
            },
            {
              "name": "id",
              "type": "String"
            },
            {
              "name": "family",
              "type": "Family get()"
            },
            {
              "name": "proximity",
              "type": "Proximity get()"
            },
          ],
          "enumerations": [
            {
              "name": "Family",
              "values": [
                {
                  "name": "Unknown"
                },
                {
                  "name": "XY1"
                },
                {
                  "name": "XY2"
                },
                {
                  "name": "XY3"
                },
                {
                  "name": "Mobile"
                },
                {
                  "name": "Gps"
                },
                {
                  "name": "Near"
                },
                {
                  "name": "XY4"
                },
                {
                  "name": "Webble"
                }
              ],
            },
            {
              "name": "Proximity",
              "values": [
                {
                  "name": "None"
                },
                {
                  "name": "OutOfRange"
                },
                {
                  "name": "VeryFar"
                },
                {
                  "name": "Far"
                },
                {
                  "name": "Medium"
                },
                {
                  "name": "Near"
                },
                {
                  "name": "VeryNear"
                },
                {
                  "name": "Touching"
                },
              ],
            },
            {
              "name": "ButtonPress",
              "values": [
                {
                  "name": "None"
                },
                {
                  "name": "Single"
                },
                {
                  "name": "Double"
                },
                {
                  "name": "Long"
                },
              ],
            },
          ],
          "functions": [
            {
              "name": "find"
            },
            {
              "name": "stopFind"
            },
            {
              "name": "lock"
            },
            {
              "name": "unlock"
            },
            {
              "name": "stayAwake"
            },
            {
              "name": "fallAsleep"
            },
            {
              "name": "restart"
            },
            {
              "name": "batteryLevel"
            },
            {
              "name": "updateFirmware"
            },
            {
              "name": "updateFirmware"
            },
            {
              "name": "cancelUpdateFirmware"
            }
          ]
        },
        {
          "name": "XYFinderBluetoothDevicePromiseWrapper",
          "properties": [
            {
              "name": "device",
              "type": "XYFinderBluetoothDevice"
            },
          ],
          "functions": [
            {
              "name": "find"
            },
            {
              "name": "stopFind"
            },
            {
              "name": "lock"
            },
            {
              "name": "unlock"
            },
            {
              "name": "stayAwake"
            },
            {
              "name": "fallAsleep"
            },
            {
              "name": "restart"
            },
            {
              "name": "batteryLevel"
            },
          ]
        },
        {
          "name": "XYGpsBluetoothDevice",
          "super": "XYFinderBluetoothDevice",
          "properties": [
            {
              "name": "context",
              "type": "Context"
            },
            {
              "name": "scanResult",
              "type": "XYScanResult"
            },
            {
              "name": "hash",
              "type": "String"
            },
            {
              "name": "alertNotification",
              "type": "AlertNotificationService"
            },
            {
              "name": "batteryService",
              "type": "BatteryService"
            },
            {
              "name": "currentTimeService",
              "type": "CurrentTimeService"
            },
            {
              "name": "deviceInformationService",
              "type": "DeviceInformationService"
            },
            {
              "name": "genericAccessService",
              "type": "GenericAccessService"
            },
            {
              "name": "genericAttributeService",
              "type": "GenericAttributeService"
            },
            {
              "name": "linkLossService",
              "type": "LinkLossService"
            },
            {
              "name": "txPowerService",
              "type": "TxPowerService"
            },
            {
              "name": "basicConfigService",
              "type": "BasicConfigService"
            },
            {
              "name": "controlService",
              "type": "ControlService"
            },
            {
              "name": "csrOtaService",
              "type": "CsrOtaService"
            },
            {
              "name": "extendedConfigService",
              "type": "ExtendedConfigService"
            },
            {
              "name": "extendedControlService",
              "type": "ExtendedControlService"
            },
            {
              "name": "sensorService",
              "type": "SensorService"
            },
          ],
          "functions": [
            {
              "name": "find"
            },
            {
              "name": "reportButtonPressed"
            },
          ]
        },
        {
          "name": "XYIBeaconBluetoothDevice",
          "super": "XYBluetoothDevice",
          "properties": [
            {
              "name": "context",
              "type": "Context",
            },
            {
              "name": "scanResult",
              "type": "XYScanResult?",
            },
            {
              "name": "hash",
              "type": "String",
            },
            {
              "name": "transport",
              "type": "Int",
            },
            {
              "name": "uuid",
              "type": "UUID get()",
            },
            {
              "name": "major",
              "type": "Ushort get()",
            },
            {
              "name": "minor",
              "type": "Ushort get()",
            },
            {
              "name": "power",
              "type": "Byte get()",
            },
            {
              "name": "id",
              "type": "String get()",
            },
          ],
          "functions": []
        },
      ]
    },
    {
      "desc": "Gatt Primitives",
      "name": "gatt",
      "objects": [
        {
          "desc": "Base object that represents a bluetooth device in the system.",
          "name": "XYBluetoothBase",
          "super": "XYBase"
        },
        {
          "desc": "Causes all ble calls to be initiated in a single thread, other functionality (non-gatt/ble initiating calls) should not be in these blocks.",
          "name": "XYBluetoothDeferred"
        },
        {
          "desc": "Error message handler",
          "name": "XYBluetoothError",
          "properties": [
            {
              "name": "message",
              "type": "String"
            },
            {
              "name": "tag",
              "type": "String"
            }
          ],
          "functions": [
            {
              "name": "init"
            },
            {
              "name": "toString"
            }
          ]
        },
        {
          "desc": "Pure wrapper that does not add any functionality other than the ability to call the BluetoothGatt functions using coroutines.",
          "name": "XYBluetoothGatt",
          "enumerations": [
            {
              "name": "Status",
              "values": [
                {
                  "name": "NoResources",
                },
                {
                  "name": "InternalError",
                },
                {
                  "name": "WrongState",
                },
                {
                  "name": "DBFull",
                },
                {
                  "name": "Busy",
                },
                {
                  "name": "Error",
                },
                {
                  "name": "IllegalParameter",
                },
                {
                  "name": "AuthFail",
                }
              ]
            },
          ],
          "functions": [
            {
              "name": "onDetect"
            },
            {
              "name": "connect"
            },
            {
              "name": "disconnect"
            }
          ]
        },
        {
          "name": "XYBluetoothGattCallback",
          "super": "BluetoothGattCallback",
          "desc": "This class is a callback broadcast version of the standard BluetoothGattCallback",
          "functions": [
            {
              "name": "addListener",
            },
            {
              "name": "removeListener",
            },
            {
              "name": "onCharacteristicChanged",
            },
            {
              "name": "onCharacteristicRead",
            },
            {
              "name": "onCharacteristicWrite",
            },
            {
              "name": "onConnectionStateChange",
            },
            {
              "name": "onDescriptorRead",
            },
            {
              "name": "onDescriptorWrite",
            },
            {
              "name": "onMtuChanged",
            }
          ],
        },
        {
          "name": "XYBluetoothGattClient",
          "super": "XYBluetoothGatt",
          "desc": "Access a BLE peripheral from a central",
          "functions": [
            {
              "name": "updateBluetoothDevice",
              "parameters": [
                {
                  "name": "device : ",
                  "type": "BluetoothDevice?"
                }
              ],
              "returns": [],
            },
            {
              "name": "readCharacteristicInt",
              "parameters": [
                {
                  "name": "characteristicToRead : ",
                  "type": "BluetoothGattCharacteristic"
                },
                {
                  "name": "formatType : ",
                  "type": "Int"
                },
                {
                  "name": "offset : ",
                  "type": "Int"
                }
              ],
              "returns": [
                {
                  "type": "XYBluetoothResult",
                }
              ],
            },
            {
              "name": "readCharacteristicString",
              "parameters": [
                {
                  "name": "characteristicToRead : ",
                  "type": "BluetoothGattCharacteristic"
                },
                {
                  "name": "offset : ",
                  "type": "Int"
                }
              ],
              "returns": [
                {
                  "type": "XYBluetoothResult",
                }
              ],
            },
            {
              "name": "readCharacteristicFloat",
              "parameters": [
                {
                  "name": "characteristicToRead : ",
                  "type": "BluetoothGattCharacteristic"
                },
                {
                  "name": "formatType : ",
                  "type": "Int"
                },
                {
                  "name": "offset : ",
                  "type": "Int"
                }
              ],
              "returns": [
                {
                  "type": "XYBluetoothResult",
                }
              ],
            },
            {
              "name": "readCharacteristicBytes",
              "parameters": [
                {
                  "name": "characteristicToRead : ",
                  "type": "BluetoothGattCharacteristic"
                },
              ],
              "returns": [
                {
                  "type": "XYBluetoothResult",
                }
              ],
            },
            {
              "name": "findAndReadCharacteristicInt",
              "parameters": [
                {
                  "name": "service : ",
                  "type": "UUID"
                },
                {
                  "name": "characteristic : ",
                  "type": "UUID"
                },
                {
                  "name": "formatType : ",
                  "type": "Int"
                },
                {
                  "name": "offset : ",
                  "type": "Int"
                }
              ],
              "returns": [
                {
                  "type": "XYBluetoothResult",
                }
              ],
            },
            {
              "name": "findAndReadCharacteristicFloat",
              "parameters": [
                {
                  "name": "service : ",
                  "type": "UUID"
                },
                {
                  "name": "characteristic : ",
                  "type": "UUID"
                },
                {
                  "name": "formatType : ",
                  "type": "Int"
                },
                {
                  "name": "offset : ",
                  "type": "Int"
                }
              ],
              "returns": [
                {
                  "type": "XYBluetoothResult",
                }
              ],
            },
            {
              "name": "findAndReadCharacteristicString",
              "parameters": [
                {
                  "name": "service : ",
                  "type": "UUID"
                },
                {
                  "name": "characteristic : ",
                  "type": "UUID"
                },
                {
                  "name": "formatType : ",
                  "type": "Int"
                },
                {
                  "name": "offset : ",
                  "type": "Int"
                }
              ],
              "returns": [
                {
                  "type": "XYBluetoothResult",
                }
              ],
            },
            {
              "name": "findAndReadCharacteristicBytes",
              "parameters": [
                {
                  "name": "service : ",
                  "type": "UUID"
                },
                {
                  "name": "characteristic : ",
                  "type": "UUID"
                },
              ],
              "returns": [
                {
                  "type": "XYBluetoothResult",
                }
              ],
            },
            {
              "name": "findAndWriteCharacteristic",
              "parameters": [
                {
                  "name": "service : ",
                  "type": "UUID"
                },
                {
                  "name": "characteristic : ",
                  "type": "UUID"
                },
                {
                  "name": "valueToWrite : ",
                  "type": "Int"
                },
                {
                  "name": "formatType : ",
                  "type": "Int"
                },
                {
                  "name": "offset : ",
                  "type": "Int"
                },
              ],
              "returns": [
                {
                  "type": "XYBluetoothResult",
                }
              ],
            },
            {
              "name": "findAndWriteCharacteristicFloat",
              "parameters": [
                {
                  "name": "service : ",
                  "type": "UUID"
                },
                {
                  "name": "characteristic : ",
                  "type": "UUID"
                },
                {
                  "name": "mantissa : ",
                  "type": "Int"
                },
                {
                  "name": "exponent : ",
                  "type": "Int"
                },
                {
                  "name": "formatType : ",
                  "type": "Int"
                },
                {
                  "name": "offset : ",
                  "type": "Int"
                },
              ],
              "returns": [
                {
                  "type": "XYBluetoothResult",
                }
              ],
            },
            {
              "name": "findAndWriteCharacteristic",
              "parameters": [
                {
                  "name": "service : ",
                  "type": "UUID"
                },
                {
                  "name": "characteristic : ",
                  "type": "UUID"
                },
                {
                  "name": "valueToWrite : ",
                  "type": "String"
                },
              ],
              "returns": [
                {
                  "type": "XYBluetoothResult",
                }
              ],
            },
            {
              "name": "findAndWriteCharacteristic",
              "parameters": [
                {
                  "name": "service : ",
                  "type": "UUID"
                },
                {
                  "name": "characteristic : ",
                  "type": "UUID"
                },
                {
                  "name": "bytes : ",
                  "type": "ByteArray"
                },
                {
                  "name": "writeType : ",
                  "type": "Int?"
                },
              ],
              "returns": [
                {
                  "type": "XYBluetoothResult",
                }
              ],
            },
            {
              "name": "findAndWriteCharacteristicNotify",
              "parameters": [
                {
                  "name": "service : ",
                  "type": "UUID"
                },
                {
                  "name": "characteristic : ",
                  "type": "UUID"
                },
                {
                  "name": "enable : ",
                  "type": "Boolean"
                },
              ],
              "returns": [
                {
                  "type": "XYBluetoothResult",
                }
              ],
            },
          ],
        },
        {
          "name": "XYBluetoothResult",
          "desc": "Interface for returning results for values written or read",
          "properties": [
            {
              "name": "value",
              "type": "T?"
            },
            {
              "name": "error",
              "type": "XYBluetoothError?"
            },
          ],
          "functions": [
            {
              "name": "getValueString",
              "parameters": [],
              "returns": [
                {
                  "type": "String",
                  "desc": "value",
                }
              ],
            },            
            {
              "name": "getBluetoothError",
              "parameters": [],
              "returns": [
                {
                  "type": "XYBluetoothError",
                  "desc": "error",
                }
              ],
            },            
            {
              "name": "toString",
              "parameters": [],
              "returns": [
                {
                  "type": "String",
                  "desc": "value or error",
                }
              ],
            },            
            {
              "name": "format",
              "parameters": [],
              "returns": [
                {
                  "type": "String",
                  "desc": "value or error formatted as ",
                }
              ],
            },            
            {
              "name": "hasError",
              "parameters": [],
              "returns": [
                {
                  "type": "Boolean",
                }
              ],
            },            
          ],
        },
        {
          "desc": "Act as a peripheral server",
          "name": "XYBluetoothGattServer",
          "super": "XYBluetoothBase",
          "properties": [
            {
              "name": "context",
              "type": "Context"
            },
            {
              "name": "devices",
              "type": "Array<BluetoothDevice>?"
            },
          ],
          "functions": [
            {
              "name": "startServer",
              "parameters": [],
              "returns": [
                {
                  "type": "Boolean",
                }
              ],
            },
            {
              "name": "stopServer",
              "desc": "stops the androidGattServer",
              "parameters": [],
              "returns": [],
            },
            {
              "name": "addListener",
              "parameters": [
                {
                  "name": "key : ",
                  "type": " String "
                },
                {
                  "name": "listener : ",
                  "type": "BluetoothGattServerCallback"
                },
              ],
              "returns": [],
            },
            {
              "name": "getServices",
              "parameters": [],
              "returns": [
                {
                  "type": "Array<XYBluetoothService>",
                }
              ],
            },
            {
              "name": "isDeviceConnected",
              "parameters": [
                {
                  "name": "bluetoothDevice : ",
                  "type": "BluetoothDevice"
                },
              ],
              "returns": [
                {
                  "type": "Boolean",
                }
              ],
            },
            {
              "name": "addService",
              "parameters": [
                {
                  "name": "serviceToAdd : ",
                  "type": "XYBluetoothService"
                },
              ],
              "returns": [
                {
                  "type": "XYBluetoothResult",
                }
              ],
            },
            {
              "name": "removeService",
              "parameters": [
                {
                  "name": "uuid : ",
                  "type": "UUID"
                },
              ],
              "returns": [],
            },
          ],
        },
      ]
    },
    {
      "desc": "Central scanner used to find peripherals",
      "name": "scanner",
      "objects": [
        {
          "desc": "Allows scanning for peripherals from a central. This is the starting point for all functionality in the BLE family",
          "name": "XYSmartScan",
          "properties": [
            {
              "name": "resultsPerSecond",
              "type": "Float"
            },
            {
              "name": "uptime",
              "type": "Long"
            },
            {
              "name": "uptimeSeconds",
              "type": "Float"
            },
            {
              "name": "hostDevice",
              "type": "XYMobileBluetoothDevice"
            },
            {
              "name": "devices",
              "type": "ConcurrentHashMap"
            }
          ],
          "enumerations": [
            {
              "name": "Status",
              "values": [
                {
                  "name": "Enabled"
                },
                {
                  "name": "BluetoothDisabled"
                },
                {
                  "name": "BluetoothUnavailable"
                },
                {
                  "name": "LocationDisabled"
                },
              ]
            },
            {
              "name": "BluetoothStatus",
              "values": [
                {
                  "name": "None"
                },
                {
                  "name": "Enabled"
                },
                {
                  "name": "BluetoothUnavailable"
                },
                {
                  "name": "BluetoothUnstable"
                },
                {
                  "name": "BluetoothDisabled"
                },
                {
                  "name": "LocationDisabled"
                },
              ]
            },
            {
              "name": "ScanFailed",
              "values": [
                {
                  "name": "Unknown"
                },
                {
                  "name": "AlreadyStarted"
                },
                {
                  "name": "ApplicationRegistrationFailed"
                },
                {
                  "name": "FeatureUnsupported"
                },
                {
                  "name": "InternalError"
                },
              ]
            },
          ],
          "functions": [
            {
              "async": "true",
              "name": "enableBluetooth",
              "parameters": [
                {
                  "name": "enable",
                  "type": "Boolean"
                },
              ],
              "returns": [
                {
                  "type": "Boolean",
                  "desc": "bluetoothManager?.adapter?.enable()"
                }
              ],
              "template": true
            },
            {
              "async": "true",
              "name": "deviceFromId",
              "parameters": [
                {
                  "name": "id",
                  "type": "String"
                },
              ],
              "returns": [
                {
                  "type": "XYBluetoothDevice",
                  "desc": "device"
                }
              ],
              "template": true
            },
          ]
        },
        {
          "name": "XYSmartScanModern",
          "super": "XYSmartScan",
          "properties": [
            {
              "name": "result",
              "type": "asyncBle",
            },
            {
              "name": "bluetoothAdapter",
              "type": "bluetoothManager adapter",
            },
          ],
          "functions": [
            {
              "async": "true",
              "name": "start",
              "parameters": [
                {

                },
              ],
              "returns": [
                {
                  "type": "return@asyncBle XYBluetoothResult(Boolean)",
                  "desc": "XYBluetoothResult(Boolean) and start scan"
                }
              ],
              "template": true
            },
            {
              "async": "true",
              "name": "stop",
              "parameters": [
                {

                },
              ],
              "returns": [
                {
                  "type": "return@async result?value ?: Boolean",
                  "desc": "XYBluetoothResult(Boolean) and stop scan"
                }
              ],
              "template": true
            },
          ]
        },
        {
          "name": "XYScanRecord",
          "super": "XYBase",
          "desc": "inherited abstract class for recorded data from a scan"
        },
        {
          "name": "XYScanResult",
          "super": "XYBase",
          "desc": "Serves as a Kotlin wrapper and returns a device address and other data from an XY Bluetooth device"
        },
        {
          "name": "XYScanResultModern",
          "super": "XyScanResult",
          "desc": "improves upon the XYScanResult Kotlin wrapper with hashed data and a function to stringify scanned results"
        },
      ],
    },
    {
      "desc": "Services for XY Bluetooth Devices",
      "name": "services",
      "objects": [ 
        {
          "desc": "Provides Primary Service for XY4 (Sentinel X)",
          "name": "PrimaryService",
          "super": "Service",
          "properties": [
            {
              "name": "uuid",
              "type": "UUID",
              "desc": "It is a UUID from string"
            },
          ],  
          "enumerations": [
            {
              "name": "Characteristics (UUID)",
              "values": [
                {
                  "name": "StayAwake"
                },
                {
                  "name": "Unlock"
                },
                {
                  "name": "Lock"
                },
                {
                  "name": "Major"
                },
                {
                  "name": "Minor"
                },
                {
                  "name": "Uuid"
                },
                {
                  "name": "ButtonState"
                },
                {
                  "name": "Buzzer"
                },
                {
                  "name": "BuzzerConfig"
                },
                {
                  "name": "AdConfig"
                },
                {
                  "name": "ButtonConfig"
                },
                {
                  "name": "LastError"
                },
                {
                  "name": "Uptime"
                },
                {
                  "name": "Reset"
                },
                {
                  "name": "SelfTest"
                },
                {
                  "name": "Debug"
                },
                {
                  "name": "LeftBehind"
                },
                {
                  "name": "EddystoneUID"
                },
                {
                  "name": "EddystoneURL"
                },
                {
                  "name": "EddystoneEID"
                },
                {
                  "name": "Color"
                },
                {
                  "name": "HardwareCreateDate"
                },
              ]
            }
          ]          
        }
      ]
    }   
  ]
}];