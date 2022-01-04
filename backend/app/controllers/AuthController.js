function AuthController() {
  const login = (req, res) => {
    res.status(200).json({
      message: "home message",
    });
  };

  const register = (req, res) => {
    res.status(200).json({
      message: "home message",
    });
  };

  return {
    login,
    register,
  };
}

module.exports = AuthController();
