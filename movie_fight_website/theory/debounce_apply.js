const debounce = (func) => {

  let timeoutID;
  //return(arg1,arg2,arg3)
  return (...args) => {
    if(timeoutID){
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => {
      //func(arg1,arg2,arg3);
      func.apply(null,args);
      /**
       * here the apply funcitonality is,
       * it calls the function, as we normally would
       * it takes all the args at func.apply(null,args) and passes it as seperate arguments to the func
       *  
       */
    },1000)
  };
};

// let timeoutID;

// const onInput = event => {
//   if(timeoutID){
//     clearInterval(timeoutID);
//   }
//   timeoutID = setTimeout(() => {
//     fetchData(event.target.value);
//   },500);
// };

// const onInput = debounce(event => {
//   fetchData(event.target.value);
// });

const onInput = event => {
  fetchData(event.target.value);
};


input.addEventListener("input",onInput);
input.addEventListener("input",de(onInput));