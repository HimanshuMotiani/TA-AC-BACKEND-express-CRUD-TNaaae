var express = require("express");
var router = express.Router()

router.get("/new", (req, res) => {
    res.render("studentForm");
})
router.get("/", (req, res) => {
    res.render("students", { list: ["ankit", "suraj", "prashant", "ravi"] });
})
router.post("/", (req, res) => {
    console.log(req.body);
})
router.get("/:id", (req, res) => {
    res.render("studentDetail", {
        student: { name: "rahul", email: "rahul@altcampus.io" },
    });
})

module.exports = router