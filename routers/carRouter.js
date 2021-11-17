const router = require("express").Router();
//handlers imports
const getCars = require("../handlers/cars/getCars");
//getCars
router.get("/car/getCars", getCars);

module.exports = router;
