//default delay value of 1000
const debounce = (func,delay = 1000) => {

  let timeoutID;
  //return(arg1,arg2,arg3)
  return (...args) => {
    //console.log(...args);
    if(timeoutID){
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => {
      //func(arg1,arg2,arg3);
      func.apply(null,args);
    },delay)
  };
};