const {
  encryption: { SALT },
} = require("../configs");
const bcrypt = require("bcrypt");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define model
const UserSchema = new Schema({
  email: {
    type: Schema.Types.String,
    unique: true,
  },
  username: Schema.Types.String,
  password: Schema.Types.String,
});

UserSchema.pre("save", function (next) {
  const user = this;
  const salt = bcrypt.genSaltSync(SALT);
  const password = bcrypt.hashSync(user.password, salt);
  user.password = password;
  next();
});

// Create class model
const ModelSchema = mongoose.model("user", UserSchema);

// Export the model
module.exports = ModelSchema;
