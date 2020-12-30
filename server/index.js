var express = require('express');
var cookieParser = require('./middleware/cookieParser.js');

var app = express();
app.use(cookieParser);

app.get('/', (req, res) => {
  res.send('hello world');
  console.log(req.header.cookie);
});

var port = 8000;
app.listen(port, () => console.log(`listening on port ${port}`));