const base = require('./webpack.base.config')

const config = Object.assign({}, base, {
	devtool: '#source-map',
	entry: {
		app: './src/client-entry.js',
	},
	// Client specific config in here
})

module.exports = config
