var mongoose = require('mongoose');
var dbName = 'traintracks';
var url = `mongodb://localhost:27017/${dbName}`;
var mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
mongoose.connect(url, mongoOptions, (err) => {
  if (err) { return console.log('ERROR: ', err.message); }
  console.log(`connected to ${dbName} database`);
});