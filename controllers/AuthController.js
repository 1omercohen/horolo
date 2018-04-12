var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/User");

var userController = {};

// Post registration
userController.register = function(req, res) {
  User.register(new User({ username : req.body.username, email: req.body.email, firstName: req.body.firstName , lastName: req.body.lastName}), req.body.password, function(err, user) {
    if (err) {
      return res.status(500).json(err);
    }
    passport.authenticate('local')(req, res, function () {
      res.status(200).json(user);
    });
  });
};

// Post login
userController.login = function(req, res) {
  passport.authenticate('local')(req, res, function () {
    res.status(200).json(req.user);
  });
};

// logout
userController.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};

userController.getUsers = function(req, res){
  User.find({}).select('firstName lastName email')
    .then(function(users){
      res.status(200).json(users);
    })  
}

module.exports = userController;
