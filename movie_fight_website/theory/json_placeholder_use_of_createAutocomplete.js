createAutocomplete({
  root: document.querySelector(".autocomplete"),
  //renderOption: () =>{}
  renderOption(movie){
  //   const imgSRC = movie.Poster === "N/A" ? "": movie.Poster;
  //   return  `
  //   <img src= "${imgSRC}" />
  //   ${movie.Title} (${movie.Year})
  // `;

    return `
      <img src="${movie.thumbnailUrl}"/>
      ${movie.title}
    `
  },
  onOptionSelect(movie){
    onMovieSelect(movie);
  },
  inputValue(movie){
    return movie.Title;
  },
  async fetchData(searchTerm){	
    const response = await axios.get("http://jsonplaceholder.typicode.com/photos?albumId=1",{	
      
    });
    
    if(response.data.Error){
      return [];
    }
  
    return response.data;
  } 
})