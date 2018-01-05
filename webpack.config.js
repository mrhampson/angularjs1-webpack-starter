const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist')
    },
    module: {
        loaders: [
            {
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: "css-loader"
				})
			}
        ]
    },
    plugins: [
		new ExtractTextPlugin({
			filename: "style.css",
			allChunks: true
		})
	]
};

