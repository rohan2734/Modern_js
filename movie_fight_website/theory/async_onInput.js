const fetchData = async searchTerm => {	
  const response = await axios.get("http://www.omdbapi.com/",{	
    params:{	
      apikey: "190a0d30",	
      s:searchTerm	
      //i:"tt0848228"	
    }	
  });	

  // console.log(response.data);	
  return response.data.Search;
} 	

const onInputBeforeAwait =  (event) => {
  const movies =  fetchData(event.target.value);
  console.log(movies);
};



/**
 * here we are making the fetchData as ayncrhronous and we are eventually sending the response
 * but in the onInput, we are considering the fetchData as a synchronous function,
 * at const movies =  fetchData(event.target.value);
 * so to get the data and to get the access to the response we need to wait on fetchData
 * so we add await before the fetchData
 * and we need to make the onInput as async function as well
 */

const onInputAfterAwait = async (event) => {
  const movies =  await fetchData(event.target.value);
  
  for (let movie of movies) {
    const div  = document.createElement("div");

    // div.innerHTML = `
    //   <img src= ${movie.Poster} />
    // `;
    /**
     * here if we are not using "" quotes , then the link in the src would appear like
     * https://sfds without the double quotes
     * but since it shold be in the double quotes, we add double quotes
     * 
     */
    div.innerHTML = `
      <img src= "${movie.Poster}" />
    `;
  }
  /**
   * we are using backticks since we want to write the multiline code, "" these quotes wont allow to write a 
   * multiline code
   */
};