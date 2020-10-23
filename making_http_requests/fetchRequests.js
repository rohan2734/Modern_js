fetch('https://swapi.dev/api/pladnets/').then((response) => {
  //console.log(response);
  if(!response.ok){
    //console.log('error not status :200',response.status);
    throw new Error(`Status code Error:${response.status}`)
  }
    response.json().then((data) => {
      //console.log(data);
      for(let planet of data.results){
        console.log(planet.name)
      }
    })
})
.catch(err => {
  console.log('something went wrong',err)
})

/**
 * fetch's response.then is executed, even when 404 status is returned
 * 
 */