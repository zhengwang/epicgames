// const fs = require("fs");
var path = require("path");
var webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const HtmlReplaceWebpackPlugin = require("html-replace-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const ASSET_PATH = process.env.ASSET_PATH || '/';

const htmlwebpackplugin = new HtmlWebPackPlugin({
    hash: true,
    template: "./src/static/index.html",
    filename: "./index.html",
    minify: true
});

const copywebpackplugin = new CopyWebpackPlugin({
    patterns: [
        {
            from: 'src/assets/images',
            to: 'assets/images'
        },
        {
            from: "src/assets/fonts",
            to: "assets/fonts"
        }
    ]
});

const basic_config = {
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        ["@babel/preset-env", { modules: false }],
                        "@babel/preset-react"
                    ]
                }
            }
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.dat$/,
            use: ['file-loader', {
                loader: 'raw-loader'
            }]
        },
        {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: ['file-loader',
                {
                    loader: 'url-loader',
                }
            ],
            type: "asset/resource"
        }]
    },
    optimization: {
        minimize: true
    },
    mode: "production",
    devServer: {
        contentBase: "./public"
    }
};

var epic_config = Object.assign({
    entry: {
        epicgame: ["./src/jsx/app.js"]
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "includes/[name].min.js",
        publicPath: path.resolve(__dirname, ASSET_PATH),
        // assetModuleFilename: "includes/fonts/[hash][ext][query]",
    },
    plugins: [].concat(htmlwebpackplugin, copywebpackplugin).concat(new webpack.ProvidePlugin({ Promise: "es6-promise" }))
}, basic_config);

module.exports = [epic_config];