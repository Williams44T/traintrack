var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  session: {
    type: String,
    default: null
  },
});

module.exports = mongoose.model('User', userSchema);