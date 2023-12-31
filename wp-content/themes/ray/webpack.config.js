const path = require('path');
// include the js minification plugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const cssnano = require( 'cssnano' ); 
// include the css extraction and minification plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

//save path directory 
const JS_DIR = path.resolve( __dirname, 'src' );
module.exports = {
   mode: 'development',
   entry: {
      blocks: JS_DIR + '/js/custom-blocks.js',
      main: JS_DIR + '/js/main.js',
   },
   
   output: {
      filename: './assets/js/[name].js',
      path: path.resolve(__dirname)
   },
   
   module: {
      rules: [
          // perform js babelization on all .js files
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
         },
          // compile all .scss files to plain old css
         {
            test: /\.(sass|scss)$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
         }
      ],
   },
   plugins: [
      // extract css into dedicated file
      new MiniCssExtractPlugin({
        filename: './assets/css/[name].css',
      })
    ], 
   optimization: {
      minimizer: [
        // enable the js minification plugin
        new UglifyJSPlugin({
          cache: true,
          parallel: true
        }),
         // enable the css minification plugin
         new OptimizeCSSAssetsPlugin({
            cssProcessor: cssnano
         })
      ]
    }
   
};
