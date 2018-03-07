var request = require('request')

function NetworkService(endpoint, sessionToken) { 
    this.endpoint = endpoint
    this.sessionToken = sessionToken
}

NetworkService.prototype.response = function(url, method, data, callback) {

    // unixControl only supports Query Parameters as of now.
    var fullBaseURL = this.endpoint + url

    request({
        url: fullBaseURL,
        method: method,
        headers: {
            'token': this.sessionToken,
            'content-type': 'application/json'
        },
        json: data
    }, function(error, response, body) {
        if (callback != null) {
            callback(body, response, error)
        }
    })
}

module.exports = NetworkService