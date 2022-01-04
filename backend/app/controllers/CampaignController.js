function CampaignController() {
  const list = (req, res) => {
    res.status(200).json({
      message: "home message",
    });
  };

  const view = (req, res) => {
    res.status(200).json({
      message: "home message",
    });
  };

  const create = (req, res) => {
    res.status(200).json({
      message: "home message",
    });
  };

  const update = (req, res) => {
    res.status(200).json({
      message: "home message",
    });
  };

  const remove = (req, res) => {
    res.status(200).json({
      message: "home message",
    });
  };

  return {
    list,
    view,
    create,
    update,
    remove,
  };
}

module.exports = CampaignController();
