//vue-cli配置文件，90%的配置都是webpack配置
module.exports = {
    devServer: {
        //配置代理
        proxy: {
            "/x": {
                //凡是以/x开头的请求，进行代理
                target: "http://api.bilibili.com",
                onProxyReq(proxyReq) {
                    proxyReq.setHeader('origin', 'http://www.bilibili.com');
                    proxyReq.setHeader('referer', 'http://www.bilibili.com/v/channel');
                }
            },
        },
    },
};