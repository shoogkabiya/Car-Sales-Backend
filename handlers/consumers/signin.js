// models imports
const Consumer = require("../../database/models/consumer");

//
require("dotenv").config();
const bcrypt = require("bcryptjs");

//
const { tokenGenerator } = require("../utils");

const signin = (req, res, next) => {
  const { email, consumer_password } = req.body;

  if (email && consumer_password) {
    Consumer.findOne({ email })
      .then((response) => {
        if (response) {
          const { _id: id, consumer_password: password } = response;
          bcrypt.compare(consumer_password, password).then((match) => {
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
