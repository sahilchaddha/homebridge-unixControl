
function BluetoothPlatform(log, config, api) {
    this.platformLogger = log //debug, info, warn, wrror, log
    this.platformConfig = config
    this.platformAPI = api
    this.accessories = []
}

BluetoothPlatform.prototype.configureAccessory = function(accessory) {
    this.platformLogger.log('Configure Accesorry')
}

module.exports = BluetoothPlatform