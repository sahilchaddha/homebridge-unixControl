
function CustomPlatform(log, config, api) {
    this.platformLogger = log 
    this.platformConfig = config
    this.platformAPI = api
    this.accessories = []
}

CustomPlatform.prototype.configureAccessory = function(accessory) {
    this.platformLogger.log('Configure Accesorry')
}

module.exports = CustomPlatform