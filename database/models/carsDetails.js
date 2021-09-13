const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ImagesSchema = require("./images");
const CarsSchema = require("./cars");

// creating cars schema
const carsDetailsSchema = new Schema({
  images: [[ImagesSchema]],
  carsdetails: [{ type: CarsSchema, ref: "cars" }],
});

// creating cars model
const CarsDetails = mongoose.model("cars", carsDetailsSchema);
module.exports = CarsDetails;
