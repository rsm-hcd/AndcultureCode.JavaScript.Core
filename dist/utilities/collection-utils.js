"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = __importDefault(require("immutable"));
var lodash_1 = __importDefault(require("lodash"));
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
var _equalsBy = function (selector, array1, array2) {
    if (array1 == null) {
        return array2 == null;
    }
    if (array2 == null) {
        return false;
    }
    if (_length(array1) !== _length(array2)) {
        return false;
    }
    var hasDifferingValues = array1.some(function (s) { return !array2.some(function (ss) { return selector(s) === selector(ss); }); }) ||
        array2.some(function (s) { return !array1.some(function (ss) { return selector(s) === selector(ss); }); });
    return !hasDifferingValues;
};
/**
 * Checks for values in a collection/object. Returns false if the collection is undefined, null,
 * or the respective object type's "empty" state, ie length 0, size 0, or has no keys.
 *
 * Uses ... syntax to allow a single collection or multiple collections to be passed in, ie
 * CollectionUtils.hasValues([]) or CollectionUtils.hasValues([], [], [])
 *
 * @param {(...Array<(any[] | Immutable.List<any>)} collections
 * @returns {boolean} False if `collections` is null/undefined, or every element is also null/undefined,
 * or has no sub-elements. True if any element has sub-elements.
 */
var _hasValues = function () {
    var collections = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        collections[_i] = arguments[_i];
    }
    var hasValues = false;
    collections.forEach(function (collection) {
        if (!_isEmpty(collection)) {
            hasValues = true;
        }
    });
    return hasValues;
};
/**
 * Checks for values in a collection/object. Returns true if the collection is undefined, null,
 * or the respective object type's "empty" state, ie length 0, size 0, or has no keys.
 *
 * Uses ... syntax to allow a single collection or multiple collections to be passed in, ie
 * CollectionUtils.isEmpty([]) or CollectionUtils.isEmpty([], [], [])
 *
 * @param {(...Array<(any[] | Immutable.List<any>)} collections
 * @returns {boolean} True if `collections` is null/undefined, or every element is also null/undefined,
 * or has no sub-elements. False if any element has sub-elements.
 */
var _isEmpty = function () {
    var collections = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        collections[_i] = arguments[_i];
    }
    var isEmpty = true;
    collections.forEach(function (collection) {
        if (collection == null) {
            return;
        }
        if (collection instanceof immutable_1.default.List) {
            var collectionList = collection;
            if (collectionList.size !== 0) {
                isEmpty = false;
            }
        }
        else {
            var collectionArray = collection;
            if (collectionArray.length !== 0) {
                isEmpty = false;
            }
        }
    });
    return isEmpty;
};
/**
 * Checks if there aren't any values in a collection/object. Returns false if the collection is undefined, null,
 * or the respective object type's "empty" state, ie length 0, size 0, or has no keys.
 *
 * Uses ... syntax to allow a single collection or multiple collections to be passed in, ie
 * CollectionUtils.isNotEmpty([]) or CollectionUtils.isNotEmpty([], [], [])
 *
 * @param {(...Array<(any[] | Immutable.List<any>)} collections
 * @returns {boolean} False if `collections` is null/undefined, or every element is also null/undefined,
 * or has no sub-elements. True if any element has sub-elements.
 */
var _isNotEmpty = function () {
    var collections = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        collections[_i] = arguments[_i];
    }
    return !_isEmpty.apply(void 0, collections);
};
/**
 * Utility function to get the length of a collection
 * when the collection might be either a Immutable.List or an Array
 * @param arr the collection
 * @returns number the length of the collection
 */
var _length = function (arr) {
    if (arr == null) {
        return -1;
    }
    if (arr instanceof immutable_1.default.List) {
        return arr.size;
    }
    return arr.length;
};
/**
 * Removes a supplied element by index
 * @param source original array
 * @param index array index to remove
 */
var _removeElementAt = function (source, index) {
    if (index < 0 || index > source.length) {
        return source;
    }
    var newArr = __spreadArrays(source);
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
var _replaceElementAt = function (source, index, value) {
    if (source.length === 0 || index < 0) {
        return source;
    }
    if (source.length === 1) {
        return [value];
    }
    if (index === source.length - 1) {
        return __spreadArrays(source.slice(0, index), [value]);
    }
    return __spreadArrays(source.slice(0, index), [value], source.slice(index + 1));
};
// #endregion Private Methods
// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------
exports.CollectionUtils = {
    difference: lodash_1.default.difference,
    equalsBy: _equalsBy,
    first: lodash_1.default.head,
    flattenDeep: lodash_1.default.flattenDeep,
    hasValues: _hasValues,
    isEmpty: _isEmpty,
    isNotEmpty: _isNotEmpty,
    length: _length,
    removeElementAt: _removeElementAt,
    replaceElementAt: _replaceElementAt,
    sample: lodash_1.default.sample,
    sampleSize: lodash_1.default.sampleSize,
    take: lodash_1.default.take,
};
// #endregion Exports
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29sbGVjdGlvbi11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx3REFBa0M7QUFDbEMsa0RBQXVCO0FBRXZCLDRGQUE0RjtBQUM1RiwwQkFBMEI7QUFDMUIsNEZBQTRGO0FBRTVGOzs7Ozs7Ozs7O0dBVUc7QUFDSCxJQUFNLFNBQVMsR0FBRyxVQUNkLFFBQTJCLEVBQzNCLE1BQWtELEVBQ2xELE1BQWtEO0lBRWxELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtRQUNoQixPQUFPLE1BQU0sSUFBSSxJQUFJLENBQUM7S0FDekI7SUFFRCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7UUFDaEIsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFFRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDckMsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFFRCxJQUFNLGtCQUFrQixHQUNwQixNQUFNLENBQUMsSUFBSSxDQUNQLFVBQUMsQ0FBSSxJQUFLLE9BQUEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBSyxJQUFLLE9BQUEsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxFQUFyRCxDQUFxRCxDQUNsRTtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQ1AsVUFBQyxDQUFJLElBQUssT0FBQSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQyxFQUFLLElBQUssT0FBQSxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUE1QixDQUE0QixDQUFDLEVBQXJELENBQXFELENBQ2xFLENBQUM7SUFFTixPQUFPLENBQUMsa0JBQWtCLENBQUM7QUFDL0IsQ0FBQyxD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VyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRSxLQUFLLEdBQUU7S0FDN0M7SUFFRCxzQkFBVyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRSxLQUFLLEdBQUssTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDMUUsQ0FBQyxDQUFDO0FBRUYsNkJBQTZCO0FBRTdCLDRGQUE0RjtBQUM1RixrQkFBa0I7QUFDbEIsNEZBQTRGO0FBRS9FLFFBQUEsZUFBZSxHQUFHO0lBQzNCLFVBQVUsRUFBRSxnQkFBQyxDQUFDLFVBQVU7SUFDeEIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsS0FBSyxFQUFFLGdCQUFDLENBQUMsSUFBSTtJQUNiLFdBQVcsRUFBRSxnQkFBQyxDQUFDLFdBQVc7SUFDMUIsU0FBUyxFQUFFLFVBQVU7SUFDckIsT0FBTyxFQUFFLFFBQVE7SUFDakIsVUFBVSxFQUFFLFdBQVc7SUFDdkIsTUFBTSxFQUFFLE9BQU87SUFDZixlQUFlLEVBQUUsZ0JBQWdCO0lBQ2pDLGdCQUFnQixFQUFFLGlCQUFpQjtJQUNuQyxNQUFNLEVBQUUsZ0JBQUMsQ0FBQyxNQUFNO0lBQ2hCLFVBQVUsRUFBRSxnQkFBQyxDQUFDLFVBQVU7SUFDeEIsSUFBSSxFQUFFLGdCQUFDLENBQUMsSUFBSTtDQUNmLENBQUM7QUFFRixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gI3JlZ2lvbiBQcml2YXRlIE1ldGhvZHNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8qKlxyXG4gKiBDb21wYXJlIHR3byBjb2xsZWN0aW9ucyBieSBhIHByb3BlcnR5IG9mIGVhY2ggdmFsdWUsXHJcbiAqIHNwZWNpZmllZCBieSBzZWxlY3Rvciwgbm90IGNvbnNpZGVyaW5nIHRoZSBvcmRlciBvZlxyXG4gKiBlbGVtZW50cywgYXMgbG9uZyBhcyBhbGwgZWxlbWVudHMgb2Ygb25lIGV4aXN0IGluIHRoZVxyXG4gKiBvdGhlci5cclxuICogQHBhcmFtIHNlbGVjdG9yIGEgZnVuY3Rpb24gdGFraW5nIHRoZSBpdGVtIG9mIHRoZSBhcnJheSBhbmQgcmV0dXJuaW5nIGEgcHJvcGVydHkuXHJcbiAqIEBwYXJhbSBhcnJheTEgZmlyc3QgYXJyYXkgdG8gY29tcGFyZS5cclxuICogQHBhcmFtIGFycmF5MiBzZWNvbmQgYXJyYXkgdG8gY29tcGFyZS5cclxuICogQHJldHVybnMgdHJ1ZSBpZiBib3RoIGFycmF5cyBjb250YWluIGFsbCB0aGUgc2FtZSBlbGVtZW50cyBvZiB0aGUgb3RoZXIsXHJcbiAqICAgICAgICAgIG5vdCBjb25zaWRlcmluZyBvcmRlciwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cclxuY29uc3QgX2VxdWFsc0J5ID0gZnVuY3Rpb248VCwgVj4oXHJcbiAgICBzZWxlY3RvcjogKGVsZW1lbnQ6IFQpID0+IFYsXHJcbiAgICBhcnJheTE6IEFycmF5PFQ+IHwgSW1tdXRhYmxlLkxpc3Q8YW55PiB8IHVuZGVmaW5lZCxcclxuICAgIGFycmF5MjogQXJyYXk8VD4gfCBJbW11dGFibGUuTGlzdDxhbnk+IHwgdW5kZWZpbmVkXHJcbikge1xyXG4gICAgaWYgKGFycmF5MSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5MiA9PSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhcnJheTIgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoX2xlbmd0aChhcnJheTEpICE9PSBfbGVuZ3RoKGFycmF5MikpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFzRGlmZmVyaW5nVmFsdWVzID1cclxuICAgICAgICBhcnJheTEuc29tZShcclxuICAgICAgICAgICAgKHM6IFQpID0+ICFhcnJheTIuc29tZSgoc3M6IFQpID0+IHNlbGVjdG9yKHMpID09PSBzZWxlY3RvcihzcykpXHJcbiAgICAgICAgKSB8fFxyXG4gICAgICAgIGFycmF5Mi5zb21lKFxyXG4gICAgICAgICAgICAoczogVCkgPT4gIWFycmF5MS5zb21lKChzczogVCkgPT4gc2VsZWN0b3IocykgPT09IHNlbGVjdG9yKHNzKSlcclxuICAgICAgICApO1xyXG5cclxuICAgIHJldHVybiAhaGFzRGlmZmVyaW5nVmFsdWVzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBmb3IgdmFsdWVzIGluIGEgY29sbGVjdGlvbi9vYmplY3QuIFJldHVybnMgZmFsc2UgaWYgdGhlIGNvbGxlY3Rpb24gaXMgdW5kZWZpbmVkLCBudWxsLFxyXG4gKiBvciB0aGUgcmVzcGVjdGl2ZSBvYmplY3QgdHlwZSdzIFwiZW1wdHlcIiBzdGF0ZSwgaWUgbGVuZ3RoIDAsIHNpemUgMCwgb3IgaGFzIG5vIGtleXMuXHJcbiAqXHJcbiAqIFVzZXMgLi4uIHN5bnRheCB0byBhbGxvdyBhIHNpbmdsZSBjb2xsZWN0aW9uIG9yIG11bHRpcGxlIGNvbGxlY3Rpb25zIHRvIGJlIHBhc3NlZCBpbiwgaWVcclxuICogQ29sbGVjdGlvblV0aWxzLmhhc1ZhbHVlcyhbXSkgb3IgQ29sbGVjdGlvblV0aWxzLmhhc1ZhbHVlcyhbXSwgW10sIFtdKVxyXG4gKlxyXG4gKiBAcGFyYW0geyguLi5BcnJheTwoYW55W10gfCBJbW11dGFibGUuTGlzdDxhbnk+KX0gY29sbGVjdGlvbnNcclxuICogQHJldHVybnMge2Jvb2xlYW59IEZhbHNlIGlmIGBjb2xsZWN0aW9uc2AgaXMgbnVsbC91bmRlZmluZWQsIG9yIGV2ZXJ5IGVsZW1lbnQgaXMgYWxzbyBudWxsL3VuZGVmaW5lZCxcclxuICogb3IgaGFzIG5vIHN1Yi1lbGVtZW50cy4gVHJ1ZSBpZiBhbnkgZWxlbWVudCBoYXMgc3ViLWVsZW1lbnRzLlxyXG4gKi9cclxuY29uc3QgX2hhc1ZhbHVlcyA9IChcclxuICAgIC4uLmNvbGxlY3Rpb25zOiBBcnJheTxhbnlbXSB8IEltbXV0YWJsZS5MaXN0PGFueT4gfCB1bmRlZmluZWQ+XHJcbik6IGJvb2xlYW4gPT4ge1xyXG4gICAgbGV0IGhhc1ZhbHVlcyA9IGZhbHNlO1xyXG4gICAgY29sbGVjdGlvbnMuZm9yRWFjaChcclxuICAgICAgICAoY29sbGVjdGlvbjogYW55W10gfCBJbW11dGFibGUuTGlzdDxhbnk+IHwgdW5kZWZpbmVkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghX2lzRW1wdHkoY29sbGVjdGlvbikpIHtcclxuICAgICAgICAgICAgICAgIGhhc1ZhbHVlcyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGhhc1ZhbHVlcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgZm9yIHZhbHVlcyBpbiBhIGNvbGxlY3Rpb24vb2JqZWN0LiBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbGxlY3Rpb24gaXMgdW5kZWZpbmVkLCBudWxsLFxyXG4gKiBvciB0aGUgcmVzcGVjdGl2ZSBvYmplY3QgdHlwZSdzIFwiZW1wdHlcIiBzdGF0ZSwgaWUgbGVuZ3RoIDAsIHNpemUgMCwgb3IgaGFzIG5vIGtleXMuXHJcbiAqXHJcbiAqIFVzZXMgLi4uIHN5bnRheCB0byBhbGxvdyBhIHNpbmdsZSBjb2xsZWN0aW9uIG9yIG11bHRpcGxlIGNvbGxlY3Rpb25zIHRvIGJlIHBhc3NlZCBpbiwgaWVcclxuICogQ29sbGVjdGlvblV0aWxzLmlzRW1wdHkoW10pIG9yIENvbGxlY3Rpb25VdGlscy5pc0VtcHR5KFtdLCBbXSwgW10pXHJcbiAqXHJcbiAqIEBwYXJhbSB7KC4uLkFycmF5PChhbnlbXSB8IEltbXV0YWJsZS5MaXN0PGFueT4pfSBjb2xsZWN0aW9uc1xyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBgY29sbGVjdGlvbnNgIGlzIG51bGwvdW5kZWZpbmVkLCBvciBldmVyeSBlbGVtZW50IGlzIGFsc28gbnVsbC91bmRlZmluZWQsXHJcbiAqIG9yIGhhcyBubyBzdWItZWxlbWVudHMuIEZhbHNlIGlmIGFueSBlbGVtZW50IGhhcyBzdWItZWxlbWVudHMuXHJcbiAqL1xyXG5jb25zdCBfaXNFbXB0eSA9IChcclxuICAgIC4uLmNvbGxlY3Rpb25zOiBBcnJheTxhbnlbXSB8IEltbXV0YWJsZS5MaXN0PGFueT4gfCB1bmRlZmluZWQ+XHJcbik6IGJvb2xlYW4gPT4ge1xyXG4gICAgbGV0IGlzRW1wdHkgPSB0cnVlO1xyXG5cclxuICAgIGNvbGxlY3Rpb25zLmZvckVhY2goXHJcbiAgICAgICAgKGNvbGxlY3Rpb246IGFueVtdIHwgSW1tdXRhYmxlLkxpc3Q8YW55PiB8IHVuZGVmaW5lZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29sbGVjdGlvbiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbGxlY3Rpb24gaW5zdGFuY2VvZiBJbW11dGFibGUuTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sbGVjdGlvbkxpc3QgPSBjb2xsZWN0aW9uIGFzIEltbXV0YWJsZS5MaXN0PGFueT47XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sbGVjdGlvbkxpc3Quc2l6ZSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRW1wdHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbGxlY3Rpb25BcnJheSA9IGNvbGxlY3Rpb24gYXMgYW55W107XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sbGVjdGlvbkFycmF5Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRW1wdHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIGlzRW1wdHk7XHJcbn07XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIHRoZXJlIGFyZW4ndCBhbnkgdmFsdWVzIGluIGEgY29sbGVjdGlvbi9vYmplY3QuIFJldHVybnMgZmFsc2UgaWYgdGhlIGNvbGxlY3Rpb24gaXMgdW5kZWZpbmVkLCBudWxsLFxyXG4gKiBvciB0aGUgcmVzcGVjdGl2ZSBvYmplY3QgdHlwZSdzIFwiZW1wdHlcIiBzdGF0ZSwgaWUgbGVuZ3RoIDAsIHNpemUgMCwgb3IgaGFzIG5vIGtleXMuXHJcbiAqXHJcbiAqIFVzZXMgLi4uIHN5bnRheCB0byBhbGxvdyBhIHNpbmdsZSBjb2xsZWN0aW9uIG9yIG11bHRpcGxlIGNvbGxlY3Rpb25zIHRvIGJlIHBhc3NlZCBpbiwgaWVcclxuICogQ29sbGVjdGlvblV0aWxzLmlzTm90RW1wdHkoW10pIG9yIENvbGxlY3Rpb25VdGlscy5pc05vdEVtcHR5KFtdLCBbXSwgW10pXHJcbiAqXHJcbiAqIEBwYXJhbSB7KC4uLkFycmF5PChhbnlbXSB8IEltbXV0YWJsZS5MaXN0PGFueT4pfSBjb2xsZWN0aW9uc1xyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gRmFsc2UgaWYgYGNvbGxlY3Rpb25zYCBpcyBudWxsL3VuZGVmaW5lZCwgb3IgZXZlcnkgZWxlbWVudCBpcyBhbHNvIG51bGwvdW5kZWZpbmVkLFxyXG4gKiBvciBoYXMgbm8gc3ViLWVsZW1lbnRzLiBUcnVlIGlmIGFueSBlbGVtZW50IGhhcyBzdWItZWxlbWVudHMuXHJcbiAqL1xyXG5jb25zdCBfaXNOb3RFbXB0eSA9IChcclxuICAgIC4uLmNvbGxlY3Rpb25zOiBBcnJheTxhbnlbXSB8IEltbXV0YWJsZS5MaXN0PGFueT4gfCB1bmRlZmluZWQ+XHJcbik6IGJvb2xlYW4gPT4ge1xyXG4gICAgcmV0dXJuICFfaXNFbXB0eSguLi5jb2xsZWN0aW9ucyk7XHJcbn07XHJcblxyXG4vKipcclxuICogVXRpbGl0eSBmdW5jdGlvbiB0byBnZXQgdGhlIGxlbmd0aCBvZiBhIGNvbGxlY3Rpb25cclxuICogd2hlbiB0aGUgY29sbGVjdGlvbiBtaWdodCBiZSBlaXRoZXIgYSBJbW11dGFibGUuTGlzdCBvciBhbiBBcnJheVxyXG4gKiBAcGFyYW0gYXJyIHRoZSBjb2xsZWN0aW9uXHJcbiAqIEByZXR1cm5zIG51bWJlciB0aGUgbGVuZ3RoIG9mIHRoZSBjb2xsZWN0aW9uXHJcbiAqL1xyXG5jb25zdCBfbGVuZ3RoID0gKGFycjogQXJyYXk8YW55PiB8IEltbXV0YWJsZS5MaXN0PGFueT4pOiBudW1iZXIgPT4ge1xyXG4gICAgaWYgKGFyciA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhcnIgaW5zdGFuY2VvZiBJbW11dGFibGUuTGlzdCkge1xyXG4gICAgICAgIHJldHVybiAoYXJyIGFzIEltbXV0YWJsZS5MaXN0PGFueT4pLnNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChhcnIgYXMgQXJyYXk8YW55PikubGVuZ3RoO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgYSBzdXBwbGllZCBlbGVtZW50IGJ5IGluZGV4XHJcbiAqIEBwYXJhbSBzb3VyY2Ugb3JpZ2luYWwgYXJyYXlcclxuICogQHBhcmFtIGluZGV4IGFycmF5IGluZGV4IHRvIHJlbW92ZVxyXG4gKi9cclxuY29uc3QgX3JlbW92ZUVsZW1lbnRBdCA9IDxUPihzb3VyY2U6IEFycmF5PFQ+LCBpbmRleDogbnVtYmVyKTogQXJyYXk8VD4gPT4ge1xyXG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHNvdXJjZS5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gc291cmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld0FyciA9IFsuLi5zb3VyY2VdO1xyXG4gICAgbmV3QXJyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICByZXR1cm4gbmV3QXJyO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBORVcgYXJyYXkgd2l0aCB0aGUgZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4XHJcbiAqIHJlcGxhY2VkIHdpdGggdGhlIHNwZWNpZmllZCB2YWx1ZSBpZiB0aGUgaW5kZXggcHJvdmlkZWQgaXNcclxuICogZ3JlYXRlciB0aGFuIHplcm8sIGVsc2UgaXQgcmV0dXJucyB0aGUgc291cmNlIGFycmF5LiBTaW5jZSBpdCByZXR1cm5zIGEgbmV3IGFycmF5LFxyXG4gKiB0aGlzIGNhbiBiZSBzYWZlbHkgdXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgUmVhY3QuU2V0U3RhdGVBY3Rpb25cclxuICogaS5lLiBzZXRNeUFycmF5KENvbGxlY3Rpb25VdGlscy5yZXBsYWNlRWxlbWVudEF0KG15QXJyYXksIGluZGV4LCBuZXdWYWx1ZSkpO1xyXG4gKiBAcGFyYW0gc291cmNlXHJcbiAqIEBwYXJhbSBpbmRleFxyXG4gKiBAcGFyYW0gdmFsdWVcclxuICovXHJcbmNvbnN0IF9yZXBsYWNlRWxlbWVudEF0ID0gPFQ+KFxyXG4gICAgc291cmNlOiBBcnJheTxUPixcclxuICAgIGluZGV4OiBudW1iZXIsXHJcbiAgICB2YWx1ZTogVFxyXG4pOiBBcnJheTxUPiA9PiB7XHJcbiAgICBpZiAoc291cmNlLmxlbmd0aCA9PT0gMCB8fCBpbmRleCA8IDApIHtcclxuICAgICAgICByZXR1cm4gc291cmNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gW3ZhbHVlXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW5kZXggPT09IHNvdXJjZS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi5zb3VyY2Uuc2xpY2UoMCwgaW5kZXgpLCB2YWx1ZV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFsuLi5zb3VyY2Uuc2xpY2UoMCwgaW5kZXgpLCB2YWx1ZSwgLi4uc291cmNlLnNsaWNlKGluZGV4ICsgMSldO1xyXG59O1xyXG5cclxuLy8gI2VuZHJlZ2lvbiBQcml2YXRlIE1ldGhvZHNcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICNyZWdpb24gRXhwb3J0c1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbGxlY3Rpb25VdGlscyA9IHtcclxuICAgIGRpZmZlcmVuY2U6IF8uZGlmZmVyZW5jZSxcclxuICAgIGVxdWFsc0J5OiBfZXF1YWxzQnksXHJcbiAgICBmaXJzdDogXy5oZWFkLFxyXG4gICAgZmxhdHRlbkRlZXA6IF8uZmxhdHRlbkRlZXAsXHJcbiAgICBoYXNWYWx1ZXM6IF9oYXNWYWx1ZXMsXHJcbiAgICBpc0VtcHR5OiBfaXNFbXB0eSxcclxuICAgIGlzTm90RW1wdHk6IF9pc05vdEVtcHR5LFxyXG4gICAgbGVuZ3RoOiBfbGVuZ3RoLFxyXG4gICAgcmVtb3ZlRWxlbWVudEF0OiBfcmVtb3ZlRWxlbWVudEF0LFxyXG4gICAgcmVwbGFjZUVsZW1lbnRBdDogX3JlcGxhY2VFbGVtZW50QXQsXHJcbiAgICBzYW1wbGU6IF8uc2FtcGxlLFxyXG4gICAgc2FtcGxlU2l6ZTogXy5zYW1wbGVTaXplLFxyXG4gICAgdGFrZTogXy50YWtlLFxyXG59O1xyXG5cclxuLy8gI2VuZHJlZ2lvbiBFeHBvcnRzXHJcbiJdfQ==