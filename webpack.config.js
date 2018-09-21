module.exports = {
    entry:'./src/app.js',
    output: {
        filename: './app.bundle.js'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css'],
      },
}