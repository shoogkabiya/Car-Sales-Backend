const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating cars schema
const CarsSchema = new Schema({
  images: String,
  version: String,
  year: Number,
  engine: String,
  current_mileage: String,
  hand: Number,
  gearbox: String,
  color: String,
  original_ownership: String,
  next_test: String,
  annual_licensing_fee: String,
  price: String,
});

// creating cars model
const Cars = mongoose.model("cars", CarsSchema);

module.exports = Cars;
