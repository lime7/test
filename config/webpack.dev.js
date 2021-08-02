'use strict'
const paths = require('./paths')
const webpack = require('webpack')
const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	/**
   * Mode
   *
   * Set the mode to development or production.
   */	   
	mode: 'development', // Stop minify webpack JS bundle

	/**
   * Devtool
   *
   * Control how source maps are generated.
   */
  devtool: 'inline-source-map',

  /**
   * DevServer
   *
   * Spin up a server for quick development.
   */
  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: true, // Tells dev-server to open the browser after server had been started
    compress: true,
    hot: true, // update changes without full refresh in the browser
    port: 8080,
    overlay: true // Shows a full-screen overlay with errors or warnings
  },
  plugins: [
  	/**
     * HotModuleReplacementPlugin
     *
     * Only update what has changed.
     */
    new webpack.HotModuleReplacementPlugin(),
  ]
})