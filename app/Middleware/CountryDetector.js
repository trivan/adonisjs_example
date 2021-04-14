'use strict'

const geoip = require('geoip-lite')

class CountryDetector {
  async handle ({ request }, next) {
    var ip = request.ip() // in localhost, it is 127.0.0.1
    // console.log(ip)
    ip = '125.234.101.244'
    request.country = geoip.lookup(ip).country
    // console.log(geoip.lookup(ip))
    await next()
  }
}

module.exports = CountryDetector