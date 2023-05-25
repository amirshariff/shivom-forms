const express = require('express');
const { request } = require('http');
const path = require("path");
const generatorRoute = require("./routes/generatorRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// register view engine
app.set("view engine", "ejs");


app.get("/", (req, res)=>{
    res.render("index");
    
});

app.use(generatorRoute);

app.listen(80, ()=>{
    console.log("listen on port 80");
});
