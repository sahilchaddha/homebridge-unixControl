var container = require('../../../Services/Container.js')
const accessoryName = "safariAccessory"

function SafariAccessory() {
    var uuid = container.homebridge.UUIDGen.generate(accessoryName)
    var accessory = new container.homebridge.Accessory(accessoryName, uuid)

    accessory.on('identify', function(paired, callback) {
        callback()
      })
    
      accessory.addService(container.homebridge.Service.StatelessProgrammableSwitch, "Reset Safari")
      .getCharacteristic(container.homebridge.Characteristic.ProgrammableSwitchEvent)
      .on('set', function(value, callback) {
          console.log("Safari Reset")
        callback()
      })

    return accessory
}

module.exports = SafariAccessory