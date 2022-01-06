const HomeController = require("./controllers/HomeController");
const AuthController = require("./controllers/AuthController");
const CampaignController = require("./controllers/CampaignController");

require("./libraries/passport");
const passport = require("passport");

const requireJWT = passport.authenticate("jwt", { session: false });
const requireLocal = passport.authenticate("local", { session: false });

module.exports = (app) => {
  // home
  app.get("/api", HomeController.index);

  // auth
  app.post("/api/login", requireLocal, AuthController.login);
  app.post("/api/register", AuthController.register);

  // campaign
  app.get("/api/campaign", requireJWT, CampaignController.list);
  app.get("/api/campaign/:id", requireJWT, CampaignController.view);
  app.post("/api/campaign", requireJWT, CampaignController.create);
  app.put("/api/campaign/:id", requireJWT, CampaignController.update);
  app.delete("/api/campaign/:id", requireJWT, CampaignController.remove);
};
