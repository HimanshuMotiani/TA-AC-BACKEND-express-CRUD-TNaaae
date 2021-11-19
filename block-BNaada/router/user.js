var express = require("express");
var router = express.Router()
var User = require("../model/user")
router.get("/",(req,res)=>{
    User.find({},(err,users)=>{
        if(err) return next(err);
        res.render("users",{users:users})
    })
})
router.get("/:id",(req,res)=>{
    var id = req.params.id;
    User.findById(id,(err,user)=>{
        if(err) return next(err);
        console.log(user);
        res.render("userDetail",{user:user})
    })
})

module.exports = router;
