const fs  = require("fs");

fs.readdir(process.cwd(),(err,filenames) => {
  //Either
  //err === an object ,which means something went wrong
  //OR
  // err === null, which means everything is ok
  
  if(err){
    //error handling code
    console.log(err);
    //throw new Error(err);
    return;
  }

  console.log(filenames);
});






