const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.jsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public"),
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: "react"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        historyApiFallback: true,
        proxy: {
            "/add": {
                target: "http://localhost:5000"
            },
            "/activities": {
                target: "http://localhost:5000"
            },
            "/delete": {
                target: "http://localhost:5000"
            },
            "/change": {
                target: "http://localhost:5000"
            },
            "/api": {
                target: "http://localhost:5000"
            }
        },
        port: 9000,
        hot: true,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                ],
            },
        ]
    },
    resolve: {
        extensions: [".jsx", ".js"]
    }
};
