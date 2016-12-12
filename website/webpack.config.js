var path = require('path');
var webpack = require('webpack');
module.exports = {
    // entry: path.join(__dirname,'./dev-pack/js/index.js'),
    entry: './dev-pack/js/index.js',
    output: {
        path: './dist-pack',
        publicPath:'dist-pack/',
        filename: 'build.js'
    },
    watch:true,
    module: {
        loaders: [
            //转化ES6语法
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
            },
            {
                test:/\.vue$/,
                loader:'vue',
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader:'url-loader?limit=8192'
            },
            {
                test: /\.scss$/,
                loader:['style','css','sass'].join('!')
            }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    vue:{
        loaders:{
            js:'babel',
            scss:['vue-style-loader','css','sass'].join('!')
        }
    },
    resolve: {
        // require时省略的扩展名，如：require('app') 不需要app.js
        extensions: ['','.js','.vue','.scss'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        //alias: {
        //    filter: path.join(__dirname, './src/filters'),
        //    components: path.join(__dirname, './src/components')
        //}
    },
    plugins: [
        //new webpack.NoErrorsPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     output: {
        //         comments: false,
        //     },
        //     compress: {
        //         warnings: false
        //     },
        //     mangle:{
        //         except:['$super','$','exports','require']
        //     }
        // })
    ]
}