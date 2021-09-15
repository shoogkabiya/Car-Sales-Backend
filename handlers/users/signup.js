// models imports
const User = require("../../database/models/users");

//
const bcrypt = require("bcryptjs");
const tokenGenerator = require("../utils").tokenGenerator;

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
    bcrypt
      .genSalt(10)
      .then((salt) => bcrypt.hash(user_password, salt))
      .then((hash) => {
        const newUser = new User({
          firstname,
          lastname,
          email,
          user_password: hash,
          confirm_user_password,
        });

        newUser.save().then((newuser) => {
          const token = tokenGenerator({ id: newuser, role: "user" });
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
