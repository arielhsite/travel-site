const { watchFile } = require('fs')
const path = require('path')

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    entry: '/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname) 
    },
    devServer: {
        watchFiles: ["**/*.html"],
        static: {
            directory: path.join(__dirname),
            watch: false
        },
        hot: true,
        port: 3000,
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", { loader: "css-loader", options: { url: false } }, { loader: "postcss-loader", options: { postcssOptions: { plugins: postCSSPlugins } } }]
            }
        ]
    }
}