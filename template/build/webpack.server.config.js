const webpack = require('webpack')
const base = require('./webpack.base.config')

module.exports = Object.assign({}, base, {
	target: 'node',
	devtool: false,
	entry: './src/server-entry.js',
	output: Object.assign({}, base.output, {
		filename: '{{ name }}.server.bundle.js',
		// THIS HAVE TO BE TARGET TO commonjs2
		libraryTarget: 'commonjs2'
	}),
	// Might want to externalise the dependencies later
	//externals: Object.keys(require('../package.json').dependencies),
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
			'process.env.VUE_ENV': '"server"'
		})
	]
})
