var Service, Characteristic, Accessory, hap, UUIDGen
var powerPlatform = require('../Platforms/PowerPlatform.js')
var systemStatsPlatform = require('../Platforms/SystemStatsPlatform.js')
var browserPlatform = require('../Platforms/BrowserPlatform.js')
var wifiPlatform = require('../Platforms/WifiPlatform.js')
var bluetoothPlatform = require('../Platforms/BluetoothPlatform.js')
var systemSpyPlatform = require('../Platforms/SystemSpyPlatform.js')
var musicPlatform = require('../Platforms/MusicPlatform.js')
var customPlatform = require('../Platforms/CustomPlatform.js')
const pluginName = "homebridge-unixcontrol"

function PlatformService(homebridge) { 
    Service = homebridge.hap.Service
    Characteristic = homebridge.hap.Characteristic
    Accessory = homebridge.platformAccessory
    UUIDGen = homebridge.hap.uuid
    //Registering Platforms
    this.addPlatforms(homebridge)
}

PlatformService.prototype.addPlatforms = function(homebridge) {
    homebridge.registerPlatform(pluginName, "PowerPlatform", powerPlatform, true)
    homebridge.registerPlatform(pluginName, "SystemStatsPlatform", systemStatsPlatform, true)
    homebridge.registerPlatform(pluginName, "BrowserPlatform", browserPlatform, true)
    homebridge.registerPlatform(pluginName, "WifiPlatform", wifiPlatform, true)
    homebridge.registerPlatform(pluginName, "BluetoothPlatform", bluetoothPlatform, true)
    homebridge.registerPlatform(pluginName, "SystemSpyPlatform", systemSpyPlatform, true)
    homebridge.registerPlatform(pluginName, "MusicPlatform", musicPlatform, true)
    homebridge.registerPlatform(pluginName, "CustomPlatform", customPlatform, true)
}

module.exports = PlatformService