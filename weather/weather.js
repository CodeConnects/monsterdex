const request = require('request');
const config = require('../config.js');

var getWeather = (lat, lng, callback) => {
    request({
            url: `https://api.darksky.net/forecast/${config.darkSkyAPIKey}/${lat},${lng}`,
            json: true
        }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                callback(undefined, {
                    summary: body.currently.summary,
                    temp: body.currently.temperature,
                    feelsLike: body.currently.apparentTemperature,
                });
            } else {
                callback('Unable to fetch weather');
            }
        }
    );
};

module.exports = {
    getWeather
}