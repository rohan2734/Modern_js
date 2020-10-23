// fetch('https://swapi.dev/api/planets/')
//   .then((response) => {
//     //console.log(response);
//     if(!response.ok){
//       //console.log('error not status :200',response.status);
//       throw new Error(`Status code Error:${response.status}`)
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log("FETCHED ALL PLANETS(first 10)");
//     for(let planet of data.results){
//       console.log(planet.name);
//     }
//     const nextURL = data.next;
//     return fetch(nextURL);
//   })
//   .then((response) => {
    
//     if(!response.ok){
      
//       throw new Error(`Status code Error:${response.status}`)
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log("fetched next 10 planets ");
    
//     for(let planet of data.results){
//       console.log(planet.name);
//     }
//   })
//   .catch(err => {
//     console.log('something went wrong',err)
//   })



const checkStatusAdParse = (response) => {
  if(!response.ok){
    //console.log('error not status :200',response.status);
    throw new Error(`Status code Error:${response.status}`)
  }
  return response.json();
}

const printPlanets = (data) => {
  console.log("loaded 10 more planets");
  for(let planet of data.results){
    console.log(planet.name);
  }
  // const p = new Promise((resolve,reject) => {
  //   resolve(data);
  // })

  // return p;
  return Promise.resolve(data.next);
}

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
  return fetch(url);
}
fetchNextPlanets()
  .then(checkStatusAdParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAdParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAdParse)
  .then(printPlanets)
  .catch(err => {
    console.log('something went wrong',err)
  })