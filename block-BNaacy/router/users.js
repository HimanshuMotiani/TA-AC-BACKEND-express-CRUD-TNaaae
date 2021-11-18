var express = require("express");
var router = express.Router();
var User = require("../model/user")


router.get("/new",(req,res)=>{
    res.render("userForm")
})
router.post("/",(req,res,next)=>{
    User.create(req.body,(err,userCreated)=>{
        if (err) return res.redirect("/users/new")
        res.redirect("/")
    })
    
})

module.exports = router;