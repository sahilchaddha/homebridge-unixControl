const pluginName = "homebridge-unixcontrol"

function Container() {
    this.Service = null
    this.Characteristic = null
    this.Accessory = null
    this.UUIDGen = null
}

Container.prototype.set = function(homebridge) { 
    this.Service = homebridge.hap.Service
    this.Characteristic = homebridge.hap.Characteristic
    this.Accessory = homebridge.platformAccessory
    this.UUIDGen = homebridge.hap.uuid
}

module.exports = {
    pluginName: pluginName,
    homebridge: new Container()
}