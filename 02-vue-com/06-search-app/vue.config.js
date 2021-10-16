module.exports = {
    devServer: {
        proxy: {
            '/v1': {
                target: 'https://api.github.com',
                pathRewrite: {'^/v1': ''},
                ws: true,
                changeOrigin: true,
            },
        },
    },
    lintOnSave: false
}