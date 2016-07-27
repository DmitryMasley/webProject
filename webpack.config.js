"use strict";
/* global require*/
var path = require("path");
var webpack = require("webpack");
var argv = require("yargs").argv;
/**
 * Created by dmasley on 6/1/16.
 */
module.exports = {
    entry: "./public/src/js/main",
    output: {
        filename: "main.bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', "react"]
                }

            },

            {
                test: /\.jsx$/,
                exclude: [/node_modules/],
                loader: "babel",
                query: {
                    presets: ['es2015', "react"]
                }
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"],
        // where to look from
        root: path.join(__dirname, "javascript", "react"),
        modulesDirectories: ["web_modules", "node_modules", "src"]
    },
    devtool: "eval-source-map",
    plugins: (
        function() {
            var plugins = [];

            if (argv.optimize) {
                plugins.push(new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false
                    }
                }));
            }
            return plugins;
        }
    )
};