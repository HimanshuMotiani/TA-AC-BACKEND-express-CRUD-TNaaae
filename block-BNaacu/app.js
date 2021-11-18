var express = require("express");
var mongoose = require("mongoose")
var path = require("path")
var app = express();

mongoose.connect("mongodb://localhost/sample",{useNewUrlParser :true,useUnifiedTopology:true},(err)=>{
    console.log(err?err:"connected");
})

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set("view engine","ejs")
app.set("views",path.join(__dirname , "views"));
app.use("/students",require("./routes/students"))



app.use((req,res,next)=>{
    res.send("Page not found")
})

app.listen(5000,()=>{})