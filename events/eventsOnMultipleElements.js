const colors=[
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'indigo',
  'violet'
];

/**
 * here we want to loop over the colors 
 * create a div and buttons 
 */

// (1)const changeColor = function(box){
//   console.log(box.style.backgroundColor);
// }

const h1=document.querySelector('h1');
// h1.addEventListener('mouseover',function(){
//   console.log(this.innerText);
//   //here this is refering to h1
// })

const changeColor = function(evt){
  /** here we always get a event object, we can name anything, 
   * we named here evt
  */
  console.log(evt);
  //here this will refer to that object
  // console.log(this.style.backgroundColor);
  const h1=document.querySelector('h1');
  h1.style.color=this.style.backgroundColor;

}

const container = document.querySelector('#boxes');

for(let color of colors){
  const box=document.createElement('div');
  box.style.backgroundColor=color;
  box.classList.add('box');

  container.appendChild(box);

  // (1)box.addEventListener('click',function(){
  //   changeColor(box)
  // });
  /**
   * this would also work but there is also an alternate way
   */

  box.addEventListener('click',changeColor);
  //box.addEventListener('click',changeColor(box));
  /**
   * this doesnt work here, as it would execute immediately
   */
}

document.body.addEventListener('keypress',function(e){
  console.log(e);
});


