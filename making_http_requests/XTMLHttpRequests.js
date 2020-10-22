// function reqListener () {
//   console.log(this.responseText);
// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "http://www.example.org/example.txt");
// oReq.send();


const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load',function() {
  console.log('it worked');
  const data = JSON.parse(this.responseText);
  //console.log(data);
  for(let planet of data.results){
    console.log(planet.name)
  }
})
firstReq.addEventListener('error',() => {
  console.log('ERROR!!');
})
firstReq.open('GET','https://swapi.com/api/planets/');
firstReq.send();
console.log('Request sent!');

