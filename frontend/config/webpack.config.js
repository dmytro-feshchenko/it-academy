var webpack = require('webpack');
const path = require('path');

const TARGET = process.env.npm_lifecycle_event;

var config = {
    context: __dirname + '/../src/', // `__dirname` is root of project and `src` is source
    entry: {
        app: './index.js',
    },
    output: {
        path: __dirname + '/../dist', // `dist` is the destination
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        'react',
                        'es2015',
                        'stage-2'
                    ],
                    plugins: []
                },
                exclude: /node_modules/,
                // include: [
                //     path.resolve(__dirname, '/src/main/resources/static')
                // ]
            },
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.css/,
                loaders: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.scss$/,
                loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
            'process.ENV.NODE_ENV': JSON.stringify('development')
        }),
        // new BabiliPlugin()
    ],
    resolve: {
        modules: [
            path.join(process.cwd(), 'frontend/src'),
            'node_modules'
        ],
        extensions: [ '*', '.js', '.json']
    },
    devServer: {
        port: 9090,
        proxy: {
            '/': {
                target: 'http://localhost:8080',
                secure: false,
                // node-http-proxy option - don't add /localhost:8080/ to proxied request paths
                prependPath: false
            }
        },
        publicPath: 'http://localhost:9090/'
    },
    devtool: TARGET === 'build' ? 'source-map' : 'eval'
};

module.exports = config;