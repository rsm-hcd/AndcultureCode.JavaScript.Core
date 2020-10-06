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
        "axios": {
            commonjs: 'axios',
            commonjs2: 'axios',
            amd: 'axios',
            root: 'axios',
        },
        "humanize-plus": {
            commonjs: 'humanize-plus',
            commonjs2: 'humanize-plus',
            amd: 'humanize-plus',
            root: 'Humanize',
        },
        "i18next": {
            commonjs: 'i18next',
            commonjs2: 'i18next',
            amd: 'i18next',
            root: 'i18next',
        },
        "immutable": {
            commonjs: 'immutable',
            commonjs2: 'immutable',
            amd: 'immutable',
            root: 'Immutable',
        },
        "lodash": {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_',
        },
        // queryString: { <---- Vendoring (including in output) this library since it uses a module loader and it's a fairly small source lift
        //     commonjs: 'query-string',
        //     commonjs2: 'query-string',
        //     amd: 'query-string',
        //     root: 'QueryString',
        // },
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