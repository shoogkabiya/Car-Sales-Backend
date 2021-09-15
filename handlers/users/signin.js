// models imports
const User = require("../../database/models/users");

//
require("dotenv").config();
const bcrypt = require("bcryptjs");

//
const { tokenGenerator } = require("../utils");

const signin = (req, res, next) => {
  const { email, user_password } = req.body;

  if (email && user_password) {
    User.findOne({ email })
      .then((response) => {
        if (response) {
          const { _id: id, user_password: password } = response;
          bcrypt.compare(user_password, password).then((match) => {
            if (!match) {
              if (!match) {
                return res.status(403).json("error generator");
              }
            }
            const access_token = tokenGenerator({
              id,
              role: "user",
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
