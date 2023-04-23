const router = require("express").Router();

router.get("/user-profile", (req, res) => res.render("users/user-profile"));

module.exports = router;
