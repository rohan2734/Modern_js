
class Timer {

  constructor(durationInput,startButton,pauseButton){
    this.durationInput =durationInput;
    this.startButton = startButton;
    this.pauseButton=pauseButton;  
    
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
    const timeRemaining = parseFloat(this.durationInput.value); //this is going to be a string
    this.durationInput.value = timeRemaining - 1; 
  }
  
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput,startButton,pauseButton);
//timer.start();

