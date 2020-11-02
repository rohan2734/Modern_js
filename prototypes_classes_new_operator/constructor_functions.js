function hex(r,g,b){
  return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
}

function rgb(r,g,b){
  return `rgb(${r},${g},${b})`
}

function makeColor(r,g,b){
  const color = {};
  color.r = r;
  color.g =g;
  color.b = b;
  color.rgb=function(){
    const {r,g,b} = this;
    return `rgb(${r},${g},${b})`;
  }
  color.hex = function(){
    const {r,g,b} = this;
    return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
  }
  return color;
  
}

const firstColor = makeColor(35,255,150);
firstColor.rgb();
firstColor.hex();

const black = makeColor(0,0,0);
black.rgb();
black.hex();

/**
 * ===  means that , it is a function
 *  if we check 
 *  firstColor.rgb === black.rgb
 *  it results in false, they both dont refer to the same function
 *   but   "hi".slice === "bye".slice
 * returns true, since the slice is in prototype , and since it is same for every string, it returns true
 *  but this is not possible in factory functions, 
 * so here comes the constructor functions
 */

function Color(r,g,b){
  this.r=r;
  this.g =g;
  this.b=b;
  //console.log(this);
  
  //here this console.log(this) prints the window, becuase it is the nearest object
  //since this is now gobal scope

  // this.rgb=function(){
  //   const {r,g,b} = this;
  //   return `rgb(${r},${g},${b})`;
  // }
  /**
   * even if we add this.rgb as a funciton,it doesnt get included in the prototype ,
   * so we do it outside the Color, by Color.prototype.rgb=function(){}
   */
}
Color.prototype.rgb=function(){
  const {r,g,b} = this;
  return `rgb(${r},${g},${b})`;
}

Color.prototype.hex=function(){
  const {r,g,b} = this;
  return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
}

Color.prototype.rgba=function(a=1.0){
  const {r,g,b} = this;
  return `rgba(${r},${g},${b},${a})`;
}
/**
 * here we cant use arrow functions, 
 * we should only use traditional functions,since "this" is used
 * as arrow functions behave differently with the keyword "this"
 */


const color1 = new Color(255,40,100);
const color2 = new Color(0,0,0);
/**
 * when we  call the constructor function color, it is going to create a blank,plain js object
 * links(sets the contstructor of) this object to another object
 * passes the newly created object from  step1 as this context
 * returns this if the fuciton doesnt return its own object;
 * 
 */


