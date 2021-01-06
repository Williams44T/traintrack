var User = require('../schemas/user.js');

module.exports = {
  find: (req, res) => {
    var criteria = req.query.checkusername ? {username: req.query.username} : {...req.query, ...req.body};
    console.log('get users', criteria);
    User.find(criteria, (err, users) => {
      if (err) { return res.sendStatus(404); }
      console.log('USERS: ', users);
      res.status(202).json(users);
    })
  },

  add: (req, res) => {
    console.log('post user', req.body);
    User.create(req.body, (err, results) => {
      if (err) { return res.sendStatus(404); }
      res.sendStatus(202);
    })
  },

  logout: (req, res) => {
    console.log('logout', req.body);
    User.find(req.body, (err, user) => {
      if (err) { return console.log('ERROR FINDING USER TO LOGOUT: ', err.message); }
      user[0].session = null;
      user[0].save()
        .then(() => {
          console.log('about to void cookie');
          res.clearCookie('traintracks').sendStatus(202);
        })
        .catch((err) => console.log('ERROR DESTROYING SESSION: ', err.message))
    })
  }

};