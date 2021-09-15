// models imports
const User = require("../../database/models/users");

const signup = async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    user_password,
    confirm_user_password,
  } = req.body;

  try {
    const userfound = await User.findOne({ email });

    if (userfound) {
      return res.status(400).json("email already exists");
    }

    const newUser = new User({
      firstname,
      lastname,
      email,
      user_password,
      confirm_user_password,
    });

    newUser.save().then((newuser) => {
      return res.status(200).json(newuser);
    });
  } catch (error) {
    res.status(500).json("server error");
  }
};

module.exports = signup;
