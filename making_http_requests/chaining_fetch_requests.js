fetch('https://swapi.dev/api/planets/').then((response) => {
  //console.log(response);
  if(!response.ok){
    //console.log('error not status :200',response.status);
    throw new Error(`Status code Error:${response.status}`)
  }
  return response.json();
})
.then((data) => {
  console.log("FETCHED ALL PLANETS(first 10)");
  const filmURL = data.results[0].films[0]
  return fetch(filmURL);
})
.then((response) => {
  //console.log(response);
  if(!response.ok){
    //console.log('error not status :200',response.status);
    throw new Error(`Status code Error:${response.status}`)
  }
  return response.json();
})
.then(data => {
  console.log("fetched first film,based off of first planet ");
  console.log(data);
})
.catch(err => {
  console.log('something went wrong',err)
})