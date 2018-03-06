var request = require('request')

function NetworkService(endpoint, sessionToken) { 
    this.endpoint = endpoint
    this.sessionToken = sessionToken
}

NetworkService.prototype.response = function(url, method, data, callback) {

    // unixControl only supports Query Parameters as of now.
    // In future we might support POST Body
    var appendQueryParams = function(paramsDictionary) {
        var keys = Object.keys(paramsDictionary)
        var queryParamString = ""
        if (keys.length > 0) {
            queryParamString = "?"
            for(var i=0;i<keys.length;i++){
                var key = keys[i];
                queryParamString = queryParamString + key + "=" + paramsDictionary[key] + "&"
            }
        }
        return queryParamString
    }

    var fullBaseURL = this.endpoint + url + appendQueryParams(data)

    request({
        url: fullBaseURL,
        method: method,
        headers: {
            token: this.sessionToken
        }
    }, function(error, response, body) {
        if (callback != null) {
            callback(body, response, error)
        }
    })
}

module.exports = NetworkService