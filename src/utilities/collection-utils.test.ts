import { List } from "immutable";
import { CollectionUtils } from "./collection-utils";
import { ResultRecord } from "../view-models/result-record";

describe("CollectionUtils", () => {
    describe("hasValues", () => {
        test("when collections param is null, it returns false", (): void => {
            // Arrange
            const collection = null;

            // Act
            const result = CollectionUtils.hasValues(collection);

            // Assert
            expect(result).toBeFalse();
        });

        test("when collections param is undefined, it returns false", (): void => {
            // Arrange
            const collection = undefined;

            // Act
            const result = CollectionUtils.hasValues(collection);

            // Assert
            expect(result).toBeFalse();
        });

        test("when collections param is an array and has elements, it returns true", (): void => {
            // Arrange
            const collection = [{}];

            // Act
            const result = CollectionUtils.hasValues(collection);

            // Assert
            expect(result).toBeTrue();
        });

        test("when collections param is an array and has no elements, it returns false", (): void => {
            // Arrange
            const collection: any[] = [];

            // Act
            const result = CollectionUtils.hasValues(collection);

            // Assert
            expect(result).toBeFalse();
        });

        test("when collections param is a list and has elements, it returns true", (): void => {
            // Arrange
            const collection = List([{}]);

            // Act
            const result = CollectionUtils.hasValues(collection);

            // Assert
            expect(result).toBeTrue();
        });

        test("when collections param is a list and has no elements, it returns false", (): void => {
            // Arrange
            const collection = List([]);

            // Act
            const result = CollectionUtils.hasValues(collection);

            // Assert
            expect(result).toBeFalse();
        });

        test("when collections param has at least one non-empty collection, it returns true", (): void => {
            // Arrange
            const collection1 = [new ResultRecord()];
            const collection2 = List();

            // Act
            const result = CollectionUtils.hasValues(collection1, collection2);

            // Assert
            expect(result).toBeTrue();
        });

        test("when collections param contains only empty collections, it returns false", (): void => {
            // Arrange
            const collection1: any[] = [];
            const collection2 = List();

            // Act
            const result = CollectionUtils.hasValues(collection1, collection2);

            // Assert
            expect(result).toBeFalse();
        });

        test("when collections param is undefined, it returns false", (): void => {
            // Arrange & Act
            const result = CollectionUtils.hasValues(
                (undefined as unknown) as any[]
            );

            // Assert
            expect(result).toBeFalse();
        });

        test("when collections param is null, it returns false", (): void => {
            // Arrange & Act
            const result = CollectionUtils.hasValues(
                (null as unknown) as any[]
            );

            // Assert
            expect(result).toBeFalse();
        });

        test("when collections param contains undefined, null, and at least one collection with values, it returns true", (): void => {
            // Arrange
            const collection = [new ResultRecord()];
            const nullCollection = (null as unknown) as any[];
            const undefinedCollection = (undefined as unknown) as any[];

            // Act
            const result = CollectionUtils.hasValues(
                undefinedCollection,
                nullCollection,
                collection
            );

            // Assert
            expect(result).toBeTrue();
        });
    }); // end hasValues

    describe("isEmpty", () => {
        test(`when collections is null, it returns true`, (): void => {
            // Arrange
            const collection = null;

            // Act
            const result = CollectionUtils.isEmpty(collection);

            // Assert
            expect(result).toBeTrue();
        });

        test(`when collections is undefined, it returns true`, (): void => {
            // Arrange
            const collection = undefined;

            // Act
            const result = CollectionUtils.isEmpty(collection);

            // Assert
            expect(result).toBeTrue();
        });

        test(`when collections param is an array and has elements, it returns false`, (): void => {
            // Arrange
            const collection = [{}];

            // Act
            const result = CollectionUtils.isEmpty(collection);

            // Assert
            expect(result).toBeFalse();
        });

        test("when collections param is an array and has no elements, it returns true", (): void => {
            // Arrange
            const collection: any[] = [];

            // Act
            const result = CollectionUtils.isEmpty(collection);

            // Assert
            expect(result).toBeTrue();
        });

        test("when collections param is a list and has elements, it returns false", (): void => {
            // Arrange
            const collection = List([{}]);

            // Act
            const result = CollectionUtils.isEmpty(collection);

            // Assert
            expect(result).toBeFalse();
        });

        test("when collections param is a list and has no elements, it returns true", (): void => {
            // Arrange
            const collection = List([]);

            // Act
            const result = CollectionUtils.isEmpty(collection);

            // Assert
            expect(result).toBeTrue();
        });

        test("when collections param has at least one non-empty collection, it returns false", (): void => {
            // Arrange
            const collection1 = [new ResultRecord()];
            const collection2 = List();

            // Act
            const result = CollectionUtils.isEmpty(collection1, collection2);

            // Assert
            expect(result).toBeFalse();
        });

        test("when collections param has multiple empty collections, it returns true", (): void => {
            // Arrange
            const collection1: any[] = [];
            const collection2 = List();

            // Act
            const result = CollectionUtils.isEmpty(collection1, collection2);

            // Assert
            expect(result).toBeTrue();
        });

        test("when collections param is undefined, it returns true", (): void => {
            // Arrange & Act
            const result = CollectionUtils.isEmpty(
                (undefined as unknown) as any[]
            );

            // Assert
            expect(result).toBeTrue();
        });

        test("when collections param is null, it returns true", (): void => {
            // Arrange & Act
            const result = CollectionUtils.isEmpty((null as unknown) as any[]);

            // Assert
            expect(result).toBeTrue();
        });

        test("when collections param contains undefined, null, and at least one collection with values, it returns false", (): void => {
            // Arrange
            const collection = [new ResultRecord()];
            const nullCollection = (null as unknown) as any[];
            const undefinedCollection = (undefined as unknown) as any[];

            // Act
            const result = CollectionUtils.isEmpty(
                undefinedCollection,
                nullCollection,
                collection
            );

            // Assert
            expect(result).toBeFalse();
        });
    }); // end isEmpty()

    describe("#isNotEmpty", () => {
        test(`when collections param is an array and has elements, it returns true`, (): void => {
            // Arrange
            const collection = [{}];

            // Act
            const result = CollectionUtils.isNotEmpty(collection);

            // Assert
            expect(result).toBeTrue();
        });

        test("when collections param is an array and has no elements, it returns false", (): void => {
            // Arrange
            const collection: any[] = [];

            // Act
            const result = CollectionUtils.isNotEmpty(collection);

            // Assert
            expect(result).toBeFalse();
        });

        test("when collections param is a list and has elements, it returns true", (): void => {
            // Arrange
            const collection = List([{}]);

            // Act
            const result = CollectionUtils.isNotEmpty(collection);

            // Assert
            expect(result).toBeTrue();
        });

        test("when collections param is a list and has no elements, it returns false", (): void => {
            // Arrange
            const collection = List([]);

            // Act
            const result = CollectionUtils.isNotEmpty(collection);

            // Assert
            expect(result).toBeFalse();
        });

        test("when collections param has at least one non-empty collection, it returns true", (): void => {
            // Arrange
            const collection1 = [new ResultRecord()];
            const collection2 = List();

            // Act
            const result = CollectionUtils.isNotEmpty(collection1, collection2);

            // Assert
            expect(result).toBeTrue();
        });

        test("when collections param has multiple empty collections, it returns false", (): void => {
            // Arrange
            const collection1: any[] = [];
            const collection2 = List();

            // Act
            const result = CollectionUtils.isNotEmpty(collection1, collection2);

            // Assert
            expect(result).toBeFalse();
        });

        test("when collections param is undefined, it returns false", (): void => {
            // Arrange & Act
            const result = CollectionUtils.isNotEmpty(
                (undefined as unknown) as any[]
            );

            // Assert
            expect(result).toBeFalse();
        });

        test("when collections param is null, it returns false", (): void => {
            // Arrange & Act
            const result = CollectionUtils.isNotEmpty(
                (null as unknown) as any[]
            );

            // Assert
            expect(result).toBeFalse();
        });

        test("when collections param contains undefined, null, and at least one collection with values, it returns true", (): void => {
            // Arrange
            const collection = [new ResultRecord()];
            const nullCollection = (null as unknown) as any[];
            const undefinedCollection = (undefined as unknown) as any[];

            // Act
            const result = CollectionUtils.isNotEmpty(
                undefinedCollection,
                nullCollection,
                collection
            );

            // Assert
            expect(result).toBeTrue();
        });
    }); // end isNotEmpty

    describe("#equalsBy", () => {
        type TestType = { id: number };
        const selector = (t: TestType) => t.id;

        it("When collections are different lengths, then returns false", () => {
            // Arrange
            const arr1: Array<TestType> = [{ id: 1 }, { id: 2 }];
            const arr2: Array<TestType> = [{ id: 1 }];

            // Act
            const result = CollectionUtils.equalsBy(selector, arr1, arr2);

            // Assert
            expect(result).toBe(false);
        });

        it("When one of the collections is null, then returns false", () => {
            // Arrange
            const arr1: Array<TestType> = [{ id: 1 }, { id: 2 }];

            // Act
            const result = CollectionUtils.equalsBy(selector, arr1, undefined);

            // Assert
            expect(result).toBe(false);
        });

        it("When both collections are null, then returns true", () => {
            // Act
            const result = CollectionUtils.equalsBy(
                selector,
                undefined,
                undefined
            );

            // Assert
            expect(result).toBe(true);
        });

        it("When collections are equal size but contain different elements, then returns false", () => {
            // Arrange
            const arr1: Array<TestType> = [{ id: 1 }, { id: 2 }];
            const arr2: Array<TestType> = [{ id: 2 }, { id: 3 }];

            // Act
            const result = CollectionUtils.equalsBy(selector, arr1, arr2);

            // Assert
            expect(result).toBe(false);
        });

        it("When collections are identical, then returns true", () => {
            // Arrange
            const arr1: Array<TestType> = [{ id: 1 }, { id: 2 }];
            const arr2: Array<TestType> = [...arr1];

            // Act
            const result = CollectionUtils.equalsBy(selector, arr1, arr2);

            // Assert
            expect(result).toBe(true);
        });
    });

    describe("#replaceElementAt", () => {
        it("Replaces element at specified index and returns a new array", () => {
            // Arrange
            const arr = ["zero", "one", "two", "three", "four"];
            const expected = ["zero", "replaced", "two", "three", "four"];

            // Act
            const result = CollectionUtils.replaceElementAt(arr, 1, "replaced");

            // Assert
            const equals = CollectionUtils.equalsBy(
                (s: string) => s,
                result,
                expected
            );
            expect(equals).toBe(true);
        });
    });
});
