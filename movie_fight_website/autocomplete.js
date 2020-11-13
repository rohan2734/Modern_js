const createAutocomplete = ({
  root,
  renderOption,
  onOptionSelect,
  inputValue,
  fetchData
}) => {
  //const root = document.querySelector(".autocomplete");
  root.innerHTML=`
    <label><b>Search </b></label>
    <input class="input" />
    <div class="dropdown ">
      <div class="dropdown-menu">
        <div class="dropdown-content results">
        </div>
      </div>
    </div>
  `;
  
  const input = root.querySelector("input");
  const dropdown = root.querySelector(".dropdown"); //to open the dropdown
  const resultsWrapper = root.querySelector(".results"); //to add the content
  
  
  //debounce shifted to utils.js
  
  
  const onInput = async (event) => {
    const items = await fetchData(event.target.value);
    
    if(!items.length){
      dropdown.classList.remove("is-active");
      return;
    }
  
    dropdown.classList.add("is-active");
  
    resultsWrapper.innerHTML='';
  
    for (let item of items) {
      const option  = document.createElement("a");
      
      option.classList.add("dropdown-item")
      option.innerHTML = renderOption(item);
  
      option.addEventListener("click",() => {
        dropdown.classList.remove("is-active")
        //input.value = movie.Title;
        input.value = inputValue(item);
        //do another request
        //get data
        //render  data
  
        onOptionSelect(item);
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