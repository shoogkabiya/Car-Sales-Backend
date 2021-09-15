// models imports
const Consumer = require("../../database/models/consumer");

//
const bcrypt = require("bcryptjs");

const tokenGenerator = require("../utils").tokenGenerator;

const signup = async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    consumer_password,
    confirm_consumer_password,
  } = req.body;

  try {
    const consumerfound = await Consumer.findOne({ email });

    if (consumerfound) {
      return res.status(400).json("email already exists");
    }
    bcrypt
      .genSalt(10)
      .then((salt) => bcrypt.hash(consumer_password, salt))
      .then((hash) => {
        const newConsumer = new Consumer({
          firstname,
          lastname,
          email,
          consumer_password: hash,
          confirm_consumer_password,
        });
        newConsumer.save().then((newconsumer) => {
          const token = tokenGenerator({ id: newconsumer, role: "consumer" });
          const objToSend = {
            access_token: token,
            msg: "email created successfuly",
          };
          return res.status(200).json(objToSend);
        });
      });
  } catch (error) {
    res.status(500).json("server error");
  }
};

module.exports = signup;
