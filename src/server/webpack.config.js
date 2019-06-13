const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        server: './index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, 'node_modules/formidable')
                ],
                loader: 'babel-loader'
            }
        ]
    },
    externals: [nodeExternals()],
    resolve: {
        alias: {
            $constants: path.resolve(__dirname, 'constants'),
            $models: path.resolve(__dirname, 'models'),
            $shared: path.resolve(__dirname, '../shared'),
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
            IS_PRODUCTION: process.env.NODE_ENV === 'production'
        })
    ]
};
