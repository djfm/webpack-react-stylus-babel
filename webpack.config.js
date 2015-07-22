var webpack = require('webpack');

var plugins = [];

var production = false;

if (production) {
    plugins.push([
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]);
}

module.exports = {
    entry: ['./scripts/client.js'],
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/     , loaders: ['jsx-loader', 'babel-loader']},
            {test: /\.css$/    , loader: 'style-loader!css-loader'},
            {test: /\.styl$/   , loader: 'style-loader!css-loader!stylus-loader'},
            {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    },
    devtool: 'source-map',
    plugins: plugins
};
