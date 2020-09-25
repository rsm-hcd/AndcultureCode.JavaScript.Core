import { ResultRecord } from "../view-models/result-record";
import {
    ResultErrorRecordFactory,
    ResultRecordFactory,
    StubResourceRecordFactory,
} from "../tests/factories";
import { Do, DoSync } from "../utilities/do-try";
import { PolyfillUtils } from "../utilities/polyfill-utils";
import { StubResourceRecord } from "../tests/stubs/stub-resource-record";
import { CoreUtils } from "../utilities/core-utils";

PolyfillUtils.registerPromiseFinallyPolyfill();

describe("do-try.ts", () => {
    describe("Do.try", () => {
        it("When a catch handler exists, finally is called after catch resolves", async () => {
            // Arrange
            let catchRanAtTimestamp: number;
            let finallyRanAtTimestamp: number;
            const workload = async () => {
                throw Error();
            };

            // Act
            await Do.try(workload)
                .catch(() => {
                    catchRanAtTimestamp = Date.now();
                    CoreUtils.sleepSync(1000);
                })
                .finally(() => (finallyRanAtTimestamp = Date.now()))
                .getAwaiter();

            // Assert
            expect(catchRanAtTimestamp).toBeLessThan(finallyRanAtTimestamp);
        });

        it("When validation errors occur (i.e. error is a ResultRecord), then passes typed errors to catch handler", async () => {
            // Arrange
            const workload = async () => {
                throw ResultRecordFactory.build({
                    errors: ResultErrorRecordFactory.buildList(1),
                });
            };

            // Act & Assert
            // since jest is using node promises, it fails the test as soon as the error
            // is thrown if we actually await the promise. expect.assertions(5) waits for
            // 5 assertions to be called.
            Do.try(workload).catch(
                (result?: ResultRecord<any>, error?: any) => {
                    expect(result).not.toBeNil();
                    expect(error).toBeUndefined();
                    expect(result!.resultObject).toBeUndefined();
                    expect(result!.errors).toHaveLength(1);
                }
            );
            expect.assertions(4);
        });

        it("When passed an async method and a Javascript error occurs, then passes along regular error", async () => {
            // Arrange
            const workload = async () => {
                throw Error();
            };

            // Act & Assert
            Do.try(workload).catch(
                (result?: ResultRecord<any>, error?: any) => {
                    expect(error).not.toBeNil();
                    expect(result).toBeUndefined();
                }
            );
            expect.assertions(2);
        });

        it("When no errors occur, then catch handler is never called", async () => {
            // Arrange
            const catchHandler = jest.fn();
            const workload = async () => {};

            // Act
            await Do.try(workload)
                .catch(catchHandler)
                .getAwaiter();

            // Assert
            expect(catchHandler).not.toHaveBeenCalled();
        });

        it("When no errors occur, then finally handler is still called", async () => {
            // Arrange
            const finallyHandler = jest.fn();
            const workload = async () => {};

            // Act
            await Do.try(workload)
                .finally(finallyHandler)
                .getAwaiter();

            // Assert
            expect(finallyHandler).toHaveBeenCalled();
        });

        it("When errors occur, then finally handler is still called", async () => {
            // Arrange
            const catchHandler = jest.fn();
            const workload = async () => {
                throw Error();
            };
            let finallyCalled = false;

            // Act & Assert
            Do.try(workload)
                .catch(catchHandler)
                .finally(() => {
                    finallyCalled = true;
                    expect(finallyCalled).toBeTrue();
                });
        });
    });

    describe("DoSync.try", () => {
        it("When no errors occur, then .execute() returns the workload return value", () => {
            // Arrange
            const workload = () => StubResourceRecordFactory.build();

            // Act
            const result = DoSync.try(workload).execute();

            // Assert
            expect(result).not.toBeNil();
            expect(result).toBeInstanceOf(StubResourceRecord);
        });

        it("When Javascript errors occur, then catch handler is passed regular error and return value is undefined", () => {
            // Arrange
            const workload = () => {
                throw Error();
            };

            // Act
            const result = DoSync.try(workload)
                .catch((result?: ResultRecord<any>, error?: any) => {
                    expect(result).toBeUndefined();
                    expect(error).not.toBeNil();
                })
                .execute();

            // Assert
            expect(result).toBeUndefined();
        });

        it("When validation error occurs, then catch handler is passed ResultRecord and return value is undefined", () => {
            // Arrange
            const workload = () => {
                throw ResultRecordFactory.build({
                    errors: ResultErrorRecordFactory.buildList(1),
                });
            };

            // Act
            const result = DoSync.try(workload)
                .catch((result?: ResultRecord<any>, error?: any) => {
                    expect(error).toBeUndefined();
                    expect(result).not.toBeNil();
                    expect(result!.resultObject).toBeUndefined();
                    expect(result!.errors).toHaveLength(1);
                })
                .execute();

            // Assert
            expect(result).toBeUndefined();
        });

        it("When errors occur, then finally handler is still called and return value is undefined", () => {
            // Arrange
            const finallyHandler = jest.fn();
            const workload = () => {
                throw Error();
            };

            // Act
            const result = DoSync.try(workload)
                .finally(finallyHandler)
                .execute();

            // Assert
            expect(result).toBeUndefined();
            expect(finallyHandler).toHaveBeenCalled();
        });

        it("When no errors occur, then finally handler is still called and return value is not undefined", () => {
            // Arrange
            const finallyHandler = jest.fn();
            const workload = () => StubResourceRecordFactory.build();

            // Act
            const result = DoSync.try(workload)
                .finally(finallyHandler)
                .execute();

            // Assert
            expect(result).toBeInstanceOf(StubResourceRecord);
            expect(finallyHandler).toHaveBeenCalled();
        });
    });
});
