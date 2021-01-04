var db = require('./db')
var express = require('express');
var cookieParser = require('./middleware/cookieParser.js');
// var auth = require('./middleware/assignSession.js');
var userController = require('./db/controllers/user.js');

var app = express();
app.use(express.static(__dirname + '/../public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser);
// app.use(auth);

var example = {
  image: 'https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg',
  name: 'Williams44T'
};

app.get('/sessions', (req, res) => {
  if (!req.sessions) { return res.sendStatus(404); }
  res.json(example);
});

app.get('/users', userController.find);
app.post('/users', userController.add);

var port = 8000;
app.listen(port, () => console.log(`listening on port ${port}`));