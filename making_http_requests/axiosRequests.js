/**
 * unlike fetch axios doesnt need to do json parse
 * data is json parsed and received
 * we dont need to check the status and reject manually
 */

// axios.get("https://swapi.dev/api/planets/").then(res => {
//   console.log(res.data);
// }).catch(err => {
//   console.log("in catch callback",err)
// })


const fetchNextPlanets = (url="https://swapi.dev/api/planets") => {
  return axios.get(url);
}

const printPlanets = (({data}) => {
  console.log("load more")
  for(let planet of data.results){
    console.log(planet.name);
  }
  // return fetchNextPlanets(data.next);
  return Promise.resolve(data.next);
})

// fetchNextPlanets()
// .then(printPlanets)
// .then(printPlanets)

fetchNextPlanets()
.then(printPlanets)
.then(fetchNextPlanets)
.then(printPlanets)
.catch(err => {
  console.log('ERROR',err);
})