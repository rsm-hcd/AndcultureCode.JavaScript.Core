import "jest-extended/all";
import "./tests/factories";

// Run before each individual test across the entire test suite
beforeEach(() => {
    jest.resetAllMocks();
});
