import "jest-extended";

require("jest-extended");
require("tests/factories");

// Run before each individual test across the entire test suite
beforeEach(() => {
    jest.resetAllMocks();
});
