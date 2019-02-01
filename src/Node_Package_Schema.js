module.exports = [{
  "id": "sdk-pkg-node",
  "name": "Node Package Library",
  "locale": "EN",
  "platform": "web",
  "lang": "Node",
  "type": "SDK",
  "desc": "Core Library with support for all XYO devices",
  "modules": [
    {
      "desc": "diviner package",
      "name": "app-divinver",
      "objects": [
        {
          "super": "XyoBaseNode",
          "desc": "Launches a diviner",
          "name": "DivinerLauncher",
        },
      ]
    },
  ],
}]