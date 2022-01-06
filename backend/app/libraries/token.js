const jwt = require("jsonwebtoken");

const {
  encryption: { JWT_KEY },
} = require("../configs");

module.exports = (userData) => {
  const token = jwt.sign(
    {
      _id: userData._id,
    },
    JWT_KEY
  );
  return token;
};
