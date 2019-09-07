var homeController = {}

homeController.get = function(req, res) {
    res.render('home');
}

homeController.post = function(req, res) {
    res.send('<h2>Home Controller post function</h2>');
}

module.exports = homeController;