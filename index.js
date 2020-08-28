var moment = require('moment'); // require
const validDate = moment('2019-02-28', 'YYYY-MM-DD', true);
console.log(validDate + " is valid? " + validDate.isValid()); 

const invalidDate = moment('2019-02-29', 'YYYY-MM-DD', true);
console.log(invalidDate);
console.log(invalidDate + " is valid? " + invalidDate.isValid());
