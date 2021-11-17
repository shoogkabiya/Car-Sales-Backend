// models imports
const Consumer = require("../../database/models/consumer");

//
require("dotenv").config();
const bcrypt = require("bcryptjs");

//
const { tokenGenerator } = require("../utils");

const signin = (req, res, next) => {
  const { email, password } = req.body;

  if (email && password) {
    Consumer.findOne({ email })
      .then((response) => {
        if (response) {
          const { _id: id, password: savedPassword } = response;
          console.log("response:", response);
          bcrypt.compare(password, savedPassword).then((match) => {
            if (!match) {
              if (!match) {
                return res.status(403).json("error generator");
              }
            }
            const access_token = tokenGenerator({
              id,
              role: "consumer",
            });
            res.status(200).send({ access_token });
          });
        } else {
          return res.status(404).send("email not found");
        }
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).send("Server Error");
      });
  }
};

module.exports = signin;
