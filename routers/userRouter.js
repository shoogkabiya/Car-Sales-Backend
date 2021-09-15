const router = require("express").Router();

// user handlers imports
const signup = require("../handlers/users/signup");

/***Routers***/
//Sign-up
router.post("/user/signup", signup);

module.exports = router;
