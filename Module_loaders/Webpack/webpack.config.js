/* node dependencies  */
const path = require('path');

/* Webpack Plugins 

    // Use HtmlWebpackPlugin to generate html file for you
    // const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
    // const CompressionPlugin = require("compression-webpack-plugin")

*/
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/js/index.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'

    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000',
                    {
                        loader: 'img-loader',
                        options: {
                            name: 'images/[hash]-[name].[ext]',
                            enabled: process.env.NODE_ENV === 'production',
                            gifsicle: {
                                interlaced: true
                            },
                            mozjpeg: {
                                progressive: true,
                                arithmetic: false
                            },
                            optipng: true, // disabled
                            pngquant: {
                                floyd: 0.5,
                                speed: 2
                            },
                            svgo: {
                                plugins: [
                                    { removeTitle: true },
                                    { convertPathData: false }
                                ]
                            }
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        // css to seperate file
        new ExtractTextPlugin({ filename: 'app.bundle.css' }),
        new CopyWebpackPlugin([
            { from: 'src/images', to: 'images' }
        ]),
        // Optimise Images
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            optipng: {
                optimizationLevel: 9
            },
            gifsicle: {
                optimizationLevel: 1
            }
        }),
        new UglifyJsPlugin({
            test: /\.js($|\?)/i
        }),
        new webpack.debug.ProfilingPlugin({
            outputPath: "profiling/profileEvents.json"
        }),

        /*
        new CompressionPlugin({
            test: /\.css/
        }),
         new HtmlWebpackPlugin({ template: './dist/index.html' })
        */
    ]
};