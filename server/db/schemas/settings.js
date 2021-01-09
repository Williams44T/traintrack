var mongoose = require('mongoose');

module.exports = mongoose.Schema({
  darkMode: {
    type: Boolean,
    default: false,
  },
  defaults: {
    main: {
      type: String,
      default: 'Calendar',
    },
    calendar: {
      type: String,
      default: 'month',
    },
  }
});