const { network } = require("./app/configs");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const router = require("./app/router");
const database = require("./app/libraries/database");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors("*"));

router(app);

database(() => {
  app.listen(network.PORT, () => {
    console.log(`server running on http://localhost:${network.PORT}`);
  });
});
