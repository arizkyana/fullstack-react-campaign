function HomeController() {
  const index = (req, res) => {
    res.status(200).json({
      message: "home message",
    });
  };

  return {
    index,
  };
}

module.exports = HomeController();
