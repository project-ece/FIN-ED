const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const _ = require("lodash");
const app = express();

app.set('view engine', 'ejs');
 // story array it will be big
 // enter story objects
var story1 = {title:""  , body:" " };
var story2 = {title:"" , body:""};
var story3 = {title:"" , body:""};
var story4 = {title:"" , body:""};
var story5 = {title:"" , body:""};
var story6 = {title:"" , body:""};
var story7 = {title:"" , body:""};
var story8 = {title:"" , body:""};
var story9 = {title:"" , body:""};

 // 
 var story = [story1];
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/" , function(req,res){
  res.sendFile(__dirname+"\\index.html");
});
app.get("/index.html" , function(req,res){
  res.sendFile(__dirname+"\\index.html");
});
app.get("/stories" , function(req,res){
  res.sendFile(__dirname+"\\story.html");
});
app.get("/education" , function(req,res){
  res.sendFile(__dirname+"\\education.html");
});
app.get("/stories/:topic",function(req,res){
var reqtitle =  _.lowerCase(req.params.topic);
let check = 0;
for(let i = 0;i<story.length;i++){
  var storetitle = _.lowerCase(story[i].title);
  console.log(storetitle);
  if(storetitle === reqtitle ){
    res.render("story1" , {Title:story[i].title , Text:story[i].body});
    check = 1;
  }
}
  if(check == 0){
    res.render("story1" , {Title: "404 not found" , body:"Go back to Home"});
  }


  console.log(req.params.topic);
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
