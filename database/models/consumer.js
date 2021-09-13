const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating consumers schema
const ConsumerSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  consumer_password: String,
  confirm_consumer_password: String,
});

// creating consumer model
const Consumer = mongoose.model("consumer", ConsumerSchema);

module.exports = Consumer;
