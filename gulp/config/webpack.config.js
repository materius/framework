import webpack from 'webpack';

module.exports = {
    output: {
        filename: 'app.js',
    },
    resolve: {
        alias: {
            'jquery-ui': 'jquery-ui/ui/widgets',
            'jquery-ui-css': 'jquery-ui/../../themes/base',
        }
    },
    // uncoment to minify webpack file
    plugins: [new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})],
}
