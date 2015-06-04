/** 
 * webpack.config.js
 */
var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var child_process = require('child_process');

var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});


child_process.exec('cp index.production.html index.html', function(error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});

 module.exports = {
  entry: {
    app: path.resolve(__dirname, 'js/main.js'),

    // Since react is installed as a node module, node_modules/react,
    // we can point to it directly, just like require('react');
    vendors: ['react', 'react-bootstrap']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'       
  },
  plugins: [definePlugin,
            new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')],
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
