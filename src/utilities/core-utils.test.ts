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
            expect(result).toHaveLength(2);
        });

        test("when given null enum, returns empty array", () => {
            // Act
            const result = CoreUtils.enumToArray(null);

            // Assert
            expect(result).toBeEmpty();
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
            let resultArray = [];

            // Act
            const singleResult = CoreUtils.getRandomEnum(testEnum);
            for (let i = 0; i < 50; i++) {
                resultArray.push(CoreUtils.getRandomEnum(testEnum));
            }
            resultArray.sort();

            // Assert
            expect(resultArray).not.toBeNull();
            expect(expectedValues).toContain(singleResult);
            expect(resultArray[0]).not.toEqual(
                resultArray[resultArray.length - 1]
            );
        });

        test("when given enum and exclude element, returns random value and not excluded element", () => {
            // Arrange
            enum testEnum {
                first = "First",
                second = "Second",
                third = "Third",
            }
            const resultArray = [];

            // Act
            for (let i = 0; i < 50; i++) {
                resultArray.push(
                    CoreUtils.getRandomEnum(testEnum, testEnum.third)
                );
            }

            // Assert
            expect(resultArray).not.toBeEmpty();
            expect(resultArray).not.toContain(testEnum.third);
        });
    });

    // #endregion getRandomEnum

    // -----------------------------------------------------------------------------------------
    // #region numericEnumToPojo
    // -----------------------------------------------------------------------------------------

    describe("numericEnumToPojo ", () => {
        test("when given numeric enum, returns an object of values", () => {
            // Arrange
            enum testEnum {
                first = 0,
                second = 1,
                third = 2,
            }

            // Act
            const result = CoreUtils.numericEnumToPojo(testEnum);
            const values = Object.values(result);

            // Assert
            expect(values[0]).toBe(testEnum.first);
            expect(values[1]).toBe(testEnum.second);
            expect(values[2]).toBe(testEnum.third);
            expect(values).toHaveLength(3);
        });

        test("when given non numeric enum, returns object of values", () => {
            // Arrange
            enum testEnum {
                first = "First",
                second = "Second",
            }

            // Act
            const result = CoreUtils.numericEnumToPojo(testEnum);
            const values = Object.values(result);

            // Assert
            expect(values[0]).toBe(testEnum.first);
            expect(values[1]).toBe(testEnum.second);
            expect(values).toHaveLength(2);
        });

        test("when given null enum, returns empty object", () => {
            // Act
            const result = CoreUtils.numericEnumToPojo(null);

            // Assert
            expect(result).toMatchObject({});
            expect(result).toBeEmpty();
        });
    });

    // #endregion numericEnumToPojo

    // -------------------------------------------------------------------------------------------------
    // #region ObjectToArray
    // -------------------------------------------------------------------------------------------------

    describe("objectToArray", () => {
        test("given an object, convert it to array of values", () => {
            // Arrange
            const testObject = {
                name: "Jane",
                age: 30,
            };

            // Act
            const result = CoreUtils.objectToArray(testObject);

            // Assert
            expect(result).toContain(testObject.name);
            expect(result).toContain(testObject.age);
            expect(result).toHaveLength(2);
        });

        test("given an empty object, return an empty array", () => {
            // Arrange
            const testObject = {};

            // Act
            const result = CoreUtils.objectToArray(testObject);

            // Assert
            expect(result).toBeEmpty();
        });
    });

    // #endregion ObjectToArray

    // -------------------------------------------------------------------------------------------------
    // #region sleep
    // -------------------------------------------------------------------------------------------------

    describe("sleep", () => {
        test("given n milliseconds in debug mode, outputs a log at start and end of scheduled duration", () => {
            // Arrange
            jest.useFakeTimers();
            const consoleSpy = jest.spyOn(console, "log");

            // Act
            CoreUtils.sleep(2000, true);

            // At this point in time, only sleep start is printed out
            expect(consoleSpy).toHaveBeenLastCalledWith("sleep start");

            // Run 1 second later, "sleep end" has not been called yet
            jest.advanceTimersByTime(1000);
            expect(consoleSpy).not.toHaveBeenLastCalledWith("sleep end");

            // Fast-forward until all timers have been executed
            jest.runAllTimers();

            // Assert
            expect(consoleSpy).toHaveBeenLastCalledWith("sleep end");
            jest.clearAllTimers();
            jest.useRealTimers();
        });
    });

    // #endregion sleep

    // -------------------------------------------------------------------------------------------------
    // #region sleepSync
    // -------------------------------------------------------------------------------------------------

    describe("sleepSync", () => {
        test("given n milliseconds, it blocks the execution until delay duration has completed", () => {
            // Arrange && Act
            const firstCall = performance.now();
            CoreUtils.sleepSync(3000);
            const secondCall = performance.now();

            // Assert
            expect(Math.ceil(secondCall - firstCall)).toBeGreaterThanOrEqual(
                3000
            );
        });
    });

    // #endregion sleepSync

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
