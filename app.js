const express = require("express");
const logger = require("morgan");
const path = require("path");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("index", {user: "Jeremy", info: ["Video Game", "Fishing" , "Sleep"]});
});

app.get("/photo-fun", function(req,res){
    res.render("photos");
})


app.listen(3000, function(){
    console.log("Server started in port 3000");
});