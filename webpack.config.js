// const path = require('path');

// export default () => (
//     {
//         mode: 'production',
//         entry: './index.js',
//         output: {
//             path: path.resolve(__dirname, './dist'),
//             filename: 'webpack-numbers.js',
//             libraryTarget: 'umd',
//             globalObject: 'this',
//             library: 'AndcultureCode' // <---- Casing? `AndcultureCode` or `andcultureCode`?
//         },
//         externals: {
//             'lodash': {
//                 commonjs: 'lodash',
//                 commonjs2: 'lodash',
//                 amd: 'lodash',
//                 root: '_'
//             }
//         },
//         module: {
//             rules: [
//                 {
//                     test: /\.(js)$/,
//                     exclude: /(node_modules|bower_components)/,
//                     use: 'babel-loader'
//                 }
//             ]
//         },
//     }
// );

const path = require('path');

module.exports = {
    entry: './src/index-global.ts',
    externals: { // <---- externals defines those peer dependencies that should not be bundled in global output file and instead loaded by the consumer prior to loading this global output file
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_',
        },
        immutable: {
            commonjs: 'immutable',
            commonjs2: 'immutable',
            amd: 'immutable',
            root: 'Immutable',
        },
    },
    mode: 'development', // 'development' or 'production'
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist/global'),
        filename: 'andculture-code.js',
        library: 'AndcultureCode',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};