// function reqListener () {
//   console.log(this.responseText);
// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "http://www.example.org/example.txt");
// oReq.send();


const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load',function() {
  console.log('FIRST REQUEST');
  const data = JSON.parse(this.responseText);
  const filmURL = data.results[0].films[0];

  const filmReq = new XMLHttpReques();
  filmReq.addEventListener('load',function(){
    const filmData = JSON.parse(this.responseText);
    console.log(filmData);
  })
  filmReq.addEventListener('error',function(e){
    console.log("ERROR!!",e);
  })

  filmReq.open('GET',filmURL);
  filmReq.send();
})
firstReq.addEventListener('error',() => {
  console.log('ERROR!!');
})
firstReq.open('GET','https://swapi.dev/api/planets/');
firstReq.send();
console.log('Request sent!');

