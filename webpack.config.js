var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry:{
        index:'./dev/js/index.js',

    },
    output:{
        path:'../../../build/activity/xiangqu-11-11/js',
        filename:'[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            }
             ]
    },
    resolve:{
             extensions:['','.js','.json']
    },
    plugins: [
        //new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
            },
            compress: {
                warnings: false
            },
            mangle:{
                except:['$super','$','exports','require']
            }
        })
    ]
}