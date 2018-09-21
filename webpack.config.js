var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry:'./src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.bundle.js'
    },
    module:{
        rules:[
           // {test:/\.scss$/, use : ['style-loader','css-loader','sass-loader']}
            {   
                test:/\.scss$/, 
                use : ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','sass-loader'],
                    publicPath:path.resolve(__dirname, './dist')
                })
                // ['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins:[ 
        new HtmlWebpackPlugin({
            title : 'Project Demo',
            minify:{
                colapseWhitespace: true
            },
            hash:true,
            template : './src/index.html',// 블러올 사용자 템플릿  ejs파일로  설정
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        })
    ]
}