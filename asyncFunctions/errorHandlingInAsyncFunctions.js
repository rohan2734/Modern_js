// async function getPlanets(){
//   const res = await axios.get("https://wapi.dev/api/planets");
//   console.log(res.data);
// }

// getPlanets().catch(err =>{
//   console.log('IN CATCH',err);
// });

async function getPlanets(){
  try{
    const res = await axios.get("https://wapi.dev/api/planets");
    console.log(res.data);
  }catch(err){
    console.log("in catch",err);
  }
}

getPlanets();