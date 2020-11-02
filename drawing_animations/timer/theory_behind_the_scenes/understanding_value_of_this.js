class Timer {

  constructor(durationInput,startButton,pauseButton){
    this.durationInput =durationInput;
    this.startButton = startButton;
    this.pauseButton=pauseButton;  
  
    this.startButton.addEventListener('click',this.start);
  }

  start = () => {
    console.log(this);
    /**
     * here when we console.log(this) we get the durationInput,startButton,pauseButton at the time of creating an instance of a class
     * but when we click on the start button, we only see the console.log of the button with id="#start"
     * that means that , we cannot access other properties of the class, which is very wierd behaviour 
     */
    //console.log("time to start the timer!");
    this.importantMethodToCall() 
    /**
     * now this importantMethod is called, when we have created the instance of the class
     * but , when we click on the start button, there is an error, becuase
     * this.importantMethod, here this is refering something else, when compared to the this, when we created the object
     * 
     */
    /**
     * if we ever want to call a method inside a method in the class , 
     * or call a method inside the class,
     * the value of this is important,and
     * it must be set to the instance of the class
     */
    /**
     * here when we call the start method inside the class, the value of this is overriden
     * it is equal to button
     */
  }
  importantMethodToCall(){
    console.log("important thing was done")
  }
  
}