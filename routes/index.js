
var keystone = require('keystone');
var importRoutes = keystone.importer(__dirname);

// Setup Route Bindings
exports = module.exports = function(app) {

	// Views
	app.use(function(req, res) {
		res.render('index');
	});

};
