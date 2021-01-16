import { merge } from "webpack-merge"

import commonConfig from "./webpack.common"

export default merge(commonConfig, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		hot: false,
		open: true,
		host: "localhost",
		clientLogLevel: "none",
		contentBase: false,
		historyApiFallback: true,
	},
})
