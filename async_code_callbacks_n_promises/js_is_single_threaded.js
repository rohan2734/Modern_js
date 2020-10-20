// console.log("I Happen first");
// alert("wait for me");
// console.log("I happen second");


console.log("I Happen first");

setTimeout(function(){
  console.log("I happen third");
},3000)
console.log("I happen second");

/**
 * Browsers come with the web APIs that are able to handle
 * certain tasks in background (like making requests or 
 * setTimeout)
 * 
 * The Js call stack recognizes these web API functions and passes
 * them off to the browser to take care of
 * 
 * Once the browser finishes those tasks,they return 
 * and are pushed onto the stack as a callback
 */
