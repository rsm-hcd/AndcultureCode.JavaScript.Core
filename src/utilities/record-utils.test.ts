import { RecordUtils } from "./record-utils";
import { Record } from "immutable";
import { ResultRecord } from "../view-models/result-record";
import {
    TestUtils,
    StubResourceRecord,
    StubResource,
} from "andculturecode-javascript-testing";
import { FactoryType } from "../tests/factories/factory-type";
import { Factory } from "rosie";
import { User } from "../interfaces/user";
import { RequiredOrUndefined } from "../types/required-or-undefined";

describe("RecordUtils", () => {
    // -----------------------------------------------------------------------------------------
    // #region Setup
    // -----------------------------------------------------------------------------------------

    const defineUserRecord = (defaultValues: Partial<User>) =>
        class UserRecord extends Record(defaultValues as User)
            implements User {};

    // #endregion Setup

    // -----------------------------------------------------------------------------------------
    // #region auditableDefaultValuesFactory
    // -----------------------------------------------------------------------------------------

    describe("auditableDefaultValuesFactory", () => {
        test("when auditable values not provided in class definition, returns record without properties set", () => {
            // Arrange

            // Because we're not sending through values (even undefined) to the class definition
            // they will not be set even when supplied during construction. If immutable ever
            // changes this behavior, this test should let us know
            const UserRecord = defineUserRecord({});

            // Act
            const sut = new UserRecord({
                createdById: TestUtils.faker.datatype.number(),
                createdOn: TestUtils.faker.datatype.string(),
                deletedById: TestUtils.faker.datatype.number(),
                deletedOn: TestUtils.faker.datatype.string(),
                updatedById: TestUtils.faker.datatype.number(),
                updatedOn: TestUtils.faker.datatype.string(),
            });

            // Assert
            expect(sut.createdById).toBeUndefined();
            expect(sut.createdOn).toBeUndefined();
            expect(sut.deletedById).toBeUndefined();
            expect(sut.deletedOn).toBeUndefined();
            expect(sut.updatedById).toBeUndefined();
            expect(sut.updatedOn).toBeUndefined();
        });

        test("when auditable values provided to constructor, returns record with properties set", () => {
            // Arrange
            const defaultValues = RecordUtils.auditableDefaultValuesFactory<
                User
            >({
                email: TestUtils.randomWord(),
                firstName: TestUtils.randomWord(),
                isSuperAdmin: TestUtils.faker.datatype.boolean(),
                lastName: TestUtils.randomWord(),
                userName: TestUtils.randomWord(),
            });

            const UserRecord = defineUserRecord(defaultValues);

            // Act
            const sut = new UserRecord({
                createdById: TestUtils.faker.datatype.number(),
                createdOn: TestUtils.faker.datatype.string(),
                deletedById: TestUtils.faker.datatype.number(),
                deletedOn: TestUtils.faker.datatype.string(),
                id: TestUtils.faker.datatype.number(),
                updatedById: TestUtils.faker.datatype.number(),
                updatedOn: TestUtils.faker.datatype.string(),
            });

            // Assert
            expect(sut.createdById).toBeDefined();
            expect(sut.createdOn).toBeDefined();
            expect(sut.deletedById).toBeDefined();
            expect(sut.deletedOn).toBeDefined();
            expect(sut.id).toBeDefined();
            expect(sut.updatedById).toBeDefined();
            expect(sut.updatedOn).toBeDefined();
        });

        test("when T values provided to constructor, returns record with properties set", () => {
            // Arrange
            const expectedFirstName = TestUtils.randomWord();
            const expectedLastName = TestUtils.randomWord();
            const defaultValues = RecordUtils.auditableDefaultValuesFactory<
                User
            >({
                email: TestUtils.randomWord(),
                firstName: `not-${expectedFirstName}`,
                isSuperAdmin: TestUtils.faker.datatype.boolean(),
                lastName: `not-${expectedLastName}`,
                userName: TestUtils.randomWord(),
            });

            const UserRecord = defineUserRecord(defaultValues);

            // Act
            const sut = new UserRecord({
                firstName: expectedFirstName,
                lastName: expectedLastName,
            });

            // Assert
            expect(sut.firstName).toBe(expectedFirstName);
            expect(sut.lastName).toBe(expectedLastName);
        });
    });

    // #endregion auditableDefaultValuesFactory

    // -----------------------------------------------------------------------------------------
    // #region defaultValuesFactory
    // -----------------------------------------------------------------------------------------

    describe("defaultValuesFactory", () => {
        test("returns unmodified object", () => {
            // Arrange
            const expectedReference: RequiredOrUndefined<User> = {
                createdById: undefined,
                createdOn: undefined,
                deletedById: undefined,
                deletedOn: undefined,
                email: TestUtils.randomWord(),
                firstName: TestUtils.randomWord(),
                id: undefined,
                isSuperAdmin: TestUtils.faker.datatype.boolean(),
                lastName: TestUtils.randomWord(),
                updatedById: undefined,
                updatedOn: undefined,
                userName: TestUtils.randomWord(),
            };
            const expectedStructure: RequiredOrUndefined<User> = {
                ...expectedReference,
            };

            // Act
            const result = RecordUtils.defaultValuesFactory(expectedReference);

            // Assert
            expect(result).toBe(expectedReference);
            expect(result).toStrictEqual(expectedStructure);
        });
    });

    // #endregion defaultValuesFactory

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
            const result = RecordUtils.ensureRecord(value, StubResourceRecord);

            // Assert
            expect(result).toBeInstanceOf(StubResourceRecord);
        });

        test("given an instance of the record, it returns the same instance", () => {
            // Arrange
            const record = Factory.build<StubResourceRecord>(
                FactoryType.StubResourceRecord
            );

            // Act
            const result = RecordUtils.ensureRecord(record, StubResourceRecord);

            // Assert
            expect(result).toBeInstanceOf(StubResourceRecord);
            expect(result).toBe(record); // Intentionally using toBe to check referencial equality
        });
    });

    // #endregion ensureRecord

    // -----------------------------------------------------------------------------------------
    // #region ensureRecords
    // -----------------------------------------------------------------------------------------

    describe("ensureRecords", () => {
        test("given empty array, returns empty array", () => {
            // Arrange & Act
            const result = RecordUtils.ensureRecords<
                StubResource,
                StubResourceRecord
            >([], StubResourceRecord);

            // Assert
            expect(result).toBeEmpty();
        });

        test("given a POJO matching the record's interface, returns a new record", () => {
            // Arrange
            const pojo: StubResource = { id: 1 };

            // Act
            const result = RecordUtils.ensureRecords(
                [pojo],
                StubResourceRecord
            );

            // Assert
            expect(result).toHaveLength(1);
            expect(result[0]).toBeInstanceOf(StubResourceRecord);
        });

        test("given an instance of the record, returns the same instance", () => {
            // Arrange
            const expected = Factory.build<StubResourceRecord>(
                FactoryType.StubResourceRecord
            );

            // Act
            const result = RecordUtils.ensureRecords(
                [expected],
                StubResourceRecord
            );

            // Assert
            expect(result).toHaveLength(1);
            expect(result[0]).toBeInstanceOf(StubResourceRecord);
            expect(result[0]).toBe(expected); // Intentionally using toBe to check referencial equality
        });
    });

    // #endregion ensureRecords

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
            const result = RecordUtils.isRecord(value, StubResourceRecord);

            // Assert
            expect(result).toBeFalse();
        });

        test("given an empty POJO '{}', it returns false", () => {
            // Arrange
            const pojo = {};

            // Act
            const result = RecordUtils.isRecord(pojo, StubResourceRecord);

            // Assert
            expect(result).toBeFalse();
        });

        test("given a POJO matching the record's interface, it returns false", () => {
            // Arrange
            const pojo: StubResource = { id: 1 };

            // Act
            const result = RecordUtils.isRecord(pojo, StubResourceRecord);

            // Assert
            expect(result).toBeFalse();
        });

        test("given a POJO cast as the type of record, it returns false", () => {
            // Arrange
            const pojoInDisguise: StubResourceRecord = ({
                id: 1,
            } as any) as StubResourceRecord;

            // Act
            const result = RecordUtils.isRecord(
                pojoInDisguise,
                StubResourceRecord
            );

            // Assert
            expect(result).toBeFalse();
        });

        test("given an instance of some other typed record, it returns false", () => {
            // Arrange
            const nonMatchingRecord = Factory.build<ResultRecord<any>>(
                FactoryType.ResultRecord
            );

            // Act
            const result = RecordUtils.isRecord(
                nonMatchingRecord,
                StubResourceRecord as any
            );

            // Assert
            expect(result).toBeFalse();
        });

        test("given an instance of the specified record, it returns true", () => {
            // Arrange
            const record = Factory.build<StubResourceRecord>(
                FactoryType.StubResourceRecord
            );

            // Act
            const result = RecordUtils.isRecord(record, StubResourceRecord);

            // Assert
            expect(result).toBeTrue();
        });
    });

    // #endregion isRecord
});
