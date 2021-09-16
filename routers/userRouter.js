const router = require("express").Router();

// user handlers imports
const signup = require("../handlers/users/signup");
const signin = require("../handlers/users/signin");
const addCars = require("../handlers/users/addCars");
const verifyUser = require("../middlewares/auth");

/***Routers***/
//Sign-up
router.post("/user/signup", signup);

//Sign-in
router.post("/user/signin", signin);

//addCars
router.post("/user/addCars", verifyUser("user"), addCars);

module.exports = router;
