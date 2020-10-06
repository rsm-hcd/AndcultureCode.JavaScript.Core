import Immutable from "immutable";
import _ from "lodash";
export declare const CollectionUtils: {
    difference: <T>(array: _.List<T> | null | undefined, ...values: _.List<T>[]) => T[];
    equalsBy: <T_1, V>(selector: (element: T_1) => V, array1: T_1[] | Immutable.List<any> | undefined, array2: T_1[] | Immutable.List<any> | undefined) => boolean;
    first: <T_2>(array: _.List<T_2> | null | undefined) => T_2 | undefined;
    flattenDeep: <T_3>(array: _.ListOfRecursiveArraysOrValues<T_3> | null | undefined) => T_3[];
    hasValues: (...collections: (any[] | Immutable.List<any> | undefined)[]) => boolean;
    isEmpty: (...collections: (any[] | Immutable.List<any> | undefined)[]) => boolean;
    isNotEmpty: (...collections: (any[] | Immutable.List<any> | undefined)[]) => boolean;
    length: (arr: any[] | Immutable.List<any>) => number;
    removeElementAt: <T_4>(source: T_4[], index: number) => T_4[];
    replaceElementAt: <T_5>(source: T_5[], index: number, value: T_5) => T_5[];
    sample: {
        <T_6>(collection: _.List<T_6> | _.Dictionary<T_6> | _.NumericDictionary<T_6> | null | undefined): T_6 | undefined;
        <T_7 extends object>(collection: T_7 | null | undefined): T_7[keyof T_7] | undefined;
    };
    sampleSize: {
        <T_8>(collection: _.List<T_8> | _.Dictionary<T_8> | _.NumericDictionary<T_8> | null | undefined, n?: number | undefined): T_8[];
        <T_9 extends object>(collection: T_9 | null | undefined, n?: number | undefined): T_9[keyof T_9][];
    };
    take: <T_10>(array: _.List<T_10> | null | undefined, n?: number | undefined) => T_10[];
};
