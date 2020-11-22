// const message  = require("./myscript");
// require("./myscript");

// require("./myscript");

// console.log(message);
// console.log(require.cache);
const counterObject = require("./myscript");

console.log(counterObject.getCounter());//0
counterObject.incrementCounter() //counter+=1
console.log(counterObject.getCounter()); //1

const newCounterObject = require("./myscript"); 

console.log(newCounterObject.getCounter()); //0 || 1
