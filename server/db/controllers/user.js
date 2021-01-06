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

  login: (req, res) => {
    console.log('login', req.query);
    User.find(req.query, (err, users) => {
      if (users.length === 0) { return res.sendStatus(404); }
      users[0].session = req.body.session;
      users[0].save()
        .then((user) => res.json(user))
        .catch((err) => console.log('ERROR LOGGING IN USER: ', err.message))
    })
  },

  logout: (req, res) => {
    console.log('logout', req.body);
    User.find(req.body, (err, user) => {
      if (err) { return console.log('ERROR FINDING USER TO LOGOUT: ', err.message); }
      user[0].session = null;
      user[0].save()
        .then(() => res.clearCookie('traintracks').sendStatus(202))
        .catch((err) => console.log('ERROR DESTROYING SESSION: ', err.message))
    })
  }

};