console.debug('当前环境配置：', process.env.VUE_APP_ENVIRONMENT);
module.exports = {
    // 选项...
    publicPath: './', //关键点
    //是否开启eslint校验
    lintOnSave: false,
    productionSourceMap: false,
    // webpack 配置
    configureWebpack: {
        plugins: [
        ],
        performance: {
            maxEntrypointSize: 10000000,
            maxAssetSize: 30000000
        }
    }
}
