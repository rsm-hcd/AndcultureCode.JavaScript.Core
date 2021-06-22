const path = require("path");
const fs = require("fs");

const currentWorkingDirectory = __dirname;

const configPromise = new Promise(function(resolve, reject) {
    // read the webpack dependency externals config from a separate JSON file
    fs.readFile("dependency-externals.json", "utf8", (err, externalsData) => {
        if (err) {
            reject(
                `Unable to read './dependency-externals.json' file.  Reason: ${err}`
            );
        }

        let externalsConfig = {};
        try {
            externalsConfig = JSON.parse(externalsData);
        } catch (e) {
            reject(
                `Unable to convert './dependency-externals.json' file data to JSON object.  Reason: ${e}`
            );
        }

        const webpackConfig = {
            entry: path.resolve(currentWorkingDirectory, "src/index.ts"),
            mode: "production",
            module: {
                rules: [
                    {
                        test: /\.tsx?$/,
                        use: [
                            {
                                loader: "ts-loader",
                                options: {
                                    configFile: "tsconfig.dist.json",
                                },
                            },
                        ],
                        exclude: /node_modules/,
                    },
                ],
            },
            output: {
                path: path.resolve(__dirname, "dist-global"),
                filename: "index.js",
                library: "AndcultureCode",
                libraryTarget: "umd",
            },
            resolve: {
                extensions: [".ts", ".js"],
            },
        };

        // add the externals config to the webpack config
        Object.assign(webpackConfig, externalsConfig);

        resolve(webpackConfig);
    });
});

module.exports = configPromise;
