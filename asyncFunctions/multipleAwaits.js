

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

const btn = document.querySelector('button');
async function animateRight(el,amt){
  
  await moveX(el,amt,1000);
  await moveX(el,amt,1000);
  await moveX(el,amt,1000);
  await moveX(el,amt,1000);
  await moveX(el,amt,1000);
  await moveX(el,amt,1000);
  await moveX(el,amt,1000);
  await moveX(el,amt,1000);
  await moveX(el,amt,1000);
  await moveX(el,amt,1000);
}

animateRight(btn,100).catch(err => {
  console.log(err);
  animateRight(btn,-100);
});


// moveX(btn,300,1000)
//   .then(() =>  moveX(btn,300,1000)) //implicit return
//   .then(() => {
//     return moveX(btn,300,1000)
//   })
//   .then(() => {
//     return moveX(btn,300,1000)
//   })
//   .then(() => {
//     return moveX(btn,300,1000)
//   })
//   .then(() => {
//     console.log('DONE WITH BOTH');
//   })
//   .catch(({bodyBoundary,elRight,amount}) => {
//     console.log(`body is ${bodyBoundary}px wide`);
//     console.log(`element is at ${elRight}px,${amount}px is too large`);
//   })

