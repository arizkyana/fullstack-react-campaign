const { network } = require("./app/configs");
const bodyParser = require("body-parser");
const express = require("express");
const router = require("./app/router");
const database = require("./app/libraries/database");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

router(app);

database(() => {
  app.listen(network.PORT, () => {
    console.log(`server running on http://localhost:${network.PORT}`);
  });
});
