require('./db');
var express = require('express');
var getDeviceType = require('./middleware/getDeviceType.js');
var cookieParser = require('./middleware/cookieParser.js');
var assignSession = require('./middleware/assignSession.js');
var userController = require('./db/controllers/user.js');

var app = express();

app.use(getDeviceType);
app.use('/desktop', express.static(__dirname + '/../public/desktop'))
app.use('/mobile', express.static(__dirname + '/../public/mobile'));
app.use('/tablet', express.static(__dirname + '/../public/desktop'));//until I make tablet specific files
app.use('/images', express.static(__dirname + '/../public/images'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser);
app.use(assignSession);

app.get('/users', userController.find);
app.post('/users', userController.add);
app.get('/login', userController.login);
app.post('/logout', userController.logout);

var port = 8000;
app.listen(port, () => console.log(`listening on port ${port}`));