const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const {
  encryption: { JWT_KEY, SALT },
} = require("../configs");

const UserModel = require("../models/user");
// JWT Authentication
const jwtAuth = new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_KEY,
  },
  function (jwtPayload, done) {
    UserModel.findOne({ _id: jwtPayload }, function (err, user) {
      if (err) return done(err, false);
      if (user) return done(null, user);
      return done(null, false);
    });
  }
);

// Local Authentication
const localAuth = new LocalStrategy({ usernameField: "email" }, function (
  username,
  password,
  done
) {
  UserModel.findOne(
    {
      email: username,
    },
    function (err, user) {
      if (err) return done(err, false);
      if (user) {
        const hashPassword = user.password;
        const validate = bcrypt.compareSync(password, hashPassword);

        if (validate) return done(null, user);
      }
      return done(null, false);
    }
  );
});
passport.use(jwtAuth);
passport.use(localAuth);
