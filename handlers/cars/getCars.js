// models imports
const Car = require("../../database/models/cars");

const getCars = async (req, res, next) => {
  let carsObject = await Car.find();
  return res.status(200).send(carsObject);
};

const getCarByImage = async (req, res, next) => {
  const images = req.body.images;
  try {
    let imagesObj = await Car.find({
      images: images,
    });
    return res.status(200).json(imagesObj);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error");
  }
};

module.exports = { getCars, getCarByImage };
