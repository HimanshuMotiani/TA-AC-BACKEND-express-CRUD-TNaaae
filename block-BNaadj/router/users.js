var express = require("express");
var router = express.Router();
var User = require("../models/user")

router.post("/", (req, res) => {
    User.create(req.body, (err, singleUser) => {
        if (err) return next(err);
        res.render("singleUser", { singleUser: singleUser });
    })
})
router.get("/new", (req, res) => {
        res.render("userForm");
})
router.get("/", (req, res) => {
    User.find({}, (err, users) => {
        if (err) return next(err);
        res.render("listUsers", { users: users });
    })
})
router.get("/:id", (req, res) => {
    var id = req.params.id
    User.findById(id, (err, singleUser) => {
        if (err) return next(err);
        res.render("singleUser", { singleUser: singleUser });
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

router.get("/:id/delete", (req, res) => {
    var id = req.params.id
    User.findByIdAndDelete(id, (err, deletedUser) => {
        if (err) return next(err);
        res.redirect("/users")
    })
})

// router.put("/:id", (req, res) => {
//     var id = req.params.id
//     User.findByIdAndUpdate(id,req.body, (err, updatedUser) => {
//         if (err) return next(err);
//         res.send("updated, check in mongo");
//     })
// })


module.exports = router;