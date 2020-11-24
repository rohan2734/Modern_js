const express = require("express");

const app = express(); 

app.get("/",(req,res) => { 
    res.send("hi there")
}); //if anyone sends a request to "/", then we want run the callback function
// and send the response.

app.listen(3000,() => {
    console.log("listening");
});


