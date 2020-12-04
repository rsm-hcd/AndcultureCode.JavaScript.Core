import { List } from "immutable";
import _ from "lodash";

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
const _equalsBy = function<T, V>(
    selector: (element: T) => V,
    array1: Array<T> | List<any> | undefined,
    array2: Array<T> | List<any> | undefined
) {
    if (array1 == null) {
        return array2 == null;
    }

    if (array2 == null) {
        return false;
    }

    if (_length(array1) !== _length(array2)) {
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
 * hasValue only take a SINGLE collection as parameter to make use of Typescript Type guard ability
 *
 * Checks for values in a collection/object. Returns false if the collection is undefined, null,
 * or the respective object type's "empty" state, ie length 0, size 0, or has no keys.
 *
 *
 * @param {(any[] | List<any> | undefined)} collection
 * @returns {boolean} False if `collection` is null/undefined
 * True if any element has sub-elements.
 */
const _hasValues = (collection: any[] | List<any> | undefined
): collection is any[] | List<any> | undefined => {
    return !_isEmpty(collection);
};

/**
 * isEmpty only take a SINGLE collection as parameter to make use of Typescript Type guard ability
 *
 * Checks for values in a collection/object. Returns true if the collection is undefined, null,
 * or the respective object type's "empty" state, ie length 0, size 0, or has no keys.
 *
 * @returns {boolean} True if `collection` is null/undefined
 * False if collection has elements.
 * @param collection
 */
const _isEmpty = (collection: any[] | List<any> | undefined
): collection is any[] | List<any> | undefined => {
    if (collection == null) {
        return true;
    }

    let isEmpty = true;

    if (collection instanceof List) {
        const collectionList = collection as List<any>;
        if (collectionList.size !== 0) {
            isEmpty = false;
        }
    } else {
        const collectionArray = collection as any[];
        if (collectionArray.length !== 0) {
            isEmpty = false;
        }
    }

    return isEmpty;
};

/**
 * isNotEmpty only take a SINGLE collection as parameter to make use of Typescript Type guard ability
 *
 * Checks if there aren't any values in a collection/object. Returns false if the collection is undefined, null,
 * or the respective object type's "empty" state, ie length 0, size 0, or has no keys.
 *
 * @returns {boolean} False if `collection` is null/undefined
 * True if any element has sub-elements.
 * @param collection
 */
const _isNotEmpty = (collection: any[] | List<any> | undefined
): collection is any[] | List<any> | undefined => {
    return !_isEmpty(collection);
};

/**
 * Utility function to get the length of a collection
 * when the collection might be either a List or an Array
 * @param arr the collection
 * @returns number the length of the collection
 */
const _length = (arr: Array<any> | List<any>): number => {
    if (arr == null) {
        return -1;
    }

    if (arr instanceof List) {
        return (arr as List<any>).size;
    }

    return (arr as Array<any>).length;
};

/**
 * Removes a supplied element by index
 * @param source original array
 * @param index array index to remove
 */
const _removeElementAt = <T>(source: Array<T>, index: number): Array<T> => {
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
const _replaceElementAt = <T>(
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

// #endregion Private Methods

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export const CollectionUtils = {
    difference: _.difference,
    equalsBy: _equalsBy,
    first: _.head,
    flattenDeep: _.flattenDeep,
    hasValues: _hasValues,
    isEmpty: _isEmpty,
    isNotEmpty: _isNotEmpty,
    length: _length,
    removeElementAt: _removeElementAt,
    replaceElementAt: _replaceElementAt,
    sample: _.sample,
    sampleSize: _.sampleSize,
    take: _.take,
};

// #endregion Exports
