const request = require('request');
const yargs = require('yargs');

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

var address = encodeURIComponent(argv.address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyD0-k4cxUicapLyPVElQ-B2grMlZgzxWEY`,
    json: true
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
});