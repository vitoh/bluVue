const path = require('path')
const vueConfig = require('./vue-loader.config')

module.exports = {
	output: {
		path: path.resolve(__dirname, '../../../xap/js'),
		publicPath: '/dist/',
		filename: '{{ name }}.client.bundle.js'
	},
	resolve: {
		extensions: [".js", ".vue", ".json"],
		alias: {
			'vue$': 'vue/dist/vue',
			'src': path.resolve(__dirname, '../src'),
			'components': path.resolve(__dirname, '../src/components')
		}
	},
	module: {
		noParse: /es6-promise\.js$/, // avoid webpack shimming process
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: vueConfig
			},
			{
				test: /\.json$/,
				loader: 'json-loader',
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: '[name].[ext]?[hash]'
				}
			}
		]
	}
}
