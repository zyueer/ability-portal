// vue.config.js
var lodashWebpackPlugin = require('lodash-webpack-plugin')
var compressionWebpackPlugin = require('compression-webpack-plugin')
var path = require('path')
module.exports = {
    // 选项...
    publicPath: process.env.PUBLIC_PATH,
    outputDir: process.env.outputDir,
    pages: {    //多页面
        login: {
            entry: 'src/pages/login/index.js',     // page 的入口
            template: 'src/pages/login/index.html',      // 模板来源
            filename: 'login.html',     // 在 dist/index.html 的输出
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'login', 'base']
        },
        main: {
            entry: 'src/pages/main/main.js',     // page 的入口
            template: 'src/pages/main/main.html',      // 模板来源
            filename: 'main.html',     // 在 dist/index.html 的输出
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'main', 'base']
        },
    },
    chainWebpack: config=>{
      config.resolve.alias
          .set('src', path.join(__dirname, 'src'))
        // 删除这个 preload 插件。
        config.plugins.delete('preload');
    },
    configureWebpack: config => {
        let common = {
            plugins: [
                new lodashWebpackPlugin(),      //引入lodash-webpack-plugin，減少lodash的打包体积
            ],
            devtool: 'source-map'
        }
        if (process.env.NODE_ENV === 'production') {
            common.plugins.push(
                new compressionWebpackPlugin({//  开启 gzip压缩插件
                    test: /\.js$|\.html$|.\css/, //匹配文件名
                    threshold: 10240,//对超过10K的数据压缩
                    deleteOriginalAssets: false //不删除源文件
                })
            )
            return common
        } else {
            // 为开发环境修改配置...
        }
    },
    // css:{
    //     loaderOptions:{
    //         saaa:{
    //             implementation: require('sass'),
    //             sassOptions:{
    //                 fiber: false,
    //             }
    //         }
    //     }
    // }

}