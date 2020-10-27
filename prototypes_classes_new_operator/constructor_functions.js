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