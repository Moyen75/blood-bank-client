const path = require('path');

module.exports = {
    output: {
        filename: 'my-first-webpack.bundle.js',
    },
    module: {
        rules: [{ test: /\.txt$/, use: 'raw-loader' }],
    },
    devServer: {
        setupMiddlewares: (middlewares, devServer) => {
            middleware1(devServer.app)
            middleware2(devServer.app)
        
            return middlewares
        },
    },
};
