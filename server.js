require("dotenv").config();
const express = require("express");
const PORT = 4000;
const app = express();
const cors = require("cors");
const Connection = require("./database/connection");

//import Routers
const consumerRouter = require("./routers/consumerRouter");
const userRouter = require("./routers/userRouter");

//
app.use(cors());
app.use(express.json());

//
app.all(/consumer/, consumerRouter);
app.all(/user/, userRouter);

//
app.listen(PORT, () => {
  Connection();
  console.log(`Server listen on port : ${PORT}`);
});
