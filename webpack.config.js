const path                 = require('path');
const webpack              = require('webpack');
const DotenvPlugin         = require('webpack-dotenv-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const CopyWebpackPlugin    = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'public');
const SRC_DIR   = path.resolve(__dirname, 'src');

const modeValues = {
    'development': [
        'local', 'dev', 'preprod'
    ],
    'production': [
        'prod', 'production',
    ]
};

module.exports = () => {

    const mode    = 'development';
    const devMode = (mode !== 'production');

    return {
        entry: {
            index: [
                SRC_DIR + '/index.js',
            ]
        },
        output: {
            path: BUILD_DIR,
            filename: (devMode) ? '[name].[hash].bundle.js' : '[hash].bundle.js',
            chunkFilename: '[id].[hash].bundle.js',
        },

        devtool: (devMode) ? 'cheap-module-eval-source-map' : 'none',

        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            babelrc: true,
                            cacheDirectory: true,
                        }
                    }
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        'css-hot-loader',
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(png|jp(e*)g|gif|ico)$/,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'img',
                        name: (devMode) ? '[name].[hash].[ext]' : '[hash].[ext]'
                    }
                },
                {
                    test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts',
                        name: (devMode) ? '[name].[hash].[ext]' : '[hash].[ext]'
                    }
                }
            ]
        },

        mode: mode,

        optimization: {
            splitChunks: {
                chunks: 'all',
                minSize: 30000,
                maxSize: 0,
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                automaticNameDelimiter: '~',
                name: true,
                cacheGroups: {
                    vendors: {
                        test: /\/node_modules\//,
                        priority: -10
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            }
        },

        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin(
                {
                    filename: (devMode) ? '[name].[hash].css' : '[hash].css',
                    chunkFilename: '[id].[hash].css',
                }
            ),
            new HtmlWebpackPlugin(
                {
                    inject: true,
                    template: './src/index.html'
                }
            ),
            new CopyWebpackPlugin(
                [
                    {
                        from: './resources/',
                        to: './'
                    }
                ]
            ),
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            new webpack.ProvidePlugin({ Promise: 'es6-promise-promise' }),
        ],

        resolve:{
            aliasFields: ['browser']
        },

        watchOptions: {
            ignored: ['node_modules', 'public', 'docker']
        }
    };
};
