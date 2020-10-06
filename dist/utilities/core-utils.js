"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var collection_utils_1 = require("./collection-utils");
var lodash_1 = __importDefault(require("lodash"));
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
var _enumToArray = function (enumObject) {
    return _objectToArray(_numericEnumToPojo(enumObject));
};
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
var _getRandomEnum = function (enumObject, excludeElement) {
    var enumValues = _enumToArray(enumObject);
    if (excludeElement != null) {
        enumValues = enumValues.filter(function (e) { return e !== excludeElement; });
    }
    return enumValues[Math.floor(Math.random() * enumValues.length)];
};
var _numericEnumToPojo = function (enumObject) {
    var pojo = {};
    for (var key in enumObject) {
        if (isNaN(parseInt(key))) {
            pojo[key] = enumObject[key];
        }
    }
    return pojo;
};
var _objectToArray = function (object) {
    var result = [];
    if (collection_utils_1.CollectionUtils.isEmpty(object)) {
        return result;
    }
    for (var key in object) {
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
var _sleep = function (milliseconds, debug) {
    if (debug === void 0) { debug = false; }
    if (debug) {
        console.log("sleep start");
    }
    return new Promise(function (resolve) {
        return setTimeout(function () {
            if (debug) {
                console.log("sleep end");
            }
            resolve();
        }, milliseconds);
    });
};
/**
 * Block execution for specified number of milliseconds, synchronously.
 * @param milliseconds the delay
 */
var _sleepSync = function (milliseconds) {
    var now = Date.now();
    var start = now;
    while (now - start < milliseconds) {
        now = Date.now();
    }
};
/**
 * Creates a timer instance that when stopped will supply elapsed time in milliseconds.
 * Useful for benchmarking or providing counters
 * @param name Useful name to identify the timer
 */
var _timer = function (name) {
    var start = new Date();
    return {
        /**
         * Stops the timer and returns elapsed time in milliseconds
         * @param log Optional flag if you'd like the timer to log to the console
         */
        stop: function (log) {
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
exports.CoreUtils = {
    bindAll: lodash_1.default.bindAll,
    curry: lodash_1.default.curry,
    enumToArray: _enumToArray,
    getRandomEnum: _getRandomEnum,
    memoize: lodash_1.default.memoize,
    merge: lodash_1.default.merge,
    numericEnumToPojo: _numericEnumToPojo,
    objectToArray: _objectToArray,
    range: lodash_1.default.range,
    sleep: _sleep,
    sleepSync: _sleepSync,
    throttle: lodash_1.default.throttle,
    timer: _timer,
    times: lodash_1.default.times,
};
// #endregion Exports
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29yZS11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHVEQUFxRDtBQUNyRCxrREFBdUI7QUFFdkIsNEZBQTRGO0FBQzVGLDBCQUEwQjtBQUMxQiw0RkFBNEY7QUFFNUY7Ozs7Ozs7Ozs7R0FVRztBQUNILElBQU0sWUFBWSxHQUFHLFVBQWMsVUFBZTtJQUM5QyxPQUFBLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBWTtBQUF6RCxDQUF5RCxDQUFDO0FBRTlEOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsSUFBTSxjQUFjLEdBQUcsVUFDbkIsVUFBZSxFQUNmLGNBQXNCO0lBRXRCLElBQUksVUFBVSxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUUxQyxJQUFJLGNBQWMsSUFBSSxJQUFJLEVBQUU7UUFDeEIsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLEtBQUssY0FBYyxFQUFwQixDQUFvQixDQUFDLENBQUM7S0FDcEU7SUFFRCxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNyRSxDQUFDLENBQUM7QUFFRixJQUFNLGtCQUFrQixHQUFHLFVBQUMsVUFBZTtJQUN2QyxJQUFJLElBQUksR0FBeUIsRUFBRSxDQUFDO0lBRXBDLEtBQUssSUFBTSxHQUFHLElBQUksVUFBVSxFQUFFO1FBQzFCLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDL0I7S0FDSjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2hC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dCI6WyJpbXBvcnQgeyBDb2xsZWN0aW9uVXRpbHMgfSBmcm9tIFwiLi9jb2xsZWN0aW9uLXV0aWxzXCI7XHJcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICNyZWdpb24gUHJpdmF0ZSBNZXRob2RzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vKipcclxuICogVHJhbnNmb3JtcyBhbiBlbnVtIGludG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlc1xyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBjb25zdCByb2xlVHlwZXMgPSBUZXN0VXRpbHMuZW51bVRvQXJyYXk8Um9sZVR5cGU+KFJvbGVUeXBlKTtcclxuICogLy8gUmV0dXJucyBbMCwgMSwgMiwgMywgNCwgNV1cclxuICogQHRlbXBsYXRlIFRFbnVtIFRoZSBlbnVtIHRvIGJlIHRyYW5zZm9ybWVkXHJcbiAqIEBwYXJhbSB7Kn0gZW51bU9iamVjdCBUaGUgZW51bSB0byBiZSB0cmFuc2Zvcm1lZCAoY2Fubm90IGJlIHR5cGVkIHRvIFRFbnVtLCBvciBUUyB3aWxsIHJldHVybiAndHlwZW9mIFRFbnVtJ1xyXG4gKiBpbnN0ZWFkIG9mIGEgdmFsdWUgb2YgVEVudW0pXHJcbiAqIEByZXR1cm5zIHtURW51bVtdfVxyXG4gKi9cclxuY29uc3QgX2VudW1Ub0FycmF5ID0gPFRFbnVtID0gYW55PihlbnVtT2JqZWN0OiBhbnkpOiBURW51bVtdID0+XHJcbiAgICBfb2JqZWN0VG9BcnJheShfbnVtZXJpY0VudW1Ub1Bvam8oZW51bU9iamVjdCkpIGFzIFRFbnVtW107XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIHJhbmRvbSBlbnVtIHZhbHVlIGZyb20gaXRzIHR5cGVcclxuICpcclxuICogQGV4YW1wbGVcclxuICogY29uc3QgcmFuZG9tUm9sZVR5cGUgPSBUZXN0VXRpbHMuZ2V0UmFuZG9tRW51bTxSb2xlVHlwZT4oUm9sZVR5cGUpO1xyXG4gKiAvLyBNaWdodCByZXR1cm4gdGhlIHZhbHVlICcxJywgd2hpY2ggaXMgdGhlIHZhbHVlIG9mIFJvbGVUeXBlLlRlYW1cclxuICogQHRlbXBsYXRlIFRFbnVtIFRoZSBlbnVtIHRvIGJlIHRyYW5zZm9ybWVkXHJcbiAqIEBwYXJhbSB7Kn0gZW51bU9iamVjdCBUaGUgZW51bSB0byBiZSB0cmFuc2Zvcm1lZCAoY2Fubm90IGJlIHR5cGVkIHRvIFRFbnVtLCBvciBUUyB3aWxsIHJldHVybiAndHlwZW9mIFRFbnVtJ1xyXG4gKiBpbnN0ZWFkIG9mIGEgdmFsdWUgb2YgVEVudW0pXHJcbiAqIEBwYXJhbSB7VEVudW19IFtleGNsdWRlRWxlbWVudF0gQSBzcGVjaWZpYyBlbnVtIHZhbHVlIHRvIGJlIGV4Y2x1ZGVkIGZyb20gdGhlIHJhbmRvbSBzZWxlY3Rpb24uXHJcbiAqIEByZXR1cm5zIHtURW51bX1cclxuICovXHJcbmNvbnN0IF9nZXRSYW5kb21FbnVtID0gPFRFbnVtID0gYW55PihcclxuICAgIGVudW1PYmplY3Q6IGFueSxcclxuICAgIGV4Y2x1ZGVFbGVtZW50PzogVEVudW1cclxuKTogVEVudW0gPT4ge1xyXG4gICAgbGV0IGVudW1WYWx1ZXMgPSBfZW51bVRvQXJyYXkoZW51bU9iamVjdCk7XHJcblxyXG4gICAgaWYgKGV4Y2x1ZGVFbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgICBlbnVtVmFsdWVzID0gZW51bVZhbHVlcy5maWx0ZXIoKGU6IGFueSkgPT4gZSAhPT0gZXhjbHVkZUVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlbnVtVmFsdWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVudW1WYWx1ZXMubGVuZ3RoKV07XHJcbn07XHJcblxyXG5jb25zdCBfbnVtZXJpY0VudW1Ub1Bvam8gPSAoZW51bU9iamVjdDogYW55KToge30gPT4ge1xyXG4gICAgbGV0IHBvam86IHsgW2s6IHN0cmluZ106IGFueSB9ID0ge307XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZW51bU9iamVjdCkge1xyXG4gICAgICAgIGlmIChpc05hTihwYXJzZUludChrZXkpKSkge1xyXG4gICAgICAgICAgICBwb2pvW2tleV0gPSBlbnVtT2JqZWN0W2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwb2pvO1xyXG59O1xyXG5cclxuY29uc3QgX29iamVjdFRvQXJyYXkgPSAob2JqZWN0OiBhbnkpOiBhbnlbXSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XHJcblxyXG4gICAgaWYgKENvbGxlY3Rpb25VdGlscy5pc0VtcHR5KG9iamVjdCkpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xyXG4gICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChvYmplY3Rba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG4vKipcclxuICogV3JhcCB0aW1lb3V0IGluIGEgcHJvbWlzZSBzbyB0ZXN0cyBjYW4gZWFzaWx5IGJsb2NrIGV4ZWN1dGlvbiBmb3IgdGVzdGluZyB0aW1lXHJcbiAqIEBwYXJhbSBtaWxsaXNlY29uZHNcclxuICovXHJcbmNvbnN0IF9zbGVlcCA9IChtaWxsaXNlY29uZHM6IG51bWJlciwgZGVidWc6IGJvb2xlYW4gPSBmYWxzZSkgPT4ge1xyXG4gICAgaWYgKGRlYnVnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzbGVlcCBzdGFydFwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkZWJ1Zykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzbGVlcCBlbmRcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9LCBtaWxsaXNlY29uZHMpXHJcbiAgICApO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEJsb2NrIGV4ZWN1dGlvbiBmb3Igc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIHN5bmNocm9ub3VzbHkuXHJcbiAqIEBwYXJhbSBtaWxsaXNlY29uZHMgdGhlIGRlbGF5XHJcbiAqL1xyXG5jb25zdCBfc2xlZXBTeW5jID0gKG1pbGxpc2Vjb25kczogbnVtYmVyKSA9PiB7XHJcbiAgICBsZXQgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgIGNvbnN0IHN0YXJ0ID0gbm93O1xyXG4gICAgd2hpbGUgKG5vdyAtIHN0YXJ0IDwgbWlsbGlzZWNvbmRzKSB7XHJcbiAgICAgICAgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgdGltZXIgaW5zdGFuY2UgdGhhdCB3aGVuIHN0b3BwZWQgd2lsbCBzdXBwbHkgZWxhcHNlZCB0aW1lIGluIG1pbGxpc2Vjb25kcy5cclxuICogVXNlZnVsIGZvciBiZW5jaG1hcmtpbmcgb3IgcHJvdmlkaW5nIGNvdW50ZXJzXHJcbiAqIEBwYXJhbSBuYW1lIFVzZWZ1bCBuYW1lIHRvIGlkZW50aWZ5IHRoZSB0aW1lclxyXG4gKi9cclxuY29uc3QgX3RpbWVyID0gKG5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgdmFyIHN0YXJ0ID0gbmV3IERhdGUoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3RvcHMgdGhlIHRpbWVyIGFuZCByZXR1cm5zIGVsYXBzZWQgdGltZSBpbiBtaWxsaXNlY29uZHNcclxuICAgICAgICAgKiBAcGFyYW0gbG9nIE9wdGlvbmFsIGZsYWcgaWYgeW91J2QgbGlrZSB0aGUgdGltZXIgdG8gbG9nIHRvIHRoZSBjb25zb2xlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RvcChsb2c/OiBib29sZWFuKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgdmFyIGVuZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciB0aW1lID0gZW5kLmdldFRpbWUoKSAtIHN0YXJ0LmdldFRpbWUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsb2cgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGltZXI6XCIsIG5hbWUsIFwiZmluaXNoZWQgaW5cIiwgdGltZSwgXCJtc1wiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRpbWU7XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn07XHJcblxyXG4vLyAjZW5kcmVnaW9uIFByaXZhdGUgTWV0aG9kc1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gI3JlZ2lvbiBFeHBvcnRzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5leHBvcnQgY29uc3QgQ29yZVV0aWxzID0ge1xyXG4gICAgYmluZEFsbDogXy5iaW5kQWxsLFxyXG4gICAgY3Vycnk6IF8uY3VycnksXHJcbiAgICBlbnVtVG9BcnJheTogX2VudW1Ub0FycmF5LFxyXG4gICAgZ2V0UmFuZG9tRW51bTogX2dldFJhbmRvbUVudW0sXHJcbiAgICBtZW1vaXplOiBfLm1lbW9pemUsXHJcbiAgICBtZXJnZTogXy5tZXJnZSxcclxuICAgIG51bWVyaWNFbnVtVG9Qb2pvOiBfbnVtZXJpY0VudW1Ub1Bvam8sXHJcbiAgICBvYmplY3RUb0FycmF5OiBfb2JqZWN0VG9BcnJheSxcclxuICAgIHJhbmdlOiBfLnJhbmdlLFxyXG4gICAgc2xlZXA6IF9zbGVlcCxcclxuICAgIHNsZWVwU3luYzogX3NsZWVwU3luYyxcclxuICAgIHRocm90dGxlOiBfLnRocm90dGxlLFxyXG4gICAgdGltZXI6IF90aW1lcixcclxuICAgIHRpbWVzOiBfLnRpbWVzLFxyXG59O1xyXG5cclxuLy8gI2VuZHJlZ2lvbiBFeHBvcnRzXHJcbiJdfQ==