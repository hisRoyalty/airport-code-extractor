const fs = require('fs');
const decancer = require('decancer')

const airportCodes = JSON.parse(fs.readFileSync('./data/airportCodes.json', 'utf-8'));
/**
 * @param {string} String to extract airport codes from.
 * @description Returns the airport codes for the cities in the string. If not, it returns.
 */


function getAirportCode(string) {
    let words = string.split(" ");
    let matchingCodes = [];
    for (var i = 0; i < airportCodes.length; i++) {
        let cityWords = airportCodes[i].city.split(" ");
        let match = true;
        for (var j = 0; j < cityWords.length; j++) {
            if (!decancer(string.toLowerCase()).toString().includes(decancer(cityWords[j].toLowerCase()).toString())) {
                match = false;
                break;
            }
        }
        if (match) {
            matchingCodes.push(airportCodes[i].code);
        }
    }
    if (matchingCodes.length > 0) {
        return matchingCodes;
    }
}

module.exports = {
    getAirportCode
}



