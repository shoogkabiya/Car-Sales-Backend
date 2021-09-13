const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating users schema
const UserSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  user_password: String,
  confirm_user_password: String,
});

// creating user model
const User = mongoose.model("user", UserSchema);

module.exports = User;
