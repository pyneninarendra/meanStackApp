var aboutController = {}

aboutController.get = function(req, res) {
    res.render('about');
}

aboutController.post = function(req, res) {
    res.send('<h2>about Controller post function</h2>');
}

module.exports = aboutController;