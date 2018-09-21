var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry:'./src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.bundle.js'
    },
    
    plugins:[ new HtmlWebpackPlugin({
        hash:true,
        title : 'Project Demo',
        template : './src/index.ejs'// 블러올 사용자 템플릿  ejs파일로  설정
        
    })]
}