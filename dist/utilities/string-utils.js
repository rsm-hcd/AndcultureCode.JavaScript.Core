"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var humanize_plus_1 = __importDefault(require("humanize-plus"));
var lodash_1 = __importDefault(require("lodash"));
var collection_utils_1 = require("./collection-utils");
// -----------------------------------------------------------------------------------------
// #region Constants
// -----------------------------------------------------------------------------------------
var REGEX_VALID_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// #endregion Constants
// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------
/**
 * Returns the filename from the supplied string, including extension
 * @param value
 */
var filename = function (value) { return value === null || value === void 0 ? void 0 : value.split("/").pop(); };
/**
 * Determines whether or not the provided value is NOT `undefined`, `null`, or an empty string
 * (after trimming both ends of the string)
 *
 * @param {string} [value]
 * @returns {boolean}
 */
var hasValue = function (value) {
    // toString is called here to ensure handling all edge cases when a non string value is passed in this fuction
    return value != null && (value === null || value === void 0 ? void 0 : value.toString().trim()) !== "";
};
/**
 * Determines whether or not the provided value is `undefined`, `null`, or an empty string
 * (after trimming both ends of the string)
 *
 * @param {string} [value]
 * @returns {boolean}
 */
var isEmpty = function (value) {
    // toString is called here to ensure handling all edge cases when a non string value is passed in this fuction
    return value == null || value.toString().trim() === "";
};
/**
 * Validates a given string matches a valid email format
 * @param value
 */
var isValidEmail = function (value) {
    return value != null && REGEX_VALID_EMAIL.test(value);
};
/**
 * Joins an array of strings into one string with a separator. If the array is empty, it will return an empty string.
 *
 * @default ""
 * @param {string[]} values Values to join into one string.
 * @param {string} [separator=","] String to seperate each of the given values.
 * @returns {string}
 */
var join = function (values, separator) {
    if (separator === void 0) { separator = ","; }
    if (collection_utils_1.CollectionUtils.isEmpty(values)) {
        return "";
    }
    return values.join(separator);
};
var truncateRight = function (value, truncateAtPos) {
    if (value.length <= truncateAtPos) {
        return value;
    }
    var truncatedValue = value.substring(0, truncateAtPos - 3).trim();
    return truncatedValue.endsWith(".")
        ? truncatedValue
        : truncatedValue + "...";
};
// #endregion Functions
// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------
exports.StringUtils = {
    camelCase: lodash_1.default.camelCase,
    capitalize: lodash_1.default.capitalize,
    filename: filename,
    hasValue: hasValue,
    isEmpty: isEmpty,
    isValidEmail: isValidEmail,
    join: join,
    lowerFirst: lodash_1.default.lowerFirst,
    pad: lodash_1.default.pad,
    padEnd: lodash_1.default.padEnd,
    padStart: lodash_1.default.padStart,
    pluralize: humanize_plus_1.default.pluralize,
    repeat: lodash_1.default.repeat,
    snakeCase: lodash_1.default.snakeCase,
    startCase: lodash_1.default.startCase,
    template: lodash_1.default.template,
    truncateRight: truncateRight,
    upperFirst: lodash_1.default.upperFirst,
    words: lodash_1.default.words,
};
// #endregion Exports
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLXV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxpdGllcy9zdHJpbmctdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnRUFBcUM7QUFDckMsa0RBQXVCO0FBQ3ZCLHVEQUFxRDtBQUVyRCw0RkFBNEY7QUFDNUYsb0JBQW9CO0FBQ3BCLDRGQUE0RjtBQUU1RixJQUFNLGlCQUFpQixHQUFHLHNKQUFzSixDQUFDO0FBRWpMLHVCQUF1QjtBQUV2Qiw0RkFBNEY7QUFDNUYsb0JBQW9CO0FBQ3BCLDRGQUE0RjtBQUU1Rjs7O0dBR0c7QUFDSCxJQUFNLFFBQVEsR0FBRyxVQUFDLEtBQWMsV0FDNUIsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFFLENBQUM7QUFFNUI7Ozs7OztHQU1HO0FBQ0gsSUFBTSxRQUFRLEdBQUcsVUFBQyxLQUFjO0lBQzVCLDhHQUE4RztJQUM5RyxPQUFBLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsUUFBUSxHQUFHLElBQUksUUFBTyxFQUFFO0FBQWhELENBQWdELENBQUM7QUFFckQ7Ozs7OztHQU1HO0FBQ0gsSUFBTSxPQUFPLEdBQUcsVUFBQyxLQUFjO0lBQzNCLDhHQUE4RztJQUM5RyxPQUFBLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7QUFBL0MsQ0FBK0MsQ0FBQztBQUVwRDs7O0dBR0c7QUFDSCxJQUFNLFlBQVksR0FBRyxVQUFDLEtBQWM7SUFDaEMsT0FBQSxLQUFLLElBQUksSUFBSSxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7QUFBOUMsQ0FBOEMsQ0FBQztBQUVuRDs7Ozs7OztHQU9HO0FBQ0gsSUFBTSxJQUFJLEdBQUcsVUFBQyxNQUFnQixFQUFFLFNBQXVCO0lBQXZCLDBCQUFBLEVBQUEsZUFBdUI7SUFDbkQsSUFBSSxrQ0FBZSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNqQyxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBRUQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2xDLENBQUMsQ0FBQztBQUVGLElBQU0sYUFBYSxHQUFHLFVBQUMsS0FBYSxFQUFFLGFBQXFCO0lBQ3ZELElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxhQUFhLEVBQUU7UUFDL0IsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFFRCxJQUFNLGNBQWMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFcEUsT0FBTyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUMvQixDQUFDLENBQUMsY0FBYztRQUNoQixDQUFDLENBQUksY0FBYyxRQUFLLENBQUM7QUFDakMsQ0FBQyxDQUFDO0FBRUYsdUJBQXVCO0FBRXZCLDRGQUE0RjtBQUM1RixrQkFBa0I7QUFDbEIsNEZBQTRGO0FBRS9FLFFBQUEsV0FBVyxHQUFHO0lBQ3ZCLFNBQVMsRUFBRSxnQkFBQyxDQUFDLFNBQVM7SUFDdEIsVUFBVSxFQUFFLGdCQUFDLENBQUMsVUFBVTtJQUN4QixRQUFRLFVBQUE7SUFDUixRQUFRLFVBQUE7SUFDUixPQUFPLFNBQUE7SUFDUCxZQUFZLGNBQUE7SUFDWixJQUFJLE1BQUE7SUFDSixVQUFVLEVBQUUsZ0JBQUMsQ0FBQyxVQUFVO0lBQ3hCLEdBQUcsRUFBRSxnQkFBQyxDQUFDLEdBQUc7SUFDVixNQUFNLEVBQUUsZ0JBQUMsQ0FBQyxNQUFNO0lBQ2hCLFFBQVEsRUFBRSxnQkFBQyxDQUFDLFFBQVE7SUFDcEIsU0FBUyxFQUFFLHVCQUFRLENBQUMsU0FBUztJQUM3QixNQUFNLEVBQUUsZ0JBQUMsQ0FBQyxNQUFNO0lBQ2hCLFNBQVMsRUFBRSxnQkFBQyxDQUFDLFNBQVM7SUFDdEIsU0FBUyxFQUFFLGdCQUFDLENBQUMsU0FBUztJQUN0QixRQUFRLEVBQUUsZ0JBQUMsQ0FBQyxRQUFRO0lBQ3BCLGFBQWEsZUFBQTtJQUNiLFVBQVUsRUFBRSxnQkFBQyxDQUFDLFVBQVU7SUFDeEIsS0FBSyxFQUFFLGdCQUFDLENBQUMsS0FBSztDQUNqQixDQUFDO0FBRUYscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEh1bWFuaXplIGZyb20gXCJodW1hbml6ZS1wbHVzXCI7XHJcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgQ29sbGVjdGlvblV0aWxzIH0gZnJvbSBcIi4vY29sbGVjdGlvbi11dGlsc1wiO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gI3JlZ2lvbiBDb25zdGFudHNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNvbnN0IFJFR0VYX1ZBTElEX0VNQUlMID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuXHJcbi8vICNlbmRyZWdpb24gQ29uc3RhbnRzXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAjcmVnaW9uIEZ1bmN0aW9uc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGZpbGVuYW1lIGZyb20gdGhlIHN1cHBsaWVkIHN0cmluZywgaW5jbHVkaW5nIGV4dGVuc2lvblxyXG4gKiBAcGFyYW0gdmFsdWVcclxuICovXHJcbmNvbnN0IGZpbGVuYW1lID0gKHZhbHVlPzogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkID0+XHJcbiAgICB2YWx1ZT8uc3BsaXQoXCIvXCIpLnBvcCgpO1xyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIHByb3ZpZGVkIHZhbHVlIGlzIE5PVCBgdW5kZWZpbmVkYCwgYG51bGxgLCBvciBhbiBlbXB0eSBzdHJpbmdcclxuICogKGFmdGVyIHRyaW1taW5nIGJvdGggZW5kcyBvZiB0aGUgc3RyaW5nKVxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3ZhbHVlXVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmNvbnN0IGhhc1ZhbHVlID0gKHZhbHVlPzogc3RyaW5nKTogYm9vbGVhbiA9PlxyXG4gICAgLy8gdG9TdHJpbmcgaXMgY2FsbGVkIGhlcmUgdG8gZW5zdXJlIGhhbmRsaW5nIGFsbCBlZGdlIGNhc2VzIHdoZW4gYSBub24gc3RyaW5nIHZhbHVlIGlzIHBhc3NlZCBpbiB0aGlzIGZ1Y3Rpb25cclxuICAgIHZhbHVlICE9IG51bGwgJiYgdmFsdWU/LnRvU3RyaW5nKCkudHJpbSgpICE9PSBcIlwiO1xyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIHByb3ZpZGVkIHZhbHVlIGlzIGB1bmRlZmluZWRgLCBgbnVsbGAsIG9yIGFuIGVtcHR5IHN0cmluZ1xyXG4gKiAoYWZ0ZXIgdHJpbW1pbmcgYm90aCBlbmRzIG9mIHRoZSBzdHJpbmcpXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdmFsdWVdXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuY29uc3QgaXNFbXB0eSA9ICh2YWx1ZT86IHN0cmluZyk6IGJvb2xlYW4gPT5cclxuICAgIC8vIHRvU3RyaW5nIGlzIGNhbGxlZCBoZXJlIHRvIGVuc3VyZSBoYW5kbGluZyBhbGwgZWRnZSBjYXNlcyB3aGVuIGEgbm9uIHN0cmluZyB2YWx1ZSBpcyBwYXNzZWQgaW4gdGhpcyBmdWN0aW9uXHJcbiAgICB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlLnRvU3RyaW5nKCkudHJpbSgpID09PSBcIlwiO1xyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRlcyBhIGdpdmVuIHN0cmluZyBtYXRjaGVzIGEgdmFsaWQgZW1haWwgZm9ybWF0XHJcbiAqIEBwYXJhbSB2YWx1ZVxyXG4gKi9cclxuY29uc3QgaXNWYWxpZEVtYWlsID0gKHZhbHVlPzogc3RyaW5nKTogYm9vbGVhbiA9PlxyXG4gICAgdmFsdWUgIT0gbnVsbCAmJiBSRUdFWF9WQUxJRF9FTUFJTC50ZXN0KHZhbHVlKTtcclxuXHJcbi8qKlxyXG4gKiBKb2lucyBhbiBhcnJheSBvZiBzdHJpbmdzIGludG8gb25lIHN0cmluZyB3aXRoIGEgc2VwYXJhdG9yLiBJZiB0aGUgYXJyYXkgaXMgZW1wdHksIGl0IHdpbGwgcmV0dXJuIGFuIGVtcHR5IHN0cmluZy5cclxuICpcclxuICogQGRlZmF1bHQgXCJcIlxyXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSB2YWx1ZXMgVmFsdWVzIHRvIGpvaW4gaW50byBvbmUgc3RyaW5nLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3NlcGFyYXRvcj1cIixcIl0gU3RyaW5nIHRvIHNlcGVyYXRlIGVhY2ggb2YgdGhlIGdpdmVuIHZhbHVlcy5cclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmNvbnN0IGpvaW4gPSAodmFsdWVzOiBzdHJpbmdbXSwgc2VwYXJhdG9yOiBzdHJpbmcgPSBcIixcIik6IHN0cmluZyA9PiB7XHJcbiAgICBpZiAoQ29sbGVjdGlvblV0aWxzLmlzRW1wdHkodmFsdWVzKSkge1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZXMuam9pbihzZXBhcmF0b3IpO1xyXG59O1xyXG5cclxuY29uc3QgdHJ1bmNhdGVSaWdodCA9ICh2YWx1ZTogc3RyaW5nLCB0cnVuY2F0ZUF0UG9zOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA8PSB0cnVuY2F0ZUF0UG9zKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRydW5jYXRlZFZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDAsIHRydW5jYXRlQXRQb3MgLSAzKS50cmltKCk7XHJcblxyXG4gICAgcmV0dXJuIHRydW5jYXRlZFZhbHVlLmVuZHNXaXRoKFwiLlwiKVxyXG4gICAgICAgID8gdHJ1bmNhdGVkVmFsdWVcclxuICAgICAgICA6IGAke3RydW5jYXRlZFZhbHVlfS4uLmA7XHJcbn07XHJcblxyXG4vLyAjZW5kcmVnaW9uIEZ1bmN0aW9uc1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gI3JlZ2lvbiBFeHBvcnRzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5leHBvcnQgY29uc3QgU3RyaW5nVXRpbHMgPSB7XHJcbiAgICBjYW1lbENhc2U6IF8uY2FtZWxDYXNlLFxyXG4gICAgY2FwaXRhbGl6ZTogXy5jYXBpdGFsaXplLFxyXG4gICAgZmlsZW5hbWUsXHJcbiAgICBoYXNWYWx1ZSxcclxuICAgIGlzRW1wdHksXHJcbiAgICBpc1ZhbGlkRW1haWwsXHJcbiAgICBqb2luLFxyXG4gICAgbG93ZXJGaXJzdDogXy5sb3dlckZpcnN0LFxyXG4gICAgcGFkOiBfLnBhZCxcclxuICAgIHBhZEVuZDogXy5wYWRFbmQsXHJcbiAgICBwYWRTdGFydDogXy5wYWRTdGFydCxcclxuICAgIHBsdXJhbGl6ZTogSHVtYW5pemUucGx1cmFsaXplLFxyXG4gICAgcmVwZWF0OiBfLnJlcGVhdCxcclxuICAgIHNuYWtlQ2FzZTogXy5zbmFrZUNhc2UsXHJcbiAgICBzdGFydENhc2U6IF8uc3RhcnRDYXNlLFxyXG4gICAgdGVtcGxhdGU6IF8udGVtcGxhdGUsXHJcbiAgICB0cnVuY2F0ZVJpZ2h0LFxyXG4gICAgdXBwZXJGaXJzdDogXy51cHBlckZpcnN0LFxyXG4gICAgd29yZHM6IF8ud29yZHMsXHJcbn07XHJcblxyXG4vLyAjZW5kcmVnaW9uIEV4cG9ydHNcclxuIl19