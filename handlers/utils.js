//In this file, we will put all the functions that can be reused, such as creating an token//

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const SECRET = process.env.SECRET;

const tokenGenerator = (obj) => {
  const token = jwt.sign(obj, SECRET);
  return token;
};

module.exports = { tokenGenerator };
