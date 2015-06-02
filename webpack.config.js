/** 
 * webpack.config.js
 * this is for npm run dev
 * in the build directory, make sure you have a symbolic link to the assets
 * directory
 */
var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

 module.exports = {
  entry: {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'js/main.js')]

    // Since react is installed as a node module, node_modules/react,
    // we can point to it directly, just like require('react');
    // vendors: ['react', 'react-bootstrap']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'       
  },
  plugins: [definePlugin],

  module: {
    loaders: [
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}, // inline base64 URLs for <=8k images, direct URLs for the rest
      { test: /\.js$/, loader: 'jsx-loader?harmony' } // loaders can take parameters as a querystring
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.jsx'] 
  },

};
