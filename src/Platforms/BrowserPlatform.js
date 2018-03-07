
function BrowserPlatform(log, config, api) {
    this.platformLogger = log //debug, info, warn, wrror, log
    this.platformConfig = config
    this.platformAPI = api
    this.accessories = []
}

BrowserPlatform.prototype.configureAccessory = function(accessory) {
    this.platformLogger.log('Configure Accesorry')
}

module.exports = BrowserPlatform