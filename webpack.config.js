var HtmlWebpackPlugin = require('webpack-html-plugin');

module.exports = {
    entry:'./src/app.js',
    output: {
        path:'dist'
        filename: 'app.bundle.js'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css'],
    },
    plugins:[ new HtmlWebpackPlugin({
        title : 'Project 명으로 수정',
        template : './src/index.ejs'// 블러올 사용자 템플릿  ejs파일로  설정
    })]
}