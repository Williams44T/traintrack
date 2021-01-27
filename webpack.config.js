var path = require('path');

module.exports = [{
  mode: 'development',
  entry: './client/desktop/index.js',
  output: {
    path: path.resolve(__dirname, './public/desktop'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  }
},
{
  mode: 'development',
  entry: './client/mobile/index.js',
  output: {
    path: path.resolve(__dirname, './public/mobile'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  }
}];