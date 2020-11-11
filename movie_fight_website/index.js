const fetchData = async () => {	
  const response = await axios.get("http://www.omdbapi.com/",{	
    params:{	
      apikey: "190a0d30",	
      // s:"avengers"	
      i:"tt0848228"	
    }	
  });	

  console.log(response.data);	
} 	

const input = document.querySelector("input");

let timeoutID;

const onInput = event => {
  if(timeoutID){
    clearInterval(timeoutID);
  }
  timeoutID = setTimeout(() => {
    fetchData(event.target.value);
  },500);
};

input.addEventListener("input",onInput);
