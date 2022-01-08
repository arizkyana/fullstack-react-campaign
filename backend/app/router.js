// passport middleware
const { requireJWT, requireLocal } = require("./libraries/passport");

// upload middleware
const { singleUpload } = require("./libraries/upload");

// app controllers
const HomeController = require("./controllers/HomeController");
const AuthController = require("./controllers/AuthController");
const CampaignController = require("./controllers/CampaignController");
const UploadController = require("./controllers/UploadController");

module.exports = (app) => {
  // home
  app.get("/api", HomeController.index);

  // auth
  app.post("/api/login", requireLocal, AuthController.login);
  app.post("/api/register", AuthController.register);

  // campaign
  app.get("/api/campaign", CampaignController.list);
  app.get("/api/campaign/:slug", CampaignController.view);
  app.post("/api/campaign", requireJWT, CampaignController.create);
  app.put("/api/campaign/:slug", requireJWT, CampaignController.update);
  app.delete("/api/campaign/:slug", requireJWT, CampaignController.remove);

  // upload
  app.post(
    "/api/upload",
    [requireJWT, singleUpload("file")],
    UploadController.upload
  );
  app.get("/api/files", requireJWT, UploadController.getFile);
};
