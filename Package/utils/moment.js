//library to work with dates
const moment = require('moment');

let now = moment();

console.log(moment);
console.log(now.toString());
console.log(now.format('YYYY/MM/DD - HH:mm'));