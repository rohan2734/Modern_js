/**
 * here we are using arrow function , to avoid overriding the value of this
 * when we use arrow function in the class, 
 * if we want to check the value of the this,now,
 * we need to console.log before the function and choose a valid like,
 * now we might think that the console.log would be outside of the class
 * but it is not, it is inside of the class
 * 
 * when we use arrow function, the js, interprets it as a
 * basic or simlestic level, that is 
 
 */

 /*
 function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Timer {
  constructor(durationInput, startButton, pauseButton) {
    /**
     * this is the valid line for conosole.log(this)
     * and this line is , inside the class,so the value of this , is equal to the instance of the class

    _defineProperty(this, "start", () => {
      console.log(this);
    });

    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.startButton.addEventListener('click', this.start);
  }

  importantMethodToCall() {
    console.log("important thing was done");
  }

}
*/

