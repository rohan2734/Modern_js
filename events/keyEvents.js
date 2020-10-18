const input=document.querySelector('#username');

input.addEventListener('keydown',function(e){
  console.log('KEY DOWN')
})

input.addEventListener('keyup',function(e){
  console.log('KEY UP')
})

/**
 * key down is occured when key is pressed
 * key up is occured when key is released
 */