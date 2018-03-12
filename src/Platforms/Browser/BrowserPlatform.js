//Accessories
var googleChromeAccessory = require('./Accessories/resetGoogleChromeAccesory.js')
var safariAccessory = require('./Accessories/resetSafariAccessory.js')
var container = require('../../Services/Container.js')
const platformName = "BrowserPlatform"

var availableAccesories = {
    "chrome": googleChromeAccessory,
    "safari": safariAccessory
}

function BrowserPlatform(log, config, api) {
    this.platformLogger = log
    this.platformConfig = config
    this.platformAPI = api
    this.accessories = []
    this.platformAPI.on('didFinishLaunching', function() {
        registerAccesories.call(this)  
    }.bind(this))
}

BrowserPlatform.prototype.configureAccessory = function(accessory) {
    this.platformLogger.log('Configure Accessory')
    var platform = this
    accessory.reachable = true
  
    accessory.on('identify', function(paired, callback) {
      platform.log(accessory.displayName, "Identify!!!")
      callback();
    })
  
    this.accessories.push(accessory)
}

BrowserPlatform.prototype.configurationRequestHandler = function(context, request, callback) {

}

function registerAccesories() {
    var platform = this
    var accesoryKeys = Object.keys(availableAccesories)
    var excludedAccesories = []

    if (platform.platformConfig != null && platform.platformConfig["exclude"] != null && platform.platformConfig.exclude.length > 0) {
        excludedAccesories = platform.platformConfig.exclude
    }

    var newAccessories = []

    accesoryKeys.forEach(key => {
        if (excludedAccesories.indexOf(key) <= -1) {
            newAccessories.push(new availableAccesories[key]())
        }
    })
    
    platform.accessories = platform.accessories.concat(newAccessories)
    platform.platformAPI.registerPlatformAccessories(container.pluginName, platformName, newAccessories)
}

module.exports = {
    name: platformName,
    platform: BrowserPlatform
}