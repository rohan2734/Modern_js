// const willGetYouADog = new Promise((resolve,reject) => {
//   const rand = Math.random();
//   if(rand<0.5){
//     resolve()
//   }else{
//     reject();
//   }
// })
// willGetYouADog.then(() => {
//   console.log("yay we got a dog!!!");
// }).catch(() => {
//   console.log("No Dog")
// })

const makeDogPromise = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const rand = Math.random();
    if(rand<0.5){
      resolve()
    }else{
      reject();
    }
    },5000);
  });
}

// makeDogPromise()
// .then(() => {
//   console.log("yay we got a dog!!!");
// }).catch(() => {
//   console.log("No Dog")
// })

// const willGetYouADog = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     const rand = Math.random();
//   if(rand<0.5){
//     resolve()
//   }else{
//     reject();
//   }
//   },5000);
// })
// willGetYouADog.then(() => {
//   console.log("yay we got a dog!!!");
// }).catch(() => {
//   console.log("No Dog")
// })

const fakeRequest = url => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const pages = {
        '/users':[
          {id:1,username:"Bilbo"},
          {id:5,username:"Esmeralda"}
        ],
        '/about':"This is a about page!"
      };
      const data=pages[url];
      if(data){
        resolve({status:200,data});
      }else{
        reject({status:404});
      }
      
    },1000)
  });
}

fakeRequest('/about')
.then((res) => {
  console.log(res.status);
  console.log(res.data);
  console.log("REQUEST WORKED!");
})
.catch((res) => {
  console.log(res.status);
  console.log("REQUEST FAILED");
})

fakeRequest('/users')
.then((res) => {
  console.log(res.status);
  console.log(res.data);
  console.log("REQUEST WORKED!");
})
.catch((res) => {
  console.log(res.status);
  console.log("REQUEST FAILED");
})
fakeRequest('/dogs')
.then((res) => {
  console.log(res.status);
  console.log(res.data);
  console.log("REQUEST WORKED!");
})
.catch((res) => {
  console.log(res.status);
  console.log("REQUEST FAILED");
})

