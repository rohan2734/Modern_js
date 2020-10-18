//EVENTS 

//the thing             event type           code to run
//button               click                change color
//input                 hits return          get search results
//image                 hover                display the image caption

// const btn=document.querySelector('#clicker');

// btn.onclick = function(){
//   console.log("You clicked me , go away")
// }

// btn.ondblclick = function(){
//   console.log("You  double clicked me , go away")
// }

const btn = document.querySelector('button');

// btn.onclick=function(){
//   console.log("YOU CLICKED ME!!");
// }

// btn.onclick=function(){
//   console.log("you clicked me second time");
// }

/**
 * if we wanted a second event listener, on the same button, 
 * we cant do that 
 * even if we do that, only the second one is executed
 * because we overwrote that property
 * but we add two or more events with addEventlistener
 * and the events cannot be passed as "onclick" 
 * but they are to be passed  as "click"
 */


btn.addEventListener('click',function(){
  alert("You clicked me")
});

btn.addEventListener('click',function(){
  console.log("second event clicked")
});

btn.addEventListener('mouseover',function(){
  btn.innerText="Stop hovering on me"
});

btn.addEventListener('mouseout',function(){
  btn.innerText="Click Me!"
});

window.addEventListener('scroll',function(){
  console.log("stop scrolling!!");
})