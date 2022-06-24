import * as Immutable from "immutable";
import _ from "lodash";
import {
    Comparator2,
    Dictionary,
    List,
    ListOfRecursiveArraysOrValues,
    NumericDictionary,
} from "lodash";

// -----------------------------------------------------------------------------------------
// #region Private Methods
// -----------------------------------------------------------------------------------------

/**
 * Compare two collections by a property of each value,
 * specified by selector, not considering the order of
 * elements, as long as all elements of one exist in the
 * other.
 * @param selector a function taking the item of the array and returning a property.
 * @param array1 first array to compare.
 * @param array2 second array to compare.
 * @returns true if both arrays contain all the same elements of the other,
 *          not considering order, false otherwise.
 */
const equalsBy = function <T, V>(
    selector: (element: T) => V,
    array1: Array<T> | Immutable.List<any> | undefined,
    array2: Array<T> | Immutable.List<any> | undefined
) {
    if (array1 == null) {
        return array2 == null;
    }

    if (array2 == null) {
        return false;
    }

    if (length(array1) !== length(array2)) {
        return false;
    }

    const hasDifferingValues =
        array1.some(
            (s: T) => !array2.some((ss: T) => selector(s) === selector(ss))
        ) ||
        array2.some(
            (s: T) => !array1.some((ss: T) => selector(s) === selector(ss))
        );

    return !hasDifferingValues;
};

/**
 * Creates an array of unique array values not included in the other provided arrays using SameValueZero for
 * equality comparisons.
 *
 * @param array The array to inspect.
 * @param values The arrays of values to exclude.
 * @return Returns the new array of filtered values.
 */
const difference = <T>(
    array: List<T> | null | undefined,
    ...values: Array<List<T>>
): T[] => _.difference(array, ...values);

/**
 * Recursively flattens a nested array.
 *
 * @param array The array to recursively flatten.
 * @return Returns the new flattened array.
 */
const flattenDeep = <T>(
    array: ListOfRecursiveArraysOrValues<T> | null | undefined
): T[] => _.flattenDeep(array);

/**
 * Checks for values in a collection. Returns false if the collection is `undefined`, `null`,
 * or the respective object type's "empty" state, ie length or size 0.
 *
 * Note: only takes a single collection as parameter to make use of Typescript Type guard ability
 *
 * @param {(any[] | Immutable.List<any> | null | undefined)} collection
 * @returns {boolean} False if `collection` is `undefined`, `null`, or has 0 elements.
 * True if collection contains any elements.
 */
const hasValues = (
    collection: any[] | Immutable.List<any> | null | undefined
): collection is any[] | Immutable.List<any> => !isEmpty(collection);

/**
 * Checks if there aren't any values in a collection. Returns true if the collection is `undefined`,
 * `null`, or the respective object type's "empty" state, ie length or size 0.
 *
 * Note: only takes a single collection as parameter to make use of Typescript Type guard ability
 *
 * @returns {boolean} True if `collection` is  `undefined`, `null`, or has 0 elements.
 * False if collection contains any elements.
 *
 * @param collection
 */
const isEmpty = (
    collection: any[] | Immutable.List<any> | null | undefined
): collection is undefined => {
    if (collection == null) {
        return true;
    }

    if (collection instanceof Immutable.List) {
        return (collection as Immutable.List<any>).size === 0;
    }

    return (collection as any[]).length === 0;
};

/**
 * Checks for values in a collection. Returns false if the collection is `undefined`, `null`,
 * or the respective object type's "empty" state, ie length or size 0. Alias for `CollectionUtils.hasValues`
 *
 * Note: only takes a single collection as parameter to make use of Typescript Type guard ability
 *
 * @param {(any[] | Immutable.List<any> | null | undefined)} collection
 * @returns {boolean} False if `collection` is `undefined`, `null`, or has 0 elements.
 * True if collection contains any elements.
 */
const isNotEmpty = (
    collection: any[] | Immutable.List<any> | null | undefined
): collection is any[] | Immutable.List<any> => hasValues(collection);

/**
 * Utility function to get the length of a collection
 * when the collection might be either a Immutable.List or an Array
 * @param arr the collection
 * @returns number the length of the collection
 */
const length = (arr: Array<any> | Immutable.List<any>): number => {
    if (arr == null) {
        return -1;
    }

    if (arr instanceof Immutable.List) {
        return (arr as Immutable.List<any>).size;
    }

    return (arr as Array<any>).length;
};

/**
 * Gets the first element of array.
 *
 * @alias _.first
 *
 * @param array The array to query.
 * @return Returns the first element of array.
 */
const first = <T>(array: List<T> | null | undefined): T | undefined =>
    _.head(array);

/**
 * Creates an array of  unique values that are included in all of the provided arrays using SameValueZero for
 * equality comparisons.
 *
 * @param arrays The arrays to inspect.
 * @return Returns the new array of shared values.
 */
const intersection = <T>(...arrays: Array<List<T>>) =>
    _.intersection(...arrays);

/**
 * Creates an array of unique `array` values not included in the other
 * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @category Array
 * @param array
 * @param [values] The arrays to inspect.
 * @param [comparator] The comparator invoked per element.
 * @returns Returns the new array of filtered values.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

 * _.intersectionWith(objects, others, _.isEqual);
 * => [{ 'x': 1, 'y': 2 }]
 */
const intersectionWith = <T1, T2>(
    array: List<T1>,
    values: List<T2>,
    comparator: Comparator2<T1, T2>
): T1[] => _.intersectionWith(array, values, comparator);

/**
 * Removes a supplied element by index
 * @param source original array
 * @param index array index to remove
 */
const removeElementAt = <T>(source: Array<T>, index: number): Array<T> => {
    if (index < 0 || index > source.length) {
        return source;
    }

    const newArr = [...source];
    newArr.splice(index, 1);
    return newArr;
};

/**
 * Returns a NEW array with the element at the specified index
 * replaced with the specified value if the index provided is
 * greater than zero, else it returns the source array. Since it returns a new array,
 * this can be safely used as the value for a React.SetStateAction
 * i.e. setMyArray(CollectionUtils.replaceElementAt(myArray, index, newValue));
 * @param source
 * @param index
 * @param value
 */
const replaceElementAt = <T>(
    source: Array<T>,
    index: number,
    value: T
): Array<T> => {
    if (source.length === 0 || index < 0) {
        return source;
    }
    if (source.length === 1) {
        return [value];
    }

    if (index === source.length - 1) {
        return [...source.slice(0, index), value];
    }

    return [...source.slice(0, index), value, ...source.slice(index + 1)];
};

/**
 * Gets a random element from collection.
 *
 * @param collection The collection to sample.
 * @return Returns the random element.
 */
const sample = <T>(
    collection:
        | List<T>
        | Dictionary<T>
        | NumericDictionary<T>
        | null
        | undefined
): T | undefined => _.sample(collection);

/**
 * Gets n random elements at unique keys from collection up to the size of collection.
 *
 * @param collection The collection to sample.
 * @param n The number of elements to sample.
 * @return Returns the random elements.
 */
const sampleSize = <T>(
    collection:
        | List<T>
        | Dictionary<T>
        | NumericDictionary<T>
        | null
        | undefined,
    n?: number
): T[] => _.sampleSize(collection, n);

/**
 * Sort an array of items alphabetically by one property of the item.
 * @param array the source array of items
 * @param selector function returning property to sort by from item
 * @param caseSensitive whether to consider letter case when sorting
 */
const sortByString = <T extends any>(
    array: Array<T>,
    selector: (element: T) => string,
    caseSensitive: boolean = false
) =>
    array.sort((a: T, b: T) => {
        let aString = selector(a);
        let bString = selector(b);

        if (!caseSensitive) {
            aString = aString?.toLowerCase();
            bString = bString?.toLowerCase();
        }

        if (aString === "" || aString == null) {
            return 1;
        }

        if (bString === "" || bString == null) {
            return -1;
        }

        if (aString === bString) {
            return 0;
        }

        if (aString < bString) {
            return -1;
        }

        return 1;
    });

/**
 * Creates a slice of array with n elements taken from the beginning.
 *
 * @param array The array to query.
 * @param n The number of elements to take.
 * @return Returns the slice of array.
 */
const take = <T>(array: List<T> | null | undefined, n?: number): T[] =>
    _.take(array, n);

// #endregion Private Methods

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export const CollectionUtils = {
    difference,
    equalsBy,
    first,
    flattenDeep,
    hasValues,
    isEmpty,
    isNotEmpty,
    intersection,
    intersectionWith,
    length,
    removeElementAt,
    replaceElementAt,
    sample,
    sampleSize,
    sortByString,
    take,
};

// #endregion Exports
