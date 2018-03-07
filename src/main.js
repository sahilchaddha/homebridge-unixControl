
var PlatformService = require('./Services/PlatformService.js')

module.exports = function (homebridge) {
    this.platformService = new PlatformService(homebridge)
}