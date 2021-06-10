// const fs = require("fs");
// var path = require("path");
var webpack = require("webpack");

const basic_config = {
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        ["@babel/preset-env", {modules: false}], 
                        "@babel/preset-react"
                    ]
                }
            }
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.dat$/,
            use: ['file-loader', {
                loader: 'raw-loader'
            }]
        }]
    },
    optimization: {
        minimize: true
    },
    // node: {
    //     fs: "empty"
    // },
    mode: "production",
    devServer: {
        contentBase: "./public"
    }
};

var epic_config = Object.assign({
    entry: {
        epicgame: ["./src/app.js"]
    },
    output: {
        path: __dirname,
        filename: "public/includes/[name].min.js",
    },
    plugins: [new webpack.ProvidePlugin({Promise: "es6-promise"})]
}, basic_config);

module.exports = [epic_config];