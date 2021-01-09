var mongoose = require('mongoose');

module.exports = mongoose.Schema({
  title: String,
  exercises: [{
    name: String,
    sets: [Number],
    weight: [Number]
  }]
});