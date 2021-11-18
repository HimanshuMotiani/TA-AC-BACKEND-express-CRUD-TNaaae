var express = require("express")
var router = express.Router()

// - list users
// - get single user details
// - new user form
// - delete user
// - update user
router.get("/",(req,res)=>{
    res.render("users",{list:["rohit","manan","anuj","akshay"]});
})
router.get("/new",(req,res)=>{
    res.render("userForm")
})
router.get("/:id",(req,res)=>{
    res.render("singleUser",{user:{name:"himanshu",email:"himanshu.motiani93@gmail.com"}})
})

router.delete("/:id",(req,res)=>{
    
})
router.put("/:id",(req,res)=>{
    
})
router.post("/",(req,res)=>{
    console.log(req.body);
    // res.send(req.body)
})

module.exports = router;