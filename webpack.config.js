const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		index: { import: './src/index.js', dependOn: 'shared' },
		// another: { import: './src/js/another-module.js', dependOn: 'shared' },
		// print: './src/js/print.js',
		shared: 'lodash',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: "./assets",
		clean: true,
	},
	devtool: 'inline-source-map',
	devServer: {
		// after finishing run npm run build and change the path to ./dist
		static: './src',
	},
	plugins: [ 
		new HtmlWebpackPlugin({
			title: 'Development',
			template: path.resolve(__dirname, "src/template.html")
		}),
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', "sass-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/images/[name][ext]'
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/fonts/[name][ext]'
				}
			},
			// {
			// 	test: /\.js$/,
			// 	exclude: /node_modules/,
			// 	use: {
			// 		loader: "babel-loader",
			// 		options: {
			// 			presets: ["@babel/preset-env"]
			// 		}
			// 	}
			// }
		],
	},
	// If you'r going to use multiple entry points on a single HTML page include:
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
		},
	},
};