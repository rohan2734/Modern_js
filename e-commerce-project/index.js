const express = require("express");

const app = express(); 

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

// MIDDLEWARE

const bodyParser = (req,res,next) => {
    if(req.method === "POST"){
        req.on("data",data => {
            const parsed = data.toString("utf8").split("&");
            const formData = {};
            for(let pair of parsed){
                const [key,value] = pair.split("=");
                formData[key]=value;
            }
            // console.log(formData);
            req.body = formData;
            next();
        })
    }else{
        next(); //callback 
    }
    
    
}

app.post("/",bodyParser ,(req,res) => {
    //get access to email,password,passwordConfirmation
    //console.log(req.body);
    res.send("Account created !!!");
}); 

app.listen(3000,() => {
    console.log("listening");
});


