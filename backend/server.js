const { network } = require("./app/configs");
const express = require("express");
const router = require("./app/router");
const app = express();

router(app);

app.listen(network.PORT, () =>
  console.log(`server running on http://localhost:${network.PORT}`)
);
