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
    container.homebridge.set(homebridge)
    //Registering Platforms
    this.addPlatforms(homebridge)
}

PlatformService.prototype.addPlatforms = function(homebridge) {
    homebridge.registerPlatform(container.pluginName, browserPlatform.name, browserPlatform.platform, true)
    homebridge.registerPlatform(container.pluginName, powerPlatform.name, powerPlatform.platform, true)
    homebridge.registerPlatform(container.pluginName, systemStatsPlatform.name, systemStatsPlatform.platform, true)
    homebridge.registerPlatform(container.pluginName, wifiPlatform.name, wifiPlatform.platform, true)
    homebridge.registerPlatform(container.pluginName, bluetoothPlatform.name, bluetoothPlatform.platform, true)
    homebridge.registerPlatform(container.pluginName, systemSpyPlatform.name, systemSpyPlatform.platform, true)
    homebridge.registerPlatform(container.pluginName, musicPlatform.name, musicPlatform.platform, true)
    homebridge.registerPlatform(container.pluginName, customPlatform.name, customPlatform.platform, true)
}

module.exports = PlatformService