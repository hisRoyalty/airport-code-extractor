## airport-code-extractor

The node package airport-code-extractor is a simple package that extracts airport codes from a string. It also has support for symbols and accents!

### **Where should I use this?**

This package is specially useful if you're making a project based on airports, planes, plane tickets etc.


### Installation

````bash
npm install airport-code-extractor
````

### Example


````js
const { getAirportCodes } = require('airport-code-extractor')


console.log(getAirportCodes("George: I really want to go to the Balkans this year. I probably want to go to Istanbul.")) // ['IST']

console.log(getAirportCodes("Joseph: If you're going to the Istanbul, you might as well go to İzmir!")) // ['IST', 'ADB']
````

### Credits

Obviously, me, and this gist -> https://gist.github.com/tdreyno/4278655 which was highly transformed to make the data for this package!
