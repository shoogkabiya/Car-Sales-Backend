const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating consumers schema
const ConsumerSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  confirm_password: String,
});

// creating consumer model
const Consumer = mongoose.model("consumer", ConsumerSchema);

module.exports = Consumer;
