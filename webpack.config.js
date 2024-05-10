const path = require('path')

module.exports = {
    mode: 'production',
    devtool: false,
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    }
}