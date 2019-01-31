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
              "desc": "hash for the hashCode function.",
              "name": "hash",
              "type": "Int"
            },              
          ], 
        },
      ],
    },
    {
      "desc": "Device Specific Client Implementations",
      "name": "devices",
      "objects": [
        {
          "enumerations": [
            {
              "name": "StayAwake",
              "values": [
                {
                  "name": "Off"
                },
                {
                  "name": "On"
                }
              ]
            }
          ],
          "name": "XY2BluetoothDevice",
          "super": "XYFinderBluetoothDevice"
        },
        {
          "enumerations": [
            {
              "name": "ButtonPress",
              "values": [
                {
                  "name": "Single"
                },
                {
                  "name": "Double"
                },
                {
                  "name": "Long"
                }
              ]
            },
            {
              "name": "StayAwake",
              "values": [
                {
                  "name": "Off"
                },
                {
                  "name": "On"
                }
              ]
            }
          ],
          "name": "XY3BluetoothDevice",
          "properties": [
            {
              "desc": "The lock code that XY4+ devices are shipped with.",
              "name": "DefaultLockCode",
              "static": true,
              "type": "ByteArray"
            },
            {
              "desc": "Comparator that compares two devices based on distance",
              "name": "compareDistance",
              "templateTypes": [
                "XYFinderBluetoothDevice"
              ],
              "type": "Comparator"
            }
          ],
          "super": "XYFinderBluetoothDevice"
        },
        {
          "name": "XYAppleBluetoothDevice",
          "super": "XYBluetoothDevice",
          "properties": [
            {              
              "desc": "The id of the device being used to get manufacturer specific data.",
              "name": "Manufacturer id",
              "static": true,
              "type": "byte"
            },
          ],
        },
        {
          "name": "XYBluetoothDevice",
          "properties": [
            {
              "desc": "Mapping for device creators that key off manufacturer id",
              "name": "manufacturerToCreator",
              "templateTypes": [
                "Int",
                "XYCreator"
              ],
              "type": "HashMap"
            },
            {
              "desc": "The most recent rssi reading from the device",
              "name": "rssi",
              "optional": true,
              "type": "Int"
            },
            {
              "desc": "Mapping for device creators that key off service uuid",
              "name": "serviceToCreator",
              "templateTypes": [
                "Int",
                "XYCreator"
              ],
              "type": "HashMap"
            }
          ],
          "super": "XYBluetoothGattClient"
        },
        {
          "desc": "Abstract class for interface for self creating objects",
          "name": "XYCreator",
          "functions": [
            {
              "async": "true",
              "name": "getDevicesFromScanResult",
              "parameters": [
                {
                  "name": "context : ",
                  "type": "Context"
                }
              ],
              "returns": [
                {
                  "type": "XyBase",
                  "desc": "device object of best fit"
                }
              ],
              "template": true
            },
          ],
        },
        {
          "name": "XYFinderBluetoothDevice",
          "super": "XYIBeaconBluetoothDevice",
          "enumerations": [
            {
              "name": "ButtonPress",
              "values": [
                {
                  "name": "Single"
                },
                {
                  "name": "Double"
                },
                {
                  "name": "Long"
                }
              ],
            },
            {
              "name": "Family",
            },
            {
              "name": "Proximity",
            },
          ],
        },
        {
          "name": "XYGpsBluetoothDevice",
          "super": "XYFinderBluetoothDevice",
          "enumerations": [
            {
              "name": "StayAwake",
              "values": [
                {
                  "name": "Off"
                },
                {
                  "name": "On"
                }
              ]
            }
          ],
        },
        {
          "name": "XYIBeaconBluetoothDevice",
          "super": "XYBluetoothDevice",
          "properties": [
            {
              "name": "Apple_Beacon_ID",
              "type": "byte",
            },
          ],
        },
        {
          "name": "XYMobileBluetoothDevice",
          "super": "XYFinderBluetoothDevice",
          "properties": [
            {
              "name": "FAMILY_UUID",
              "type": "string",
            },
          ],
        }
      ]
    },
    {
      "desc": "Gatt Primitives",
      "name": "gatt",
      "objects": [
        {
          "desc": "Base object that represents a bluetooth device in the system",
          "name": "XYBluetoothBase",
          "super": "XYBase"
        },
        {
          "desc": "Bluetooth specific errors",
          "name": "XYBluetoothError",
          "super": "XYBase"
        },
        {
          "desc": "Access a BLE peripheral from a central",
          "enumerations": [
            {
              "name": "ConnectionState",
              "values": [
                {
                  "name": "Unknown"
                },
                {
                  "name": "Disconnected"
                },
                {
                  "name": "Connected"
                },
                {
                  "name": "Connecting"
                },
                {
                  "name": "Disconnecting"
                }
              ]
            }
          ],
          "functions": [
            {
              "async": "true",
              "name": "connection",
              "parameters": [
                {
                  "name": "closure : ",
                  "type": "function"
                }
              ],
              "returns": [
                {
                  "type": "obj",
                  "desc": "XYBluetoothResult"
                }
              ],
              "template": true
            }
          ],
          "objects": [
            {
              "name": "XYBluetoothGattCallback",
              "interface": true
            }
          ],
          "name": "XYBluetoothGattClient",
          "properties": [
            {
              "name": "closed",
              "type": "Boolean"
            },
            {
              "name": "connectionState",
              "type": "ConnectionState"
            },
            {
              "name": "stayConnected",
              "type": "Boolean"
            }
          ],
          "super": "XYBluetoothBase"
        },
        {
          "desc": "Act as a peripheral server",
          "name": "XYBluetoothGattServer",
          "super": "XYBluetoothBase"
        },
        {
          "desc": "Bluetooth specific results",
          "name": "XYBluetoothResult",
          "super": "XYBase"
        }
      ]
    },
    {
      "desc": "Central scanner used to find peripherals",
      "name": "scanner",
      "objects": [
        {
          "desc": "Allows scanning for peripherals from a central",
          "name": "XYSmartScan"
        }
      ]
    }
  ]
}]