'use strict'
const paths = require('./paths')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  /**
   * Entry
   *
   * The first place Webpack looks to start building the bundle.
   */
  entry: {
    main: paths.src + '/index.js',
    vendor: paths.src + '/vendor.js'
  },

  /**
   * Output
   *
   * Where Webpack outputs the assets and bundles.
   */
  output: {
    path: paths.build,
    filename: '[name].js'
    // publicPath: '/'
  },
  /**
   * Module
   *
   * Determine how modules within the project are treated.
   */
  module: {
    rules: [
      /**
       * Html
       *
       *
       */
      {
        test: /\.html$/,
        use: [{
          loader: 'underscore-template-loader'
        }
          // {
          //   loader: 'html-loader',
          //   options: {
          //     minimize: false
          //   }
          // }
        ]
      },
      /**
       * JavaScript
       *
       * Use Babel to transpile JavaScript files.
       */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader']
      },
      /**
       * Styles
       *
       * Inject CSS into the head with source maps.
       */
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      /**
       * Images
       *
       * Copy image files to build folder.
       */
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        loader: 'file-loader',
        options: {
          esModule: false,
          name: '[path][name].[ext]',
          context: 'src' // prevent display of src/ in filename
        }
      },
      /**
       * Fonts
       *
       * Inline font files.
       */
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[path][name].[ext]',
          context: 'src' // prevent display of src/ in filename
        }
      }
    ]
  },
  plugins: [
    /**
     * CleanWebpackPlugin
     *
     * Removes/cleans build folders and unused assets when rebuilding.
     */
    new CleanWebpackPlugin(),

    /**
     * CopyWebpackPlugin
     *
     * Copies files from target to destination folder.
     */
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.static,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store']
          }
        }
      ]
    }),

    /**
    * HtmlWebpackPlugin
    *
    * Generates an HTML file from a template.
    */
    new HtmlWebpackPlugin({
      title: 'Main Page',
      // favicon: paths.static + '/favicon.ico',
      filename: 'index.html',
      template: paths.src + '/index.html', // template file
      minify: false
      // hash: true,
      // inject: false
    }),

    new StylelintPlugin({
      files: '**/*.s?(a|c)ss'
    })
  ]
}
