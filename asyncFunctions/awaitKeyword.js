// function getPlanets(){
//   return axios.get("https://swapi.dev/api/planets");
// }

// getPlanets().then((res) => {
//   console.log(res.data);
// });

async function getPlanets(){
  const res = await axios.get("https://swapi.dev/api/planets");
  console.log(res.data);
}

/**
 * by using await, js waits for the promise which axios returns
 * it is easy to see what happens next after the promise resolved or rejection
 */

getPlanets();