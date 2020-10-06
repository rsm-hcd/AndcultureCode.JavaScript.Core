const path = require('path');

module.exports = {
    entry: './src/index.ts',

    /*
        Externals below defines those peer dependencies that should not be bundled in global output
        file and instead be loaded by the consumer prior to loading the distributable that webpack
        generates.

        NOTE: Any externals that are commented out below are being included in the webpack
            distributable
    */
    externals: {
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
        // queryString: {
        //     commonjs: 'query-string',
        //     commonjs2: 'query-string',
        //     amd: 'query-string',
        //     root: 'QueryString',
        // },
    },
    mode: 'production', // 'development' or 'production'
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
        filename: 'index.js',
        library: 'AndcultureCode',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};