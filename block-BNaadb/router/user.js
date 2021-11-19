var express = require("express");
var router = express.Router();
var User = require("../model/user")


// router.get("/new", (req, res) => {
//     res.render("userForm")
// })
// router.post("/", (req, res, next) => {
//     User.create(req.body, (err, userCreated) => {
//         if (err) return res.redirect("/users/new")
//         res.redirect("/")
//     })

// })

router.get("/", (req, res) => {
    User.find({}, (err, users) => {
        if (err) return next(err);
        res.render("users", { users: users })
    })
})
router.get("/:id", (req, res) => {
    var id = req.params.id;
    User.findById(id, (err, user) => {
        if (err) return next(err);
        res.render("userDetail", { user: user })
    })
})
router.get("/:userId/edit", (req, res) => {
    var id = req.params.userId;
    User.findById(id, (err, user) => {
        if (err) return next(err);
        res.render("editForm", { user: user })
    })
})
router.post("/:userId", (req, res) => {
    var id = req.params.userId;
    User.findByIdAndUpdate(id,req.body, (err, updatedUser) => {
        console.log(updatedUser);
        if (err) return next(err);
        res.redirect("/users")
    })
})
router.get("/:userId/delete", (req, res) => {
    var id = req.params.userId;
    User.findByIdAndDelete(id,req.body, (err, updatedUser) => {
        console.log(updatedUser);
        if (err) return next(err);
        res.redirect("/users")
    })
})



module.exports = router;