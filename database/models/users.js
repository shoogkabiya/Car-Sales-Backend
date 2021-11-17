const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating users schema
const UserSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  confirm_password: String,
  cars: [{ type: mongoose.Schema.Types.ObjectId, ref: "cars" }],
  consumers: [{ type: mongoose.Schema.Types.ObjectId, ref: "consumer" }],
});

// creating user model
const User = mongoose.model("user", UserSchema);

module.exports = User;
