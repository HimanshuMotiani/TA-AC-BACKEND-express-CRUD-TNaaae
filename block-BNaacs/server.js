var express = require("express");
var mongoose = require("mongoose")
var path = require("path")
var app = express();
mongoose.connect("mongodb://localhost/sample",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    console.log(err?err:"connected");
})

app.use(express.json());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
app.get("/",(req,res)=>{
    res.render("index",{name:"school"})
})

app.listen(3000,()=>{
})
