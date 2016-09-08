const webpack = require('webpack');
const path = require('path');

const resolvePath = value => path.resolve(__dirname, value)
const isProductionEnvironment = process.env.NODE_ENV === 'production';

module.exports = {
    entry: resolvePath('src/index.jsx'),
    output: {
        path: resolvePath('build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: [resolvePath('src')],
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                include: [resolvePath('src/css')],
                loader: 'style!css'
            }
        ]
    },
    resolve: {
        root: resolvePath('src'),
        alias: {
            'components': 'js/components',
            'utils': 'js/utils',
            'css': 'css'
        },
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.css']
    },
    plugins: isProductionEnvironment ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ] : []
};
