const fetchData = async searchTerm => {	
  const response = await axios.get("http://www.omdbapi.com/",{	
    params:{	
      apikey: "190a0d30",	
      s:searchTerm	
      //i:"tt0848228"	
    }	
  });
  
  if(response.data.Error){
    return [];
  }

  // console.log(response.data);	
  return response.data.Search;
} 	

const root = document.querySelector(".autocomplete");
root.innerHTML=`
  <label><b>Search For a Movie</b></label>
  <input class="input" />
  <div class="dropdown ">
    <div class="dropdown-menu">
      <div class="dropdown-content results">
      </div>
    </div>
  </div>
`;

const input = document.querySelector("input");
const dropdown = document.querySelector(".dropdown"); //to open the dropdown
const resultsWrapper = document.querySelector(".results"); //to add the content


//debounce shifted to utils.js


const onInput = async (event) => {
  const movies = await fetchData(event.target.value);
  
  dropdown.classList.add("is-active");

  resultsWrapper.innerHTML='';



  for (let movie of movies) {
    const option  = document.createElement("a");
    const imgSRC = movie.Poster === "N/A" ? "": movie.Poster;

    option.classList.add("dropdown-item")
    option.innerHTML = `
      <img src= "${imgSRC}" />
      ${movie.Title}
    `;

    resultsWrapper.appendChild(option);
  }
};


input.addEventListener("input",debounce(onInput,500));

document.addEventListener("click",event => {
  // console.log(event.target);

  //if root element doesnt contain the element we clicked on
  if(!root.contains(event.target)){
    dropdown.classList.remove("is-active");
  }
})