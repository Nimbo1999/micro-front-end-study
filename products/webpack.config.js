const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': path.join(__dirname, 'src', 'index'),
                './ProductBootstrap': path.join(__dirname, 'src', 'bootstrap')
            },
            shared: {
                faker: {
                    singleton: true,
                    version: '^5.1.0',
                    requiredVersion: '^5.0.0'
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ]
};
