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

  return response.data.Search;
} 	
