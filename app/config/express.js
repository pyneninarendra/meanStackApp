var express = require("express");

module.exports = function() {
    var app = express();

    app.get('/', function(req, res) {
        res.send('Welcome to Node server');
    });

    return app;
}