const express = require("express");
const bodyParser = require("body-parser");

const app = express(); 
app.use(bodyParser.urlencoded({extended:true}));
//if we want all of the route handlers to have this middleware applied

app.get("/",(req,res) => { 
    res.send(`
        <div>
            <form method="POST">
                <input name="email" placeholder="email"/>
                <input name="password" placeholder="password"/>
                <input name="passwordConfirmation" placeholder="password confirmation"/>
                <button>Sign Up</button>
            </form>
        </div>
    `)
}); //if anyone sends a request to "/", then we want run the callback function
// and send the response.

// MIDDLEWARE- bodyparser
app.post("/" ,(req,res) => {
    //get access to email,password,passwordConfirmation
    //console.log(req.body);
    res.send("Account created !!!");
}); 

app.listen(3000,() => {
    console.log("listening");
});


