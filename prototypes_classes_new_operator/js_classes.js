// function Color(r,g,b){
//   this.r=r;
//   this.g =g;
//   this.b=b;
// }
// Color.prototype.rgb=function(){
//   const {r,g,b} = this;
//   return `rgb(${r},${g},${b})`;
// }

// Color.prototype.hex=function(){
//   const {r,g,b} = this;
//   return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
// }

// Color.prototype.rgba=function(a=1.0){
//   const {r,g,b} = this;
//   return `rgba(${r},${g},${b},${a})`;
// }

// const color1 = new Color(255,40,100);
// const color2 = new Color(0,0,0);

/**
 * a consttructor is called immediately whenever a new color or object is created
 */

class Color{
  constructor(r,g,b,name){
    // console.log('INSIDE CONSTRUCTOR');
    // console.log(r,g,b);
    this.r=r;
    this.g=g;
    this.b=b;
    //this.colorName=name; //this will also work , but we usually follow with the same name
    this.name=name;
    /**
     * these are going to be added as properties 
     * on the color object which we return
     */
  }
  greet(){
    return `hello from a ${this.name}!`;
  }
  rgb(){
    const {r,g,b} = this;
    return `rgb(${r},${g},${b})  and ${this.greet()}`;
  }
  hex(){
    const {r,g,b} = this;
    return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
  }
  rgba(a=1.0){
    const {r,g,b} = this;
    return `rgba(${r},${g},${b},${a})`;
  }
}

const c1 = new Color(255,67,89,"tomato");
