function getData(){
  const data = axios.get("https://swapi.dev/api/planets/");
  console.log(data);
}

/**
 * async functions always return a promise
 * 
 * if the function returns a value, the promise will be
 * resolved with that value 
 * 
 * if the function throws an exception, the promise
 * will be rejected
 */

// function greet(){
//   return 'hello!';
// }

// async function greet(){
//   return 'hello!';
// }

// greet().then((val) => {
//   console.log('Promise resolved with: ',val);
// })

// async function add(x,y){
//   if(typeof x !== 'number' || typeof y !== 'number'){
//     throw 'X and Y must be numbers!';
//   }
//   return x+y;
// }

function add(x,y){
  return new Promise((resolve,reject) => {
    if(typeof x !== 'number' || typeof y !== 'number'){
      reject("X and Y must be numbers");
    }
    resolve(x+y);
  })
}

add(6,7).then(val => {
  console.log('prmoise resolved with :',val);
})
.catch(err => {
  console.log('promise rejected with :',err);
});

/**
 * for rejecting a  promise in the async function
 * we can throw a exception
 */



