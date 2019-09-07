var express = require("express");

module.exports = function() {
    var app = express();

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    require('../routes/about.route')(app);
    require('../routes/home.route')(app);
    return app;
}