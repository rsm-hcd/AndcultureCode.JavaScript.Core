import { EnvironmentUtils } from "./environment-utils";

describe("EnvironmentUtils", () => {
    const originalEnv = process.env;

    // Save old process.env and replace it after each test
    // See https://stackoverflow.com/a/48042799 for reference
    beforeEach(() => {
        jest.resetModules(); // this is important - it clears the cache
        process.env = { ...originalEnv };
        delete process.env;
    });

    afterEach(() => {
        process.env = originalEnv;
    });

    // -----------------------------------------------------------------------------------------
    // #region isDevelopment()
    // -----------------------------------------------------------------------------------------

    describe("isDevelopment()", () => {
        test("when process.env.NODE_ENV is set to 'development', it returns true", () => {
            // Arrange
            const newEnv = { ...originalEnv };
            newEnv.NODE_ENV = "development";
            process.env = newEnv;

            // Act
            const result = EnvironmentUtils.isDevelopment();

            // Assert
            expect(result).toBeTrue();
        });

        test("when process.env.NODE_ENV is set to 'production', it returns false", () => {
            // Arrange
            const newEnv = { ...originalEnv };
            newEnv.NODE_ENV = "production";
            process.env = newEnv;

            // Act
            const result = EnvironmentUtils.isDevelopment();

            // Assert
            expect(result).toBeFalse();
        });
    });

    // #endregion isDevelopment()

    // -----------------------------------------------------------------------------------------
    // #region runIfDevelopment()
    // -----------------------------------------------------------------------------------------

    describe("runIfDevelopment()", () => {
        test("when process.env.NODE_ENV is set to 'development', it runs the function", () => {
            // Arrange
            const newEnv = { ...originalEnv };
            newEnv.NODE_ENV = "development";
            process.env = newEnv;
            const fn = jest.fn();

            // Act
            EnvironmentUtils.runIfDevelopment(() => fn());

            // Assert
            expect(fn).toHaveBeenCalled();
        });

        test("when process.env.NODE_ENV is set to 'production', it does not run the function", () => {
            // Arrange
            const newEnv = { ...originalEnv };
            newEnv.NODE_ENV = "production";
            process.env = newEnv;
            const fn = jest.fn();

            // Act
            EnvironmentUtils.runIfDevelopment(() => fn());

            // Assert
            expect(fn).not.toHaveBeenCalled();
        });
    });

    // #endregion runIfDevelopment()
});
