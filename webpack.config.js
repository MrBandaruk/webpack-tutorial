const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    mode: 'development',
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
                use: [ 
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }, 
                    'sass-loader' 
                ]
            }
        ]
    }
};