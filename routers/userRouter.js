const router = require("express").Router();

const signin = require("../handlers/users/signin");
// user handlers imports
const signup = require("../handlers/users/signup");

/***Routers***/
//Sign-up
router.post("/user/signup", signup);

//Sign-in
router.post("/user/signin", signin);

module.exports = router;
