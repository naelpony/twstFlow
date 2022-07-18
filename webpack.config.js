const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
		clean: true,
	},

	devServer: {
		static: {
			directory: path.resolve(__dirname, './dist/'),
			publicPath: '/',
		},
		open: true,
		compress: true,
		hot: false,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './src/index.html'),
			filename: 'index.html',
			publicPath: './',
			inject: 'body',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		})
	],
	module: {
		rules: [{
			test: /\.html$/i,
			exclude: /(node_modules)/,
			loader: 'html-loader',
		},
		{
			test: /\.(sa|sc|c)ss$/,
			use: [
				MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader',
					options: {
						sourceMap: true,
					},
				},
				{
					loader: 'postcss-loader',
					options: {
						postcssOptions: {
							plugins: [
								[
									'autoprefixer',
								],
							],
						},
						sourceMap: true
					}
				},
				{
					loader: 'sass-loader',
					options: {
						sourceMap: true,
					},
				},
			],
		},
		{
			test: /\.m?js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
			}
		}
		]
	},
};