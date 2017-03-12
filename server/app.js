var express = require('express');
var favicon = require('express-favicon');

var app = express();

app.use('/public', express.static('public'));
app.use(favicon(__dirname + '/public/favicon.png'));

console.log(__dirname);

app.get('/', (request, response) => {
  response.end('Hello World');
});

app.listen(8080, '127.0.0.1', () => {
  console.log('Server listening on port 8080');
});