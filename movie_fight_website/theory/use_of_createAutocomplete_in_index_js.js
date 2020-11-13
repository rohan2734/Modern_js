createAutocomplete({
  root: document.querySelector("#left-autocomplete"),
  //renderOption: () =>{}
  renderOption(movie){
    const imgSRC = movie.Poster === "N/A" ? "": movie.Poster;
    return  `
    <img src= "${imgSRC}" />
    ${movie.Title} (${movie.Year})
  `;
  },
  onOptionSelect(movie){
    onMovieSelect(movie);
  },
  inputValue(movie){
    return movie.Title;
  },
  async fetchData(searchTerm){	
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
  
    return response.data.Search;
  } 
})