import { CollectionUtils } from "./collection-utils";
import _ from "lodash";

// -----------------------------------------------------------------------------------------
// #region Private Methods
// -----------------------------------------------------------------------------------------

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
const _enumToArray = <TEnum = any>(enumObject: any): TEnum[] =>
    _objectToArray(_numericEnumToPojo(enumObject)) as TEnum[];

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
const _getRandomEnum = <TEnum = any>(
    enumObject: any,
    excludeElement?: TEnum
): TEnum => {
    let enumValues = _enumToArray(enumObject);

    if (excludeElement != null) {
        enumValues = enumValues.filter((e: any) => e !== excludeElement);
    }

    return enumValues[Math.floor(Math.random() * enumValues.length)];
};

const _numericEnumToPojo = (enumObject: any): {} => {
    let pojo: { [k: string]: any } = {};

    for (const key in enumObject) {
        if (isNaN(parseInt(key))) {
            pojo[key] = enumObject[key];
        }
    }

    return pojo;
};

const _objectToArray = (object: any): any[] => {
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
 * Wrap timeout in a promise so tests can easily block execution for testing time
 * @param milliseconds
 */
const _sleep = (milliseconds: number, debug: boolean = false) => {
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
 * Creates a timer instance that when stopped will supply elapsed time in milliseconds.
 * Useful for benchmarking or providing counters
 * @param name Useful name to identify the timer
 */
const _timer = (name: string) => {
    var start = new Date();
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

// #endregion Private Methods

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export const CoreUtils = {
    bindAll: _.bindAll,
    curry: _.curry,
    enumToArray: _enumToArray,
    getRandomEnum: _getRandomEnum,
    memoize: _.memoize,
    numericEnumToPojo: _numericEnumToPojo,
    objectToArray: _objectToArray,
    range: _.range,
    sleep: _sleep,
    throttle: _.throttle,
    timer: _timer,
    times: _.times,
};

// #endregion Exports
