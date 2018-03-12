var powerPlatform = require('../Platforms/Power/PowerPlatform.js')
var systemStatsPlatform = require('../Platforms//SystemStats/SystemStatsPlatform.js')
var browserPlatform = require('../Platforms/Browser/BrowserPlatform.js')
var wifiPlatform = require('../Platforms/Wifi/WifiPlatform.js')
var bluetoothPlatform = require('../Platforms/Bluetooth/BluetoothPlatform.js')
var systemSpyPlatform = require('../Platforms/SystemSpy/SystemSpyPlatform.js')
var musicPlatform = require('../Platforms/Music/MusicPlatform.js')
var customPlatform = require('../Platforms/Custom/CustomPlatform.js')
var container = require('./Container.js')
const pluginName = "homebridge-unixcontrol"

function PlatformService(homebridge) { 
    container.set(homebridge)
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