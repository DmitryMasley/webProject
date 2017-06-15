"use strict";
/* global require*/
const path = require("path");
const webpack = require("webpack");
const argv = require("yargs").argv;

process.traceDeprecation = true;

module.exports = {
    entry: {
        main: "./public/src/js/main",
        artShop: "./public/src/js/artShop/main"
    },
    output: {
        path: __dirname + "/public/build/js",
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
        ],
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[path]___[name]__[local]___[hash:base64:5]"
                        }
                    }

                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[path]___[name]__[local]___[hash:base64:5]"
                        }
                    },
                    {
                        loader: "sass-loader"
                    }

                ]
            },
            {
                test: /\.pcss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[path]___[name]__[local]___[hash:base64:5]"
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }

                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', "react"]
                }
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', "react"]
                }
            },
            {
                test: /bootstrap/,
                loader: "imports-loader?jQuery=jquery,$=jquery,window.Tether=tether,this=>window"
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", "css", "sass"],
        modules: ["node_modules"],
        // where to look from
        alias : {
            "bootstrap$": "bootstrap/dist/js/bootstrap.min",
            "jquery": "jquery/dist/jquery.min",
            "tether": "tether/dist/js/tether.min"
        }
    },
    devtool: "eval-source-map",
    plugins: (
        function() {
            let plugins = [

            ];

            if (argv.optimize) {
                plugins.push(new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false
                    }
                }));
            }
            return plugins;
        }
    )()
};
