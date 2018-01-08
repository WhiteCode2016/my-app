
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin =  require("clean-webpack-plugin");

module.exports = {
    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle-[hash].js'
    },

    devtool: 'eval-source-map',

    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot: true
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true/*, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式*/
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        // 注释插件（webpack内置插件）
        new webpack.BannerPlugin('版权所有，翻版必究'),
        // 自动生成index.html
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new CleanWebpackPlugin('build/*.*', {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        // 热加载插件（webpack内置插件）
        new webpack.HotModuleReplacementPlugin()
    ],
};