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
  
  if(!movies.length){
    dropdown.classList.remove("is-active");
    return;
  }

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

    option.addEventListener("click",() => {
      dropdown.classList.remove("is-active")
      input.value = movie.Title;

      //do another request
      //get data
      //render  data

      onMovieSelect(movie);
    });

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

const onMovieSelect = async (movie) => {
  const response = await axios.get("http://www.omdbapi.com/",{	
    params:{	
      apikey: "190a0d30",	
      i: movie.imdbID	
      //i:"tt0848228"	
    }	
  });
  console.log(response.data);
  const movieDetail = response.data;
  console.log(movieDetail);
  document.querySelector("#summary").innerHTML = movieTemplate(response.data)
}

const movieTemplate = (movieDetail) => {
  return `
    <article class="media">
      <figure class="media-left">
        <p class="image">
          <img src="${movieDetail.Poster}"/>
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h1>${movieDetail.Title}</h1>
          <h4>${movieDetail.Genre}</h4>
          <p>${movieDetail.Plot}</p>
        </div>
      </div>
    </article>
    <article class="notification is-primary">
      <p class="title">${movieDetail.Awards}</p>
      <p class="subtitle">Awards</p>
    </article>
    <article class="notification is-primary">
      <p class="title">${movieDetail.BoxOffice}</p>
      <p class="subtitle">BoxOffice</p>
    </article>
    <article class="notification is-primary">
      <p class="title">${movieDetail.Metascore}</p>
      <p class="subtitle">Metascore</p>
    </article>
    <article class="notification is-primary">
      <p class="title">${movieDetail.imdbRating}</p>
      <p class="subtitle">IMDB Rating</p>
    </article>
    <article class="notification is-primary">
    <p class="title">${movieDetail.imdbVotes}</p>
    <p class="subtitle">IMDB Votes</p>
  </article>
  `;
}