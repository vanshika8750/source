const User = require("../models/user");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { expressjwt: expressJwt } = require("express-jwt");

exports.signout = (req, res) => {
  res.clearCookie("token");

  res.json({
    message: "User Sign Out Successfull",
  });
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({
      status: "fail",
      message: "Please provide email and password!",
    });
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return res.status(401).json({
      status: "fail",
      message: "Incorrect email or password!",
    });
  }

  //create token
  const token = jwt.sign({ _id: user._id }, "shhhhh");

  //put token in user cookie
  res.cookie("token", token, { expire: new Date() + 9999 });

  //send response to front end
  //   const { _id, name, email, role, lastname, phoneno } = user;

  res.json({ token, user });
};

exports.signup = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  const user = new User(req.body);

  if (req.body.role === 1) {
    user.role = req.body.role;
  } else {
    user.role = req.body.role;
  }

  user.save((err, user) => {
    if (err) {
      console.log(err);
      if (err.code === 11000) {
        return res.status(400).json({
          err: "User already exits with this email address!",
        });
      }
      return res.status(400).json({
        err: " Not able to save user in DB",
      });
    }

    res.json({
      name: user.name,
      email: user.email,
      id: user._id,
    });
  });
};

//protected routes
exports.isSignedIn = expressJwt({
  secret: "shhhhh",
  userProperty: "auth",
  algorithms: ["HS256"],
});

//custom middlwear
exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      error: "Access Denied",
    });
  }
  next();
};

exports.isPatron = (req, res, next) => {
  if (req.profile.role === 0) {
    res.status(403).json({
      error: "You Are Not Admin",
    });
  }
  next();
};
