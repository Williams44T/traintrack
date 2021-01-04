var User = require('../schemas/user.js');

module.exports = {
  find: (req, res) => {
    console.log('get users', req.query);
    User.find(req.query, (err, results) => {
      if (err) { return res.sendStatus(404); }
      res.status(202).json(results);
    })
  },

  add: (req, res) => {
    console.log('post user', req.body);
    User.create(req.body, (err, results) => {
      if (err) { return res.sendStatus(404); }
      res.redirect(202, '/');
    })
  },

};