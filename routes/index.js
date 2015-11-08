
var keystone = require('keystone');
var Fetcher = require('fetchr');

var photoService = require('../services/photoService');

var importRoutes = keystone.importer(__dirname);

// Setup Route Bindings
exports = module.exports = function(app) {

	// Register api services
	Fetcher.registerService(photoService);

	// Configure api endpoint
	app.use('/api', Fetcher.middleware());

	// Views
	app.use(function(req, res) {
		res.render('index');
	});

};
