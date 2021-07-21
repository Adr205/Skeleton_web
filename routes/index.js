var express = require("express");
var app = express();


app.get("/", (req,res) =>{
    res.render('pages/home',{title:'Home'});
});



module.exports = app;