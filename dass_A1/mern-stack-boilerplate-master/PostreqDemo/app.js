var express=require("express");
var app=express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT=3001;
app.get("/",function(req,res){
    res.send("Welcome to home page");
});
app.post("/register",function(req,res){
    res.send(req.body.name);
});
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
