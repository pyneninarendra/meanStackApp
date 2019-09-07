var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Welcome to Node server');
});

app.listen(4900);
console.log('server running at port: 4900');