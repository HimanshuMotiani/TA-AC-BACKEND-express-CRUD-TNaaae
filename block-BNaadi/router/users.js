var express = require("express");
var router = express.Router();
var User = require("../models/user")

router.post("/", (req, res) => {
    User.create(req.body, (err, createdUser) => {
        if (err) return next(err);
        res.redirect("/users");
    })
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
router.put("/:id", (req, res) => {
    var id = req.params.id
    User.findByIdAndUpdate(id,req.body, (err, updatedUser) => {
        if (err) return next(err);
        res.send("updated, check in mongo");
    })
})
router.delete("/:id", (req, res) => {
    var id = req.params.id
    User.findByIdAndDelete(id, (err, deletedUser) => {
        if (err) return next(err);
        res.send("deletedUser, check in mongo");
    })
})

module.exports = router;