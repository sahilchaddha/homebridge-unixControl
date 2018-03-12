var container = require('../../../Services/Container.js')
const accessoryName = "chromeAccessory"

function ChromeAccessory() {
    var uuid = container.homebridge.UUIDGen.generate(accessoryName)
    var accessory = new container.homebridge.Accessory(accessoryName, uuid)

    accessory.on('identify', function(paired, callback) {
        callback();
      });
      
      accessory.addService(container.homebridge.Service.StatelessProgrammableSwitch, "Reset Chrome")
      .getCharacteristic(container.homebridge.Characteristic.ProgrammableSwitchEvent)
      .on('set', function(value, callback) {
          console.log("Chrome Reset")
        callback();
      });

    return accessory
}

module.exports = ChromeAccessory