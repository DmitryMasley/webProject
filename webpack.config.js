"use strict";
/* global require*/
const path = require("path");
const webpack = require("webpack");
const argv = require("yargs").argv;
/**
 * Created by dmasley on 6/1/16.
 */
process.traceDeprecation = true;

module.exports = {
    entry: "./public/src/js/main",
    output: {
        path: __dirname + "/public/build/js",
        filename: "main.bundle.js"
    },
    module: {
        // noParse: ["bootstrap", /jquery/],
        loaders: [
        ],
        rules: [
            {
                test: /\.scss$/,
                use : [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
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
