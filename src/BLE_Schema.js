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
          "name": "XY4BluetoothDevice",
          "super": "XYFinderBluetoothDevice",
          "properties": [
            {
              "desc": "A Global Listener for XYO.",
              "name": "Listener",
              "static": true,
              "type": "XYFinderBluetoothDevice Listener"
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
              "async": "true",
              "name": "enable",
              "parameters": [
                {
                  "name": "enable : ",
                  "type": "Boolean"
                }
              ],
              "returns": [
                {
                  "desc": "addCreator"
                }
              ],
              "template": true
            },
            {
              "async": "true",
              "name": "addGlobalListener",
              "parameters": [
                {
                  "name": "key : ",
                  "type": "String"
                },
                {
                  "name": "listener : ",
                  "type": "Listener"
                },
              ],
              "returns": [
                {
                  "desc": "GlobalScope launch synchronized(globalListeners) then put"
                }
              ],
              "template": true
            },
            {
              "async": "true",
              "name": "removeGlobalListener",
              "parameters": [
                {
                  "name": "key : ",
                  "type": "String"
                },
                {
                  "name": "listener : ",
                  "type": "Listener"
                },
              ],
              "returns": [
                {
                  "desc": "GlobalScope launch synchronized(globalListeners) then remove"
                }
              ],
              "template": true
            },
            {
              "async": "true",
              "name": "reportGlobalButtonPressed",
              "parameters": [
                {
                  "name": "device : ",
                  "type": "XY4BluetoothDevice"
                },
                {
                  "name": "state : ",
                  "type": "ButtonPress"
                },
              ],
              "returns": [
                {
                  "desc": "GlobalScope launch synchronized(globalListeners) then remove"
                }
              ],
              "template": true
            }
          ],
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
          "super": "XYBluetoothGattClient",
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
          "functions": [
            {
              "async": "true",
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
              "returns": [
                {
                  "type": "GlobalScope.launch { synchronized(listeners) { listeners.put(key, listener ) } }",
                  "desc": "added Listener"
                }
              ],
              "template": true
            },
            {
              "async": "true",
              "name": "removeListener",
              "parameters": [
                {
                  "name": "key : ",
                  "type": "String"
                }
              ],
              "returns": [
                {
                  "type": "GlobalScope.launch { synchronized(listeners) { listeners.remove(key, listener ) } }",
                  "desc": "removed Listener"
                }
              ],
              "template": true
            },
          ]
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
          "properties": [
            {
              "desc": "The XYO family for the ble device.",
              "name": "Family",
              "type": "An XY Bluetooth Device"
            },
            {
              "desc": "The promximity of the ble device.",
              "name": "Proximity",
              "type": "Distance to an XY Bluetooth device"
            },
            {
              "desc": "Device listeners.",
              "name": "Listener",
              "type": "XYIBeaconBluetoothDevice"
            },
          ],
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
                },
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
            {
              "name": "Listener",
              "type": "XYAppleBluetoothDevice",
            },
            {
              "name": "uuidToCreator",
              "type": "HashMap<UUID, XYCreator>()",
            },
          ],
          "functions": [
            {
              "async": "true",
              "name": "enable",
              "parameters": [
                {
                  "name": "enable : ",
                  "type": "Boolean"
                }
              ],
              "returns": [
                {
                  "type": "XYAppleBluetoothDevice",
                  "desc": "XYAppleBluetoothDevice.enable(true)"
                }
              ],
              "template": true
            },
            {
              "async": "true",
              "name": "iBeaconUuidFromScanResult",
              "parameters": [
                {
                  "name": "scanResult : ",
                  "type": "XYScanResult"
                }
              ],
              "returns": [
                {
                  "type": "UUID(high, low)",
                  "desc": "UUID"
                }
              ],
              "template": true
            }
          ]
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
          "desc": "causes all ble calls to be initiated in a single thread",
          "name": "XYBluetoothDeferred"
        },
        {
          "desc": "Bluetooth specific errors",
          "name": "XYBluetoothError",
          "super": "XYBase"
        },
        {
          "name": "XYBluetoothGattClient",
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
        },
        {
          "name": "XYBluetoothGattCallback",
          "super": "XYBluetoothBase",
          "interface": true,
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
        },
        {
          "desc": "Act as a peripheral server",
          "name": "XYBluetoothGattServer",
          "super": "XYBluetoothBase",
          "functions": [
            {
              "async": "false",
              "name": "startServer",
              "parameters": [
                {
                  "name": " ",
                  "type": " "
                }
              ],
              "returns": [
                {
                  "type": "Boolean",
                  "desc": "androidGattServer"
                }
              ],
              "template": true
            },
            {
              "async": "false",
              "name": "stopServer",
              "parameters": [
                {
                  "name": " ",
                  "type": " "
                }
              ],
              "returns": [
                {
                  "type": "",
                  "desc": "null - stops the androidGattServer"
                }
              ],
              "template": true
            },
            {
              "async": "false",
              "name": "addListener",
              "parameters": [
                {
                  "name": ["key : ", "listener : "],
                  "type": [" String ", " BluetoothGattServerCallback "]
                }
              ],
              "returns": [
                {
                  "type": "synchronized(listeners)",
                  "desc": "synchronized(listeners)"
                }
              ],
              "template": true
            },
            {
              "async": "false",
              "name": "removeListener",
              "parameters": [
                {
                  "name": "key : ",
                  "type": "String"
                },
              ],
              "returns": [
                {
                  "type": "listener",
                  "desc": "remove synchronized(listeners)"
                }
              ],
              "template": true
            },
            {
              "async": "false",
              "name": "getServices",
              "parameters": [
                {
                  "name": "",
                  "type": ""
                },
              ],
              "returns": [
                {
                  "type": "typed array",
                  "desc": "Array<BlueToothGattService>"
                }
              ],
              "template": true
            },
            {
              "async": "false",
              "name": "isDeviceConnected",
              "parameters": [
                {
                  "name": "bluetoothDevice",
                  "type": "BluetoothDevice"
                },
              ],
              "returns": [
                {
                  "type": "Boolean",
                  "desc": "bluetoothDevice.address == device.address ? true : false"
                }
              ],
              "template": true
            },
            {
              "async": "true",
              "name": "addService",
              "parameters": [
                {
                  "name": "serviceToAdd",
                  "type": "XYBluetoothService"
                },
              ],
              "returns": [
                {
                  "type": "asyncBle",
                  "desc": "@asyncBle XYBluetoothResult(XYGattStatus(addCallback))"
                }
              ],
              "template": true
            },
          ],
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
}]