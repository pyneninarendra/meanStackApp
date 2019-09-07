module.exports = function(app) {
    var aboutCtrl = require('../controllers/about.ctrl');
    app.get('/about', aboutCtrl.get);
}