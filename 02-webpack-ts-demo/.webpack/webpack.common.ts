import path from "path"
import type { Configuration } from "webpack"

import { EnvironmentPlugin } from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import ForkTsCheckerPlugin from "fork-ts-checker-webpack-plugin"
import TsPathsResolvePlugin from "ts-paths-resolve-plugin"

const workspaceFolder = path.resolve(__dirname, "..")

const isDev = process.env.NODE_ENV !== "production"

const join = (...args: string[]) => path.join(...args).replace(path.sep, "/")

const config: Configuration = {
	target: "web",
	entry: {
		index: path.resolve(workspaceFolder, "src", "index.ts"),
	},
	output: {
		path: path.resolve(workspaceFolder, "build"),
		filename: join("js", "[name].js?[fullhash]"),
		chunkFilename: join("js", "[name].js?.[fullhash:8]"),
		publicPath: "/",
	},
	resolve: {
		extensions: [".js", ".ts", ".json"],
		plugins: [new TsPathsResolvePlugin({ tsConfigPath: path.join(workspaceFolder, "src", "tsconfig.json") })],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: [
					"babel-loader",
					{
						loader: "ts-loader",
						options: { context: path.join(workspaceFolder, "src"), happyPackMode: true },
					},
				],
			},
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
		new ForkTsCheckerPlugin({
			typescript: {
				configFile: path.resolve(workspaceFolder, "src", "tsconfig.json"),
			},
		}),
	],
}

export default config
