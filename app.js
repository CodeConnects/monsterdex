const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
    .options({
        address: {
            demand: true,
            alias: 'a',
            describe: 'Address to get the weather for',
            string: true
        }
    })
    .help()
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, geoResults) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(`The current weather for ${geoResults.address}`);
        weather.getWeather(geoResults.latitude, geoResults.longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`${geoResults.latitude} latitude and ${geoResults.longitude} longitude, is ${weatherResults.summary}.`)
                console.log(`The temperature is ${weatherResults.temp} and it feels like ${weatherResults.feelsLike}`);
            }
        });
    }
});