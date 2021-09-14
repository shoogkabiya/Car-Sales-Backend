// models imports
const Consumer = require("../../database/models/consumer");

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

    const newConsumer = new Consumer({
      firstname,
      lastname,
      email,
      consumer_password,
      confirm_consumer_password,
    });

    newConsumer.save().then((newconsumer) => {
      return res.status(200).json(newconsumer);
    });
  } catch (error) {
    res.status(500).json("server error");
  }
};

module.exports = signup;
