const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            // транспилирует tsx jsx файлы блогадаря лоудеру babel
            loader: 'babel-loader',
          },
        ],
      },
      {
        // для модульных изолированных стилей с хешем
        test: /\.module\.s(a|c)ss$/,
        // сначала sass/scss преобразуется в css, затем css в js, и потом подключение в html в теге style
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]__[sha1:hash:hex:7]' // настройка для итогово названия класса (помимо уникального хэша есть название компонента и класса который задали)
              },
            }
          },
          'sass-loader'
        ],
      },
      {
        // для глобальных стилей не модульных чтобы имена классов не менялись
        test: /^((?!\.module).)*s(a|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
  stats: 'errors-only',
}