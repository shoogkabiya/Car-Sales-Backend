require("dotenv").config();
const express = require("express");
const PORT = 4000;
const app = express();
const cors = require("cors");
const Connection = require("./database/connection");
const handleError = require("./middlewares/error");

//
app.use(cors());
app.use(express.json());

//import Routers
const consumerRouter = require("./routers/consumerRouter");
const userRouter = require("./routers/userRouter");

//
app.all(/consumer/, consumerRouter);
app.all(/user/, userRouter);

//
app.listen(PORT, () => {
  Connection();
  console.log(`Server listen on port : ${PORT}`);
});

app.use(handleError);
