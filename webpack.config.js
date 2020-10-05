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
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};