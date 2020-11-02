class Timer {

  constructor(durationInput,startButton,pauseButton){
    this.durationInput =durationInput;
    this.startButton = startButton;
    this.pauseButton=pauseButton;  
    
    //this.timeRemaining = 30;
    this.startButton.addEventListener('click',this.start);
    this.pauseButton.addEventListener('click',this.pause);
  }

  start = () => {
    this.tick();
    this.interval =setInterval(this.tick,1000); 
    //this.interval means intervalID
  };

  pause = () => {
    clearInterval(this.interval); //intervalID
  }
  importantMethodToCall(){
    console.log("important thing was done")
  }
  tick = () => {
    //this.timeRemaining = this.timeRemaining - 1
    //this.durationInput.value = this.timeRemaining
    console.log("tick");
  }
  
}

/**
 * here the method 1 is store the timeRemaining in the instance, 
 *  and update it in the tick function and assign it to the durationInput 
 * 
 * the other method is to store the time left in the DOM, and send the time remaning to the class
 * so that even when the user wants to change the time, he can do it easily,
 * without having to add a  event listener to it
 */ 