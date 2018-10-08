const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        player: './src/player.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public')
    },
    //mode: 'development',
    watch: true,

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        },
                        'sass-loader'
                    ],
                    fallback: 'style-loader'
                })

                // use: [ 
                //     'style-loader', 
                //     {
                //         loader: 'css-loader',
                //         options: {
                //             modules: true
                //         }
                //     }, 
                //     'sass-loader' 
                // ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: '[name].[ext]',
                        outputPath: '/img'
                    }
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};