module.exports = {
    globals: {
        "ts-jest": {
            diagnostics: false,
            tsconfig: "<rootDir>/tsconfig.json",
        },
    },
    moduleDirectories: ["node_modules", "src"],
    modulePathIgnorePatterns: ["<rootDir>/dist"],
    preset: "ts-jest",
    roots: ["<rootDir>/src"],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    testEnvironment: "jsdom",
};
