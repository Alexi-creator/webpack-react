const webpack = require('webpack')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      // в любом файле будет доступ к переменной proccess.env.name со значением test prod 
      'process.env.name': JSON.stringify('test prod'),
    }),
  ],
}