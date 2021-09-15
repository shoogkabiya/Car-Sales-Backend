const router = require("express").Router();

// user handlers imports
const signup = require("../handlers/users/signup");
const signin = require("../handlers/users/signin");

/***Routers***/
//Sign-up
router.post("/user/signup", signup);

//Sign-in
router.post("/user/signin", signin);

module.exports = router;
