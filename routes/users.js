var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('../models/users');
var userRouter = express.Router();
userRouter.use(bodyParser.json());


userRouter.route('/').get(function (req, res) {
    console.log('Users retriving from DB....');
    User.find({}, function (err, users) {
      if (err) throw err;
      console.log('Users retrived from DB....');
      res.json(users)
    })
  }).post(function (req, res) {
    User.create(req.body, function (err, user) {
      if (err) throw err;
      res.json({
        message: 'Added',
        user: user
      });
  })
});


userRouter.route('/:user_id').get(function (req, res) {
  console.log('Users retriving from DB....');
  User.findById(req.params.user_id, function (err, user) {
    if (err) throw err;
    console.log('Users retrived from DB....');
    res.json({
      message: 'Read',
      user: user
    });
  });
}).put(function (req, res) {
  User.findByIdAndUpdate(req.params.user_id, { $set: req.body }, { new: true }, function (err, user) {
    if (err) throw err;
    res.json({
      message: 'Updated',
      user: user
    });
  });
}).delete(function (req, res) {
  User.findByIdAndRemove(req.params.user_id, function (err, user) {
    if (err) throw err;
    res.json({
      message: 'Removed',
      user: user
    });
  });
});

module.exports = userRouter;
