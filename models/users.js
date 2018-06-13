var mongoose = require('mongoose');
var assert = require('assert');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    uniq: true
  },
  dob:{
    type: Date
  }
}, {timestamps: true});

module.exports = mongoose.model('users', userSchema);