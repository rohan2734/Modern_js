const createAutocomplete = ({root}) => {
  //const root = document.querySelector(".autocomplete");
  /**
   * since the root element is going to be varied, 
   * we are expecting it in the config object,
   * where we are destructuring a root object
  */
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
  // const input = document.querySelector("input");
  // const dropdown = document.querySelector(".dropdown"); //to open the dropdown
  // const resultsWrapper = document.querySelector(".results"); //to add the content
  /**
   * here instead of searching on the whole document, 
   * we are only concerned about the root
   */
  
  const input = root.querySelector("input");
  const dropdown = root.querySelector(".dropdown"); //to open the dropdown
  const resultsWrapper = root.querySelector(".results"); //to add the content
  
  
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


}

/**
 * we will be passing the root object inside the createAutocomplete as
 */
createAutocomplete({
  root: document.querySelector.apply(".autocomplete")
})