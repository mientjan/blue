var path = require('path');
var projectRoot = path.resolve(__dirname, '../');

module.exports = [
  {
    test: /\.scss$/,
    loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss', 'sass', 'sass-resources']
  },
  {
    test: /\.js$/,
    loader: 'babel',
    include: projectRoot,
    exclude: /node_modules/
  },
  {
    test: /\.json$/,
    loader: 'json'
  },
  {
    test: /\.html$/,
    loader: 'vue-html'
  },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url',
    query: {
      limit: 10000,
      name: 'dist/img/[name].[hash:7].[ext]'
    }
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url',
    query: {
      limit: 10000,
      name: 'dist/fonts/[name].[hash:7].[ext]'
    }
  },
];
