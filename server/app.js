var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var main = require('./routes/main');
var api = require('./routes/api');

var bodyParser = require('body-parser');

console.log(__dirname);

// Connection URL
var url = 'mongodb://localhost:27017/test';

// Use connect method to connect to the Server
mongoose.connect(url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var app = express();
exports.app = app;

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', main);

app.use('/api', api);

app.use("/static", express.static(path.join(__dirname, '/public')));

app.listen(8080, '127.0.0.1', () => {
  console.log('Server listening on port 8080');
});