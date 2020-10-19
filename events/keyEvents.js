const input=document.querySelector('#username');

input.addEventListener('keydown',function(e){
  console.log('KEY DOWN')
})

input.addEventListener('keyup',function(e){
  console.log('KEY UP')
})

input.addEventListener('keypress',function(e){
  console.log('KEY PRESS!')
})

/**
 * key down is occured when key is pressed
 * key up is occured when key is released
 * to avoid calls of function on pressing the "ctrl,shift,fn"
 * so we use keypress
 */

const addItemInput = document.querySelector("#addItem");
const itemsUL=document.querySelector("#items");

addItemInput.addEventListener("keypress",function(e){
  if(e.key === "Enter"){
    //add a new item to list
    const newItemText=this.value;
    const newItem=document.createElement('li');
    newItem.innerText=newItemText;
    itemsUL.appendChild(newItem);
    this.value="";
  }
})