require("dotenv").config();
const express = require("express");
const PORT = 4000;
const app = express();
const cors = require("cors");
const Connection = require("./database/connection");

//
app.use(cors());
app.listen(PORT, () => {
  Connection();
  console.log(`Server listen on port : ${PORT}`);
});
