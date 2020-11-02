//DEMONSTRATION OF VALUE OF THIS

/** FIRST WAY : ARROW FUNCTION */
// console.log(this);
// const printThis = () => {
//   console.log(this);
// }
// printThis();

// const colors = {
//   printColor(){

//     console.log(this); //returns colors object
//     const printThis = () => {
//       console.log(this);
//     }
//     printThis();
//   }
// }

// colors.printColor();

/**SECOND CASE: DID YOU CALL WITH 'BIND','CALL','APPLY' */

/** bind , call and apply are builtin js functions that belong to all functions that we create
 * we can call the funciton with bind in a very special way
*/ 

// const printThis = function(){
//   console.log(this);
// }

// //printThis.call({color:'red'});//color:red
// //printThis.apply({color:'red'}); //color:red
// printThis.bind({color:'red'});
// //printThis();  //window
/**
 * when we are going to execute this, the value of this, inside the above fn will be {color:red} object
 * 
 */

/** CASE  3: ALL OTHER CASES */

const colors = {
  printColor(){
    console.log(this);
  }
}

// colors.printColor();
const randomObject = {
  a:1
};

randomObject.printColor = colors.printColor;
randomObject.printColor();
/**
 * here the line  randomObject.printColor = colors.printColor;
 * we are writing this as to create  a new method for randomeObject, as we did for colors
 * we are just giving the reference, instead of writing again
 * 
 * but, in the line randomObject.printColor();, this would call the printColor of the randomObject, 
 * but not the prntCOlor of the randomObject
 * 
 */