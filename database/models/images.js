const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating images schema
const ImagesSchema = new Schema({
  number: Number,
  url: String,
});

module.exports = ImagesSchema;
