const router = require("express").Router();

// consumer handlers imports
const signup = require("../handlers/consumers/signup");

/***Routers***/
//Sign-up
router.post("/consumer/signup", signup);

module.exports = router;
