const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating cars schema
const CarsSchema = new Schema({
  version: String,
  year: Number,
  engine: String,
  current_milleage: String,
  hand: Number,
  gearbox: String,
  color: String,
  original_ownership: String,
  next_test: String,
  annual_licensing_fee: String,
});

// creating cars model
const Cars = mongoose.model("cars", CarsSchema);

module.exports = Cars;
