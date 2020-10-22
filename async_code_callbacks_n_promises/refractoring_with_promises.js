const btn = document.querySelector('button');

const moveX = (element,amount,delay) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {

      const bodyBoundary=document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
  
      if(elRight + amount > bodyBoundary){
        reject({bodyBoundary,elRight,amount});
      }
      else{
        element.style.transform=`translate(${currLeft + amount}px)`;
        resolve();
      }
      
    },delay);
  })
}

moveX(btn,300,1000)
  .then(() =>  moveX(btn,300,1000)) //implicit return
  .then(() => {
    return moveX(btn,300,1000)
  })
  .then(() => {
    return moveX(btn,300,1000)
  })
  .then(() => {
    return moveX(btn,300,1000)
  })
  .then(() => {
    console.log('DONE WITH BOTH');
  })
  .catch(({bodyBoundary,elRight,amount}) => {
    console.log(`body is ${bodyBoundary}px wide`);
    console.log(`element is at ${elRight}px,${amount}px is too large`);
  })

// const moveX = (element,amount,delay,onSuccess,onFailure) => {
//   setTimeout(() => {

//     const bodyBoundary=document.body.clientWidth;
//     const elRight = element.getBoundingClientRect().right;
//     const currLeft = element.getBoundingClientRect().left;

//     if(elRight + amount > bodyBoundary){
//       onFailure();
//     }
//     else{
//       element.style.transform=`translate(${currLeft + amount}px)`;
//       onSuccess();
//     }
    
//   },delay);
// }

// moveX(btn,100,1000,() => {
//   //sucess
//   moveX(btn,400,1000,() => {
//     //success
//     moveX(btn,700,1000,() => {
//       //sucess
//       console.log("screen left?")
//     },() => {
//       alert("cannot move further")
//     })
//   },() => {
//     //fail
//     alert('cannot move further');
//   })
// },() => {
//   //fail
//   alert('cannot move further');
// })