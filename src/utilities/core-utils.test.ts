import { CoreUtils } from "./core-utils";

describe("CoreUtils", () => {
    // -----------------------------------------------------------------------------------------
    // #region enumToArray
    // -----------------------------------------------------------------------------------------

    describe("enumToArray", () => {
        test("when given enum, returns array of values", () => {
            // Arrange
            enum testEnum {
                first = "First",
                second = "Second",
            }

            // Act
            const result = CoreUtils.enumToArray(testEnum);

            // Assert
            expect(result).toContain(testEnum.first);
            expect(result).toContain(testEnum.second);
        });

        test("when given null enum, returns empty array", () => {
            // Act
            const result = CoreUtils.enumToArray(null);

            // Assert
            expect(result).toHaveLength(0);
            expect(result).toBeInstanceOf(Array);
        });
    });

    // #endregion enumToarray

    // -----------------------------------------------------------------------------------------
    // #region getRandomEnum
    // -----------------------------------------------------------------------------------------

    describe("getRandomEnum", () => {
        test("when given enum, returns random value", () => {
            // Arrange
            enum testEnum {
                first = "First",
                second = "Second",
                third = "Third",
            }
            const expectedValues = [
                testEnum.first,
                testEnum.second,
                testEnum.third,
            ];

            // Act
            const result = CoreUtils.getRandomEnum(testEnum);

            // Assert
            expect(result).not.toBeNull();
            expect(expectedValues).toContain(result);
        });

        test("when given enum and exclude element, returns random value and not excluded element", () => {
            // Arrange
            enum testEnum {
                first = "First",
                second = "Second",
                third = "Third",
            }
            const expectedValues = [testEnum.first, testEnum.second];

            // Act
            const result = CoreUtils.getRandomEnum(testEnum, testEnum.third);

            // Assert
            expect(result).not.toBeNull();
            expect(expectedValues).toContain(result);
            expect(result).not.toBe(testEnum.third);
        });
    });

    // #endregion getRandomEnum

    // -----------------------------------------------------------------------------------------
    // #region timer
    // -----------------------------------------------------------------------------------------

    describe("timer", () => {
        test("returns timer object", () => {
            // Act
            const result = CoreUtils.timer("test timer");

            // Assert
            expect(result).not.toBeNull();
            expect(result).not.toBeUndefined();
        });

        test("returns timer object with stop method", () => {
            // Act
            const result = CoreUtils.timer("test timer");

            // Assert
            expect(result.stop).not.toBeNull();
            expect(result.stop).not.toBeUndefined();
            expect(result.stop).toBeInstanceOf(Function);
        });

        // -----------------------------------------------------------------------------------------
        // #region timer#stop
        // -----------------------------------------------------------------------------------------

        describe("timer#stop", () => {
            test("returns elapsed time", async () => {
                // Arrange
                const sut = CoreUtils.timer("test timer");

                // Act
                await CoreUtils.sleep(2);
                const result = sut.stop();

                // Assert
                expect(result).not.toBeNull();
                expect(result).not.toBeUndefined();
                expect(result).toBeGreaterThan(0);
            });

            test("when log disabled, does not log to the console", () => {
                // Arrange
                const consoleSpy = jest.spyOn(console, "log");
                const sut = CoreUtils.timer("test timer");

                // Act
                sut.stop(); // <---- logging disabled

                // Assert
                expect(consoleSpy).not.toHaveBeenCalled();
            });

            test("when log enabled, logs to the console", async () => {
                // Arrange
                const consoleSpy = jest.spyOn(console, "log");
                const sut = CoreUtils.timer("test timer");

                // Act
                sut.stop(true); // <---- logging enabled

                // Assert
                expect(consoleSpy).toHaveBeenCalled();
            });

            test("when log enabled, logs to the console the test name", async () => {
                // Arrange
                const consoleSpy = jest.spyOn(console, "log");
                const expectedTimer = "test timer";
                const sut = CoreUtils.timer(expectedTimer);

                // Act
                sut.stop(true); // <---- logging enabled

                // Assert
                expect(consoleSpy.mock.calls[0]).toContain(expectedTimer);
            });

            test("when log enabled, logs to the console time elapsed", async () => {
                // Arrange
                const consoleSpy = jest.spyOn(console, "log");
                const sut = CoreUtils.timer("test timer");

                // Act
                await CoreUtils.sleep(1);
                const result = sut.stop(true); // <---- logging enabled

                // Assert
                expect(consoleSpy.mock.calls[0]).toContain(result);
            });
        });

        // #endregion timer#stop
    });

    // #endregion timer
});
