const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/",{
    params:{
      apikey: "190a0d30"
    }
  });
} 
/**
 *  here the params will be apended after the "http://www.omdbapi.com/" as
 *  string
 */
