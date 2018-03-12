var Service, Characteristic, Accessory, hap, UUIDGen
const pluginName = "homebridge-unixcontrol"

function Container() {
    Service = null
    Characteristic = null
    Accessory = null
    UUIDGen = null
}

Container.prototype.set = function(homebridge) { 
    Service = homebridge.hap.Service
    Characteristic = homebridge.hap.Characteristic
    Accessory = homebridge.platformAccessory
    UUIDGen = homebridge.hap.uuid
}

module.exports = new Container()