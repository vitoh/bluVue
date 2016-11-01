var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
	app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../../xap/js'),
    publicPath: '/dist/',
    filename: '{{ name }}.bundle.js'
  },
resolve: {
	extensions: ["", ".js", ".vue"],
	fallback: [path.join(__dirname, '../node_modules')],
	alias: {
	'vue$': 'vue/dist/vue',
	'src': path.resolve(__dirname, './src'),
	'assets': path.resolve(__dirname, './src/assets'),
	'components': path.resolve(__dirname, './src/components')
	}
},
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
        options: {
          // vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  devtool: '#eval-source-map'
}
