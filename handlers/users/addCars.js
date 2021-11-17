// models imports
const Car = require("../../database/models/cars");

const addCars = async (req, res, next) => {
  const newcar = req.body.newcar;
  console.log("newcar:", newcar);

  const cars = new Car({
    images: newcar.images,
    version: newcar.version,
    year: newcar.year,
    engine: newcar.engine,
    current_mileage: newcar.current_mileage,
    hand: newcar.hand,
    gearbox: newcar.gearbox,
    color: newcar.color,
    original_ownership: newcar.original_ownership,
    next_test: newcar.next_test,
    annual_licensing_fee: newcar.annual_licensing_fee,
  });
  console.log("cars:", cars);
  try {
    const newCar = await cars.save();
    console.log("newCar:", newCar);
    res.status(200).send({ newCar });
  } catch (error) {
    console.log(error);
  }
};
module.exports = addCars;
