/**
 * arrays are onjects in js
 * when we assign a function to a array like
 */
const arr=[1,2,3];
arr.sing = function(){console.log("sing....");}

/**
 * function sing is listed under the array, when we type
 * arr in the console 
 * __proto__ is a property that references the array prototype
 * prototype is a template object, and in this case it is for array
 * it contains a bunch of methods,and every array has them
 * 
 * rather then defining the method push and accessing it for every array
 * each array has a reference to the push, with the help of prototype
 */

// String.prototype.grumpus = () => alert("hi");

// const cat="Blue";
// cat.grumpus();
//alerts hi;

String.prototype.yell = function(){ 
  return `${this.toUpperCase()}!!`; 
}

/**
 * we can also overwrite  a function present in the prototype
 */

Array.prototype.pop=function(){
  return "sorry ";
}

/**
 * __proto__ is a property name on the array, or a data 
 * and it is a reference to the prototypes which we wrote on line 33
 * it is reference to the actual prototype
 */