const btn = document.querySelector('button')

btn.addEventListener('click',function(){
  console.log('moused over me');
  const height=Math.floor(Math.random()*window.innerHeight);
  const width=Math.floor(Math.random()*window.innerWidth);
  btn.style.left=`${width}px`;
  btn.style.top=`${height}px`;
})


btn.addEventListener('click',function(){
  btn.innerText="you got me!";
  // btn.classList.add("changeColor");
  // btn.style.color="red";
  // document.body.style.backgroundColor="green";
})
/**
 * for the size of the window, 
 * on the console, type window.innerWidth and window.innerHeigtht
*/