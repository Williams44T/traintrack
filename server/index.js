var express = require('express');
var app = express();

app.use('/', (req, res) => {
  res.send('hello world');
});

var port = 8000;
app.listen(port, () => console.log(`listening on port ${port}`));