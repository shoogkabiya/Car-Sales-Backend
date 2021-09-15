const router = require("express").Router();

// consumer handlers imports
const signin = require("../handlers/consumers/signin");
const signup = require("../handlers/consumers/signup");

/***Routers***/
//Sign-up
router.post("/consumer/signup", signup);

//Sign-in
router.post("/consumer/signin", signin);

module.exports = router;
