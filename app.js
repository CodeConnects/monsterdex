const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 3));
    }
});