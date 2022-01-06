const {
  database: { DATABASE_URL },
} = require("../configs");
const mongoose = require("mongoose");

function initialize(cb) {
  mongoose.connect(DATABASE_URL, () => {
    console.log("Database connection has been succeed!");
    cb();
  });

  mongoose.connection.on("error", (err) => {
    console.error(err);
  });
}

module.exports = initialize;
