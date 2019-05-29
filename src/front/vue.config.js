const path = require('path');
const webpack = require('webpack');

const resolve = dir => path.join(__dirname, dir);

module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                src: resolve('src'),
                assets: resolve('src/assets'),
                components: resolve('src/components'),
                plugins: resolve('src/plugins'),
                router: resolve('src/router'),
                constants: resolve('src/constants'),
                utils: resolve('src/utils')
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                Vue: ['vue', 'default'],
                mapState: ['vuex', 'mapState'],
                mapGetters: ['vuex', 'mapGetters'],
                mapMutations: ['vuex', 'mapMutations'],
                mapActions: ['vuex', 'mapActions']
            }),
            new webpack.DefinePlugin({
                IS_PRODUCTION: process.env.NODE_ENV === 'production',
                IS_DEVELOPMENT: process.env.NODE_ENV === 'development'
            })
        ],
        devServer: {
            watchOptions: { poll: true },
            proxy: {
                '/static': {
                    target: 'http://localhost:3000',
                    secure: false,
                    changeOrigin: true
                },
                '/api': {
                    target: 'http://localhost:3000',
                    secure: false,
                    changeOrigin: true
                }
            }
        }
    }
};
