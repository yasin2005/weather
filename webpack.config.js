const path = require('path');

module.exports = {
    entry: './src/before.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'after.js'
    },
    devServer: {
        static: './dist/',
        devMiddleware: {
            publicPath: '/assets/'
         },
   },
   module: {
       rules: [{
           test: /\.js$/,
           exclude: /node_modules/,
           use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
       }]
   }
};
