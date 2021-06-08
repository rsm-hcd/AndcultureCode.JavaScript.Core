import { List } from "immutable";
import { CollectionUtils } from "./collection-utils";

describe("CollectionUtils", () => {
    // -----------------------------------------------------------------------------------------
    // #region hasValues
    // -----------------------------------------------------------------------------------------

    describe("hasValues", () => {
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

        test("when collections param is an array with element, it returns true", (): void => {
            // Arrange & Act
            const result = CollectionUtils.hasValues([1, 2, 3]);

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

        test("given collections is undefined, it returns false", (): void => {
            // Arrange
            const collection: any[] | undefined = undefined;

            // Act
            const result = CollectionUtils.hasValues(collection);

            // Assert
            expect(result).toBeFalse();
        });

        test("given collections is null, it returns false", (): void => {
            // Arrange
            const collection: any[] | null = null;

            // Act
            const result = CollectionUtils.hasValues(collection);

            // Assert
            expect(result).toBeFalse();
        });
    });

    // #endregion hasValues

    // -----------------------------------------------------------------------------------------
    // #region isEmpty
    // -----------------------------------------------------------------------------------------

    describe("isEmpty", () => {
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

        test("when collections param is an array with element, it returns false", (): void => {
            // Arrange & Act
            const result = CollectionUtils.isEmpty([1, 2, 3]);

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

        test("given collections is undefined, it returns true", (): void => {
            // Arrange
            const collection: any[] | undefined = undefined;

            // Act
            const result = CollectionUtils.isEmpty(collection);

            // Assert
            expect(result).toBeTrue();
        });

        test("given collections is null, it returns true", (): void => {
            // Arrange
            const collection: any[] | null = null;

            // Act
            const result = CollectionUtils.isEmpty(collection);

            // Assert
            expect(result).toBeTrue();
        });
    });

    // #endregion isEmpty

    // -----------------------------------------------------------------------------------------
    // #region isNotEmpty
    // -----------------------------------------------------------------------------------------

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

        test("when collections param is undefined, it returns false", (): void => {
            // Arrange
            const collection: any[] | undefined = undefined;

            // Act
            const result = CollectionUtils.isNotEmpty(collection);

            // Assert
            expect(result).toBeFalse();
        });

        test("when collections param is null, it returns false", (): void => {
            // Arrange
            const collection: any[] | null = null;

            // Act
            const result = CollectionUtils.isNotEmpty(collection);

            // Assert
            expect(result).toBeFalse();
        });

        test("when collections param is an array with element, it returns true", (): void => {
            // Arrange & Act
            const result = CollectionUtils.isNotEmpty([1, 2, 3]);

            // Assert
            expect(result).toBeTrue();
        });
    });

    // #endregion isNotEmpty

    // -----------------------------------------------------------------------------------------
    // #region length
    // -----------------------------------------------------------------------------------------

    describe("#length", () => {
        test(`when collections param is an array and has elements, it returns the length`, (): void => {
            // Arrange
            const array = ["test", "test"];

            // Act
            const result = CollectionUtils.length(array);

            // Assert
            expect(result).toBe(array.length);
        });

        test(`when collections param is null, it returns -1`, (): void => {
            // Arrange
            const array = null;

            // Act
            const result = CollectionUtils.length(array);

            // Assert
            expect(result).toBe(-1);
        });

        test(`when collections param is a list and has elements, it returns the length`, (): void => {
            // Arrange
            const list = List(["test", "test"]);

            // Act
            const result = CollectionUtils.length(list);

            // Assert
            expect(result).toBe(list.size);
        });
    });

    // #endregion length

    // -----------------------------------------------------------------------------------------
    // #region equalsBy
    // -----------------------------------------------------------------------------------------

    describe("#equalsBy", () => {
        type TestType = { id: number };
        const selector = (t: TestType) => t.id;

        it("when collections are different lengths, then returns false", () => {
            // Arrange
            const arr1: Array<TestType> = [{ id: 1 }, { id: 2 }];
            const arr2: Array<TestType> = [{ id: 1 }];

            // Act
            const result = CollectionUtils.equalsBy(selector, arr1, arr2);

            // Assert
            expect(result).toBeFalse();
        });

        it("when one of the collections is null, then returns false", () => {
            // Arrange
            const arr1: Array<TestType> = [{ id: 1 }, { id: 2 }];

            // Act
            const result = CollectionUtils.equalsBy(selector, arr1, undefined);

            // Assert
            expect(result).toBeFalse();
        });

        it("when both collections are null, then returns true", () => {
            // Act
            const result = CollectionUtils.equalsBy(
                selector,
                undefined,
                undefined
            );

            // Assert
            expect(result).toBeTrue();
        });

        it("when collections are equal size but contain different elements, then returns false", () => {
            // Arrange
            const arr1: Array<TestType> = [{ id: 1 }, { id: 2 }];
            const arr2: Array<TestType> = [{ id: 2 }, { id: 3 }];

            // Act
            const result = CollectionUtils.equalsBy(selector, arr1, arr2);

            // Assert
            expect(result).toBeFalse();
        });

        it("when collections are identical, then returns true", () => {
            // Arrange
            const arr1: Array<TestType> = [{ id: 1 }, { id: 2 }];
            const arr2: Array<TestType> = [...arr1];

            // Act
            const result = CollectionUtils.equalsBy(selector, arr1, arr2);

            // Assert
            expect(result).toBeTrue();
        });
    });

    // #endregion equalsBy

    // -----------------------------------------------------------------------------------------
    // #region removeElementAt
    // -----------------------------------------------------------------------------------------

    describe("#removeElementAt", () => {
        it("when index i < 0, returns source array", () => {
            // Arrange
            const arr = ["one", "two", "three"];
            const expected = [...arr];

            // Act
            const result = CollectionUtils.removeElementAt(arr, -1);

            // Assert
            expect(result).toStrictEqual(expected);
        });

        it("when index > array.length, returns source array", () => {
            // Arrange
            const arr = ["one", "two", "three"];
            const expected = [...arr];

            // Act
            const result = CollectionUtils.removeElementAt(arr, 50);

            // Assert
            expect(result).toStrictEqual(expected);
        });

        it("when index is in range, then removes element at index", () => {
            // Arrange
            const arr = ["one", "two", "three"];
            const expected = ["one", "three"];
            const indexToRemove = 1;

            // Act
            const result = CollectionUtils.removeElementAt(arr, indexToRemove);

            // Assert
            expect(result).toStrictEqual(expected);
        });
    });

    // #endregion removeElementAt

    // -----------------------------------------------------------------------------------------
    // #region replaceElementAt
    // -----------------------------------------------------------------------------------------

    describe("#replaceElementAt", () => {
        it("Replaces element at specified index and returns a new array", () => {
            // Arrange
            const arr = ["zero", "one", "two", "three", "four"];
            const expected = ["zero", "replaced", "two", "three", "four"];

            // Act
            const result = CollectionUtils.replaceElementAt(arr, 1, "replaced");

            // Assert
            expect(result).not.toBe(arr);
            expect(result).toStrictEqual(expected);
        });

        it("When source array has no values it, then returns the source array", () => {
            // Arrange
            const arr = [];

            // Act
            const result = CollectionUtils.replaceElementAt(arr, 1, "replaced");

            // Assert
            expect(result).toBe(arr);
        });

        it("When source array has 1 item it, then returns new array with 1 item", () => {
            // Arrange
            const arr = ["test"];
            const expected = ["replaced-test"];

            // Act
            const result = CollectionUtils.replaceElementAt(
                arr,
                2,
                "replaced-test"
            );

            // Assert
            expect(result).not.toBe(arr);
            expect(result).toStrictEqual(expected);
        });

        it("When index is last element of source it, then returns new array with value at the end", () => {
            // Arrange
            const arr = ["zero", "one", "two", "three", "four"];
            const expected = ["zero", "one", "two", "three", "replaced"];

            // Act
            const result = CollectionUtils.replaceElementAt(arr, 4, "replaced");

            // Assert
            expect(result).not.toBe(arr);
            expect(result).toStrictEqual(expected);
        });

        it("When index i < 0, then returns the source array", () => {
            // Arrange
            const arr = ["zero", "one", "two", "three", "four"];

            // Act
            const result = CollectionUtils.replaceElementAt(
                arr,
                -1,
                "replaced"
            );

            // Assert
            expect(result).toBe(arr);
        });
    });

    // #endregion replaceElementAt

    // -----------------------------------------------------------------------------------------
    // #region sortByString
    // -----------------------------------------------------------------------------------------

    describe("#sortByString", () => {
        type TestType = { letter: string };
        const selector = (t: TestType) => t.letter;

        it("sorts an array by specified selector", () => {
            // Arrange
            const array = [
                { letter: "E" },
                { letter: "C" },
                { letter: "A" },
                { letter: "B" },
                { letter: "D" },
            ];
            const expected = [
                { letter: "A" },
                { letter: "B" },
                { letter: "C" },
                { letter: "D" },
                { letter: "E" },
            ];

            // Act
            const result = CollectionUtils.sortByString(array, selector);

            // Assert
            expect(result).toEqual(expected);
        });

        it("when caseSensitive is false, then case is ignored then sorting", () => {
            // Arrange
            const array = [
                { letter: "E" },
                { letter: "c" },
                { letter: "A" },
                { letter: "b" },
                { letter: "D" },
            ];
            const expected = [
                { letter: "A" },
                { letter: "b" },
                { letter: "c" },
                { letter: "D" },
                { letter: "E" },
            ];

            // Act
            const result = CollectionUtils.sortByString(array, selector);

            // Assert
            expect(result).toEqual(expected);
        });

        it("when strings are empty, then they are sorted to the end of the list", () => {
            // Arrange
            const array = [
                { letter: "" },
                { letter: "B" },
                { letter: "" },
                { letter: "A" },
                { letter: "C" },
            ];
            const expected = [
                { letter: "A" },
                { letter: "B" },
                { letter: "C" },
                { letter: "" },
                { letter: "" },
            ];

            // Act
            const result = CollectionUtils.sortByString(array, selector);

            // Assert
            expect(result).toEqual(expected);
        });

        it("when strings are exactly equal, then returns array in same order", () => {
            // Arrange
            const array = [
                { id: 1, letter: "A" },
                { id: 2, letter: "A" },
            ];
            const expected = [...array];

            // Act
            const result = CollectionUtils.sortByString(array, selector);

            // Assert
            expect(result).toEqual(expected);
        });

        it("when caseSensitive is true, then sorts alphabetically with capitals before lower case letters", () => {
            // Arrange
            const array = [
                { letter: "A" },
                { letter: "a" },
                { letter: "B" },
                { letter: "b" },
            ];
            const expected = [
                { letter: "A" },
                { letter: "B" },
                { letter: "a" },
                { letter: "b" },
            ];

            // Act
            const result = CollectionUtils.sortByString(array, selector, true);

            // Assert
            expect(result).toEqual(expected);
        });
    });

    // #endregion sortByString
});
