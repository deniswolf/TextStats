module.exports = {
  entry: './components/app.jsx',
  output: {
    filename: './site/bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'jsx-loader'
    }, {
      test: /\.jsx$/,
      loader: 'jsx-loader'
    }]
  }
};
