// models imports
const Car = require("../../database/models/cars");

const getCars = async (req, res, next) => {
  const id = req.body;
  let carsObject = await Car.find();
  return res.status(200).json(carsObject);
};

module.exports = getCars;
