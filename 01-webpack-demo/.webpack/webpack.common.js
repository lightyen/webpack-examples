const path = require("path")
const { EnvironmentPlugin } = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const workspaceFolder = path.resolve(__dirname, "..")

const isDev = process.env.NODE_ENV !== "production"

const join = (...args) => path.join(...args).replace(path.sep, "/")

/** @type {import("webpack").Configuration}} */
module.exports = {
	target: "web",
	entry: {
		index: path.resolve(workspaceFolder, "src", "index.js"),
	},
	output: {
		path: path.resolve(workspaceFolder, "build"),
		filename: join("js", "[name].js?[fullhash]"),
		chunkFilename: join("js", "[name].js?.[fullhash:8]"),
		publicPath: "/",
	},
	resolve: {
		extensions: [".js", ".json"],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
		],
	},
	plugins: [
		new EnvironmentPlugin({
			NODE_ENV: process.env.NODE_ENV,
		}),
		new HtmlWebpackPlugin({
			inject: true,
			minify: true,
			template: path.join(workspaceFolder, "public", "index.html"),
		}),
	],
}
