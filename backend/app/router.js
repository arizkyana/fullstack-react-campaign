const HomeController = require("./controllers/HomeController");
const AuthController = require("./controllers/AuthController");
const CampaignController = require("./controllers/CampaignController");

module.exports = (app) => {
  // home
  app.get("/api", HomeController.index);

  // auth
  app.post("/api/login", AuthController.login);
  app.post("/api/register", AuthController.register);

  // campaign
  app.get("/api/campaign", CampaignController.list);
  app.get("/api/campaign/:id", CampaignController.view);
  app.post("/api/campaign", CampaignController.create);
  app.put("/api/campaign/:id", CampaignController.update);
  app.delete("/api/campaign/:id", CampaignController.remove);
};
