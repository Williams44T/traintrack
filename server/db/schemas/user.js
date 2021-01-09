var mongoose = require('mongoose');
var schemas = require('./');

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  session: {
    type: String,
    default: null
  },
  settings: schemas.settings,
});

module.exports = mongoose.model('User', userSchema);