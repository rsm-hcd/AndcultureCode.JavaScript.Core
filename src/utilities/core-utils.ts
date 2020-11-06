import { CollectionUtils } from "./collection-utils";
import _ from "lodash";
import {
    Cancelable,
    CurriedFunction1,
    MemoizedFunction,
    ThrottleSettings
} from "lodash";

// -----------------------------------------------------------------------------------------
// #region Private Methods
// -----------------------------------------------------------------------------------------

/**
 * Binds methods of an object to the object itself, overwriting the existing method. Method names may be
 * specified as individual arguments or as arrays of method names. If no method names are provided all
 * enumerable function properties, own and inherited, of object are bound.
 *
 * Note: This method does not set the "length" property of bound functions.
 *
 * @param object The object to bind and assign the bound methods to.
 * @param methodNames The object method names to bind, specified as individual method names or arrays of
 * method names.
 * @return Returns object.
 */
const bindAll = <T>(
  object: T,
  ...methodNames: Array<string | string[]>
): T => _.bindAll(object, ...methodNames);

/**
 * Creates a function that accepts one or more arguments of func that when called either invokes func returning
 * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
 * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
 * @param func The function to curry.
 * @param arity The arity of func.
 * @return Returns the new curried function.
 */
const curry = <T1, R>(
    func: (t1: T1) => R,
    arity?: number
): CurriedFunction1<T1, R> => _.curry(func, arity);

/**
 * Transforms an enum into an array of its values
 *
 * @example
 * const roleTypes = TestUtils.enumToArray<RoleType>(RoleType);
 * // Returns [0, 1, 2, 3, 4, 5]
 * @template TEnum The enum to be transformed
 * @param {*} enumObject The enum to be transformed (cannot be typed to TEnum, or TS will return 'typeof TEnum'
 * instead of a value of TEnum)
 * @returns {TEnum[]}
 */
const enumToArray = <TEnum = any>(enumObject: any): TEnum[] =>
    objectToArray(numericEnumToPojo(enumObject)) as TEnum[];


/**
 * Returns a random enum value from its type
 *
 * @example
 * const randomRoleType = TestUtils.getRandomEnum<RoleType>(RoleType);
 * // Might return the value '1', which is the value of RoleType.Team
 * @template TEnum The enum to be transformed
 * @param {*} enumObject The enum to be transformed (cannot be typed to TEnum, or TS will return 'typeof TEnum'
 * instead of a value of TEnum)
 * @param {TEnum} [excludeElement] A specific enum value to be excluded from the random selection.
 * @returns {TEnum}
 */
const getRandomEnum = <TEnum = any>(
    enumObject: any,
    excludeElement?: TEnum
): TEnum => {
    let enumValues = enumToArray(enumObject);

    if (excludeElement != null) {
        enumValues = enumValues.filter((e: any) => e !== excludeElement);
    }

    return enumValues[Math.floor(Math.random() * enumValues.length)];
};

const memoize = <T extends (...args: any[]) => any>(
  func: T,
  resolver?: (...args: any[]) => any
): T & MemoizedFunction => _.memoize(func, resolver);


/**
 * Recursively merges own and inherited enumerable properties of source
 * objects into the destination object, skipping source properties that resolve
 * to `undefined`. Array and plain object properties are merged recursively.
 * Other objects and value types are overridden by assignment. Source objects
 * are applied from left to right. Subsequent sources overwrite property
 * assignments of previous sources.
 */
const merge = <TObject, TSource>(
  object: TObject,
  source: TSource
): TObject & TSource => _.merge(object, source);


const numericEnumToPojo = (enumObject: any): {} => {
  let pojo: { [k: string]: any } = {};

  for (const key in enumObject) {
    if (isNaN(parseInt(key))) {
      pojo[key] = enumObject[key];
    }
  }

  return pojo;
};

const objectToArray = (object: any): any[] => {
    const result: any[] = [];

    if (CollectionUtils.isEmpty(object)) {
        return result;
    }

    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            result.push(object[key]);
        }
    }

    return result;
};

/**
 * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
 * If end is not specified it’s set to start with start then set to 0. If end is less than start a zero-length
 * range is created unless a negative step is specified.
 *
 * @param start The start of the range.
 * @param end The end of the range.
 * @param step The value to increment or decrement by.
 * @return Returns a new range array.
 */
const range = (
    start: number,
    end?: number,
    step?: number
): number[] => _.range(start, end, step);

/**
 * Wrap timeout in a promise so tests can easily block execution for testing time
 * @param milliseconds
 * @param debug
 */
const sleep = (milliseconds: number, debug: boolean = false) => {
    if (debug) {
        console.log("sleep start");
    }

    return new Promise((resolve) =>
        setTimeout(() => {
            if (debug) {
                console.log("sleep end");
            }

            resolve();
        }, milliseconds)
    );
};

/**
 * Block execution for specified number of milliseconds, synchronously.
 * @param milliseconds the delay
 */
const sleepSync = (milliseconds: number) => {
    let now = Date.now();
    const start = now;
    while (now - start < milliseconds) {
        now = Date.now();
    }
};


/**
 * Creates a throttled function that only invokes func at most once per every wait milliseconds. The throttled
 * function comes with a cancel method to cancel delayed invocations and a flush method to immediately invoke
 * them. Provide an options object to indicate that func should be invoked on the leading and/or trailing edge
 * of the wait timeout. Subsequent calls to the throttled function return the result of the last func call.
 *
 * Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only if
 * the the throttled function is invoked more than once during the wait timeout.
 *
 * @param func The function to throttle.
 * @param wait The number of milliseconds to throttle invocations to.
 * @param options The options object.
 * @param options.leading Specify invoking on the leading edge of the timeout.
 * @param options.trailing Specify invoking on the trailing edge of the timeout.
 * @return Returns the new throttled function.
 */
const throttle = <T extends (...args: any[]) => any>(
  func: T,
  wait?: number,
  options?: ThrottleSettings
): T & Cancelable => _.throttle(func, wait, options);

/**
 * Creates a timer instance that when stopped will supply elapsed time in milliseconds.
 * Useful for benchmarking or providing counters
 * @param name Useful name to identify the timer
 */
const timer = (name: string) => {
    const start = new Date();
    return {
        /**
         * Stops the timer and returns elapsed time in milliseconds
         * @param log Optional flag if you'd like the timer to log to the console
         */
        stop(log?: boolean): number {
            var end = new Date();
            var time = end.getTime() - start.getTime();

            if (log === true) {
                console.log("Timer:", name, "finished in", time, "ms");
            }

            return time;
        },
    };
};


/**
 * Invokes the iteratee function n times, returning an array of the results of each invocation. The iteratee
 * is invoked with one argument; (index).
 *
 * @param n The number of times to invoke iteratee.
 * @param iteratee The function invoked per iteration.
 * @return Returns the array of results.
 */
const times = <TResult>(
  n: number,
  iteratee: (num: number) => TResult
): TResult[] => _.times(n, iteratee);

// #endregion Private Methods

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export const CoreUtils = {
    bindAll,
    curry,
    enumToArray,
    getRandomEnum,
    memoize,
    merge,
    numericEnumToPojo,
    objectToArray,
    range,
    sleep,
    sleepSync,
    throttle,
    timer,
    times,
};

// #endregion Exports
