// models imports
const Car = require("../../database/models/cars");

const getCars = async (req, res, next) => {
  let carsObject = await Car.find();
  return res.status(200).send(carsObject);
};

module.exports = getCars;
