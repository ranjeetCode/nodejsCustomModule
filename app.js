//Including arithmatic module and obj will act like object of arithmatic module
var obj = require('./arithmaticMod.js');

console.log('Addition: '+ obj.addNumber(5,10));
console.log('Substraction: '+ obj.subNumber(10,5));
console.log('Multiplication: '+ obj.mulNumber(10,5));
console.log('Division: '+ obj.divNumber(10,5));