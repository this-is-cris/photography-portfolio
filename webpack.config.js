
var webpack = require('webpack');

module.exports = {
	entry: './client',
	output: {
		path: __dirname + '/public/js',
		filename: 'client.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	}
	// plugins: [
 //    new webpack.optimize.UglifyJsPlugin({minimize: true})
 //  ]
};
