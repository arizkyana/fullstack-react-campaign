const UserModel = require("../models/user");
const genToken = require("../libraries/token");

function AuthController() {
  const login = (req, res) => {
    const token = genToken(req.user);
    res.status(200).json({
      message: "login success!",
      token,
    });
  };

  const register = async (req, res) => {
    const { email, username, password } = req.body;

    try {
      const newUser = new UserModel({
        email,
        username,
        password,
      });
      await newUser.save();

      const token = genToken(newUser);

      return res.status(200).json({
        message: "registration user success!",
        token,
      });
    } catch (error) {
      if (error.toString().includes("E11000")) {
        return res.status(404).json({
          message: "the user's email has been registered!",
        });
      }
      return res.status(400).json({
        message: "registration user failed!",
      });
    }
  };

  return {
    login,
    register,
  };
}

module.exports = AuthController();
