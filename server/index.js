var db = require('./db');
var express = require('express');
var cookieParser = require('./middleware/cookieParser.js');
var assignSession = require('./middleware/assignSession.js');
var userController = require('./db/controllers/user.js');

var app = express();
app.use(express.static(__dirname + '/../public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser);
app.use(assignSession);

app.get('/users', userController.find);
app.post('/users', userController.add);
app.post('/logout', userController.logout);

var port = 8000;
app.listen(port, () => console.log(`listening on port ${port}`));