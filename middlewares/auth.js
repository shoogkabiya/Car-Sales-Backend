const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.SECRET;

const verifyUser = (userRole) => {
  return (req, res, next) => {
    console.log(req.headers);
    const { access_token } = req.headers;
    if (access_token) {
      try {
        const decrypt_access_token = jwt.verify(access_token, SECRET);
        const { id, role } = jwt.verify(access_token, SECRET);

        if ((decrypt_access_token.role = userRole)) {
          req.body.id = id;
          req.body.role = role;
          return next();
        } else {
          const error = new Error(`Not an ${userRole}`);
          console.log("404");
          next(error);
        }
      } catch (error) {
        error = new Error("access_token illegal");
        error.status = 403;
        next(error);
      }
    } else {
      const error = new Error("access_token should be included in the headers");
      next(error);
    }
  };
};

module.exports = { verifyUser };
