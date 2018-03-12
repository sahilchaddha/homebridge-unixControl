var powerPlatform = require('../Platforms/Power/PowerPlatform.js')
var systemStatsPlatform = require('../Platforms//SystemStats/SystemStatsPlatform.js')
var browserPlatform = require('../Platforms/Browser/BrowserPlatform.js')
var wifiPlatform = require('../Platforms/Wifi/WifiPlatform.js')
var bluetoothPlatform = require('../Platforms/Bluetooth/BluetoothPlatform.js')
var systemSpyPlatform = require('../Platforms/SystemSpy/SystemSpyPlatform.js')
var musicPlatform = require('../Platforms/Music/MusicPlatform.js')
var customPlatform = require('../Platforms/Custom/CustomPlatform.js')
var container = require('./Container.js')

function PlatformService(homebridge) { 
    container.set(homebridge)
    //Registering Platforms
    this.addPlatforms(homebridge)
}

PlatformService.prototype.addPlatforms = function(homebridge) {
    homebridge.registerPlatform(container.pluginName, "PowerPlatform", powerPlatform, true)
    homebridge.registerPlatform(container.pluginName, "SystemStatsPlatform", systemStatsPlatform, true)
    homebridge.registerPlatform(container.pluginName, "BrowserPlatform", browserPlatform, true)
    homebridge.registerPlatform(container.pluginName, "WifiPlatform", wifiPlatform, true)
    homebridge.registerPlatform(container.pluginName, "BluetoothPlatform", bluetoothPlatform, true)
    homebridge.registerPlatform(container.pluginName, "SystemSpyPlatform", systemSpyPlatform, true)
    homebridge.registerPlatform(container.pluginName, "MusicPlatform", musicPlatform, true)
    homebridge.registerPlatform(container.pluginName, "CustomPlatform", true)
}

module.exports = PlatformService