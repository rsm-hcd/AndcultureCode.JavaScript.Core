import { RecordUtils } from "./record-utils";
import { Record } from "immutable";
import { Entity } from "../interfaces/entity";
import { ResultRecord } from "../view-models/result-record";

describe("RecordUtils", () => {
    // -----------------------------------------------------------------------------------------
    // #region Stubs
    // -----------------------------------------------------------------------------------------

    class StubRecord extends Record({ id: undefined }) implements Entity {}

    // #endregion Stubs

    // -----------------------------------------------------------------------------------------
    // #region ensureRecord
    // -----------------------------------------------------------------------------------------

    describe("ensureRecord", () => {
        test.each`
            value
            ${undefined}
            ${null}
            ${{}}
            ${{ id: undefined }}
            ${{ id: 1 }}
        `("given '$value', it returns a new record", ({ value }) => {
            // Arrange & Act
            const result = RecordUtils.ensureRecord(value, StubRecord);

            // Assert
            expect(result).toBeInstanceOf(StubRecord);
        });

        test("given an instance of the record, it returns the same instance", () => {
            // Arrange
            const record = new StubRecord();

            // Act
            const result = RecordUtils.ensureRecord(record, StubRecord);

            // Assert
            expect(result).toBeInstanceOf(StubRecord);
            expect(result).toBe(record); // Intentionally using toBe to check referencial equality
        });
    });

    // #endregion ensureRecord

    // -----------------------------------------------------------------------------------------
    // #region isRecord
    // -----------------------------------------------------------------------------------------

    describe("isRecord", () => {
        test.each`
            value
            ${undefined}
            ${null}
        `("given '$value', it returns false", ({ value }) => {
            // Arrange & Act
            const result = RecordUtils.isRecord(value, StubRecord);

            // Assert
            expect(result).toBeFalse();
        });

        test("given an empty POJO '{}', it returns false", () => {
            // Arrange
            const pojo = {};

            // Act
            const result = RecordUtils.isRecord(pojo, StubRecord);

            // Assert
            expect(result).toBeFalse();
        });

        test("given a POJO matching the record's interface, it returns false", () => {
            // Arrange
            const pojo: Entity = { id: 1 };

            // Act
            const result = RecordUtils.isRecord(pojo, StubRecord);

            // Assert
            expect(result).toBeFalse();
        });

        test("given a POJO cast as the type of record, it returns false", () => {
            // Arrange
            const pojoInDisguise: StubRecord = ({ id: 1 } as any) as StubRecord;

            // Act
            const result = RecordUtils.isRecord(pojoInDisguise, StubRecord);

            // Assert
            expect(result).toBeFalse();
        });

        test("given an instance of some other typed record, it returns false", () => {
            // Arrange
            const nonMatchingRecord = new ResultRecord();

            // Act
            const result = RecordUtils.isRecord(nonMatchingRecord, StubRecord);

            // Assert
            expect(result).toBeFalse();
        });

        test("given an instance of the specified record, it returns true", () => {
            // Arrange
            const record = new StubRecord();

            // Act
            const result = RecordUtils.isRecord(record, StubRecord);

            // Assert
            expect(result).toBeTrue();
        });
    });

    // #endregion isRecord
});
