// models imports
const Car = require("../../database/models/cars");

const getCars = async (req, res, next) => {
  let carsObject = await Car.find();
  return res.status(200).send(carsObject);
};

const getCarByImage = async (req, res, next) => {
  const image = req.body.images;
  try {
    let images = await Car.find({
      images: {
        $eq: image,
      },
    }).populate({ path: "images" });
    console.log("images:", images);

    return res.status(200).send(images);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error");
  }
};

module.exports = { getCars, getCarByImage };
