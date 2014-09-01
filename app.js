var express = require('express');
var app = express();

var obj = require('./object');

app.get('/', function (req, res) {
  res.json(obj);
});

app.get('/:name', function (req, res) {
  res.send('Oi ' + req.params.name + '.');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});