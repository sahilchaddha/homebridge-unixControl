var container = require('../../Services/Container.js')
const platformName = "MusicPlatform"

var availableAccesories = {
}

function MusicPlatform(log, config, api) {
    this.platformLogger = log 
    this.platformConfig = config
    this.platformAPI = api
    this.accessories = []
    registerAccesories.call(this)  
}

MusicPlatform.prototype.configureAccessory = function(accessory) {
    this.platformLogger.log('Configure Accessory')
    var platform = this
    accessory.reachable = true
  
    accessory.on('identify', function(paired, callback) {
      platform.log(accessory.displayName, "Identify!!!")
      callback();
    })
  
    this.accessories.push(accessory)
}

MusicPlatform.prototype.configurationRequestHandler = function(context, request, callback) {

}

function registerAccesories() {
    var platform = this
    var accesoryKeys = Object.keys(availableAccesories)
    var excludedAccesories = []

    if (platform.platformConfig != null && platform.platformConfig["exclude"] != null && platform.platformConfig.exclude.length > 0) {
        excludedAccesories = platform.platformConfig.exclude
    }

    accesoryKeys.forEach(key => {
        if (excludedAccesories.indexOf(key) > -1) {
            platform.accessories.push(availableAccesories[key])
        }
    })
    platform.platformAPI.registerPlatformAccessories(container.pluginName, platformName, platform.accessories)
}

module.exports = MusicPlatform