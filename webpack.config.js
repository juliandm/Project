var webpack = require("webpack");
var path = require("path");
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  entry: [
    "script!jquery/dist/jquery.min.js",
    "script!foundation-sites/dist/foundation.min.js",
    "./web/app/app.jsx"
  ],
  externals: {
    jquery: "jQuery"
  },
  plugins: [
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery"
    }),
    new ProgressBarPlugin()
  ],
  output: {
    path: __dirname,
    filename: "./web/app/public/bundle.js"
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      "node_modules",
      "./web/app/components",
      "./web/app/public",
      "./web/app/styles"
    ],
    alias: {
      applicationStyles: "web/app/styles/app.foundation-scss",
      "pdfjs-web": ".",
      "pdfjs-dist": "../../"
      // actions: "app/actions/actions.jsx",
      // reducers: "app/reducers/reducers.jsx",
      // configureStore: "app/store/configureStore.jsx"
    },
    extensions: ['', ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-0"]
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, "./node_modules/foundation-sites/foundation-scss")
    ]
  },
  devtool: "source-map"
};
