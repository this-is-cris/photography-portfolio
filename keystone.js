require('dotenv').load();
require('babel/register');

var keystone = require('keystone');

keystone.init({

	'name': 'photographyPortfolio',
	'brand': 'photographyPortfolio',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': '[s,otyG|K3~}MN3_8ewe_IBP2+Z(MIpira9F`TBh&gt;!,TaZimu$8W?_V,q&gt;A(zLsA',
	'mongo': process.env.MONGO_URI

});

keystone.import('models');

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

keystone.set('routes', require('./routes'));
keystone.set('nav', {
	'users': 'users'
});

keystone.start();
