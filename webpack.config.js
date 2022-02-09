const webpack = require("webpack");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: process.env.NODE_ENV || "development",
    devServer: {
        port: 3000,
        hot: true,
        open: false,
    },
    entry: {
        app: path.join(__dirname, "/src/index.tsx"),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            "@": path.resolve(__dirname, "/src/"),
        }
    },
    output: {
        path: path.join(__dirname, "/build"),
        filename: "app.js",
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader", "ts-loader"],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
