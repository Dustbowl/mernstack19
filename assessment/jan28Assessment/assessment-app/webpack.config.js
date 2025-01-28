
let path = require("path"), 
HtmlWebpackPlugin = require('html-webpack-plugin'), 

config = {
    output: {
        filename: 'bundle.js'
    },

    devServer: {
        port: 9090, 
        historyApiFallback : true 
    },
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })] 
}

module.exports = config;