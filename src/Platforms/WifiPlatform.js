
function WifiPlatform(log, config, api) {
    this.platformLogger = log 
    this.platformConfig = config
    this.platformAPI = api
    this.accessories = []
}

WifiPlatform.prototype.configureAccessory = function(accessory) {
    this.platformLogger.log('Configure Accesorry')
}

module.exports = WifiPlatform