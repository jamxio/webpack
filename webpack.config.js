const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',//cheap-module-eval-source-map方法构建速度更快，但是不利于调试，推荐在大型项目考虑时间成本时使用。
    entry: __dirname + "/jsapp/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/build-dev",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module: {
        rules: [
            {
                //js 的加载者babel可以分析转换es
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    //在 .babelrc自动加载 options:
                },
                exclude: /node_modules/
            },
            {
                //css的加载者可以分析转换scss
                test: /\.css$/,
                use: [
                    //style-loader 与 css-loader 组合可以实现样式表嵌入webpack打包后的JS文件中
                    {
                        loader: "style-loader"//将所有的计算后的样式加入页面中
                    },
                    {
                        loader: "css-loader",//使用类似@import 和 url(...)的方法实现 require()的功能
                        options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    },
                    {
                        loader:"postcss-loader"
                    }
                ]
            },
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/jsapp/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ],
};