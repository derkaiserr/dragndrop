const express = require("express");
const app = express();
const port = 3000;
const jokes = require("./jokesData");

// callbacks 
function callbackFn1(req,res){
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.json({joke:randomJoke});
    
}
app.get("/api/joke/random",callbackFn1);

app.listen(port,()=>{
    console.log("Server is running on port "+port);
})