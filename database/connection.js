require("dotenv").config();
const mongoose = require("mongoose");
const DATABASE_URL = process.env.DATABASE_URL;

// Connect to mongodb
const connection = async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log(`we're connected!`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connection;
