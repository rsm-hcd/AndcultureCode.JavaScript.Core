import { CoreUtils } from "./core-utils";

describe("CoreUtils", () => {
    describe("enumToArray", () => {
        test.skip("TODO: Backfill tests to complete issue https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/issues/29", () => {});
    });

    describe("getRandomEnum", () => {
        test.skip("TODO: Backfill tests to complete issue https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/issues/29", () => {});
    });

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
        }); // end timer#stop
    }); // end timer
});
