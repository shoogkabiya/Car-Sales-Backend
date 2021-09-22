// models imports
const Car = require("../../database/models/cars");

const addCars = async (req, res, next) => {
  const newcar = req.body;
  console.log("newcar:", newcar);

  const cars = new Car({
    version: newcar.version,
    year: newcar.year,
    engine: newcar.engine,
    current_milleage: newcar.current_milleage,
    hand: newcar.hand,
    gearbox: newcar.gearbox,
    color: newcar.color,
    original_ownership: newcar.original_ownership,
    next_test: newcar.next_test,
    annual_licensing_fee: newcar.annual_licensing_fee,
    images: newcar.images,
  });

  try {
    const newCar = await cars.save();
    console.log("newCar:", newCar);
    res.status(200).send({ newCar });
  } catch (error) {
    console.log(error);
  }
};
module.exports = addCars;
