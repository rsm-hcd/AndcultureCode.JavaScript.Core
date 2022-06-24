import Humanize from "humanize-plus";
import _ from "lodash";
import { CollectionUtils } from "./collection-utils";
import { TemplateOptions, TemplateExecutor } from "lodash";

// -----------------------------------------------------------------------------------------
// #region Constants
// -----------------------------------------------------------------------------------------

/**
 * Validates a culture code format. Based off of https://regexr.com/3faf5, but looser to allow dashes
 * or underscores as separators.
 *
 * @example
 * en
 * en-US
 * en_US
 * en_us
 * EN_US
 */
const REGEX_VALID_CULTURE_CODE = /^([a-zA-Z]{2}((-|_)[a-zA-Z]{2})?)$/;
const REGEX_VALID_EMAIL =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// #endregion Constants

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

/**
 * Converts string to camel case.
 *
 * @param string The string to convert.
 * @return Returns the camel cased string.
 */
const camelCase = (string?: string): string => _.camelCase(string);

/**
 * Converts the first character of string to upper case and the remaining to lower case.
 *
 * @param string The string to capitalize.
 * @return Returns the capitalized string.
 */
const capitalize = (string?: string): string => _.capitalize(string);

/**
 * Returns the filename from the supplied string, including extension
 * @param value
 */
const filename = (value?: string): string | undefined =>
    value?.split("/").pop();

/**
 * Determines whether or not the provided value is NOT `undefined`, `null`, or an empty string
 * (after trimming both ends of the string)
 *
 * @param {string} [value]
 * @returns {boolean}
 */
const hasValue = (value?: string): value is string =>
    // toString is called here to ensure handling all edge cases when a non string value is passed in this function
    value != null && value?.toString().trim() !== "";

/**
 * Determines whether or not the provided value is `undefined`, `null`, or an empty string
 * (after trimming both ends of the string)
 *
 * @param {string} [value]
 * @returns {boolean}
 */
const isEmpty = (value?: string): value is undefined =>
    // toString is called here to ensure handling all edge cases when a non string value is passed in this function
    value == null || value.toString().trim() === "";

/**
 * Validates the given string as RFC-4646 culture code format
 *
 * @param cultureCode
 */
const isValidCultureCode = (cultureCode?: string): cultureCode is string =>
    hasValue(cultureCode) &&
    REGEX_VALID_CULTURE_CODE.test(cultureCode.toLowerCase());

/**
 * Validates a given string matches a valid email format
 * @param value
 */
const isValidEmail = (value?: string): value is string =>
    value != null && REGEX_VALID_EMAIL.test(value);

/**
 * Joins an array of strings into one string with a separator. If the array is empty, it will return an empty string.
 *
 * @default ""
 * @param {string[]} values Values to join into one string.
 * @param {string} [separator=","] String to separate each of the given values.
 * @returns {string}
 */
const join = (values: string[], separator: string = ","): string => {
    if (CollectionUtils.isEmpty(values)) {
        return "";
    }

    return values.join(separator);
};

/**
 * Converts the first character of `string` to lower case.
 *
 * @param string The string to convert.
 * @return Returns the converted string.
 */
const lowerFirst = (string?: string): string => _.lowerCase(string);

/**
 * Pads string on the left and right sides if it’s shorter than length. Padding characters are truncated if
 * they can’t be evenly divided by length.
 *
 * @param string The string to pad.
 * @param length The padding length.
 * @param chars The string used as padding.
 * @return Returns the padded string.
 */
const pad = (string?: string, length?: number, chars?: string): string =>
    _.pad(string, length, chars);

/**
 * Pads string on the right side if it’s shorter than length. Padding characters are truncated if they exceed
 * length.
 *
 * @param string The string to pad.
 * @param length The padding length.
 * @param chars The string used as padding.
 * @return Returns the padded string.
 */
const padEnd = (string?: string, length?: number, chars?: string): string =>
    _.padEnd(string, length, chars);

/**
 * Pads string on the left side if it’s shorter than length. Padding characters are truncated if they exceed
 * length.
 *
 * @param string The string to pad.
 * @param length The padding length.
 * @param chars The string used as padding.
 * @return Returns the padded string.
 */
const padStart = (string?: string, length?: number, chars?: string): string =>
    _.padStart(string, length, chars);

/**
 * Returns the plural version of a given word if the value is not 1. The default suffix is 's'.
 * @param number
 * @param singular
 * @param plural
 * @example
 * Humanize.pluralize(1, "duck")
 * => "duck"

 * Humanize.pluralize(3, "duck")
 * => "ducks"

 * Humanize.pluralize(3, "duck", "duckies")
 * => "duckies"
 */
const pluralize = (
    number: number,
    singular?: string,
    plural?: string
): string => Humanize.pluralize(number, singular, plural);

/**
 * Repeats the given string n times.
 *
 * @param string The string to repeat.
 * @param n The number of times to repeat the string.
 * @return Returns the repeated string.
 */
const repeat = (string?: string, n?: number): string => _.repeat(string, n);

/**
 * Converts string to snake case.
 *
 * @param string The string to convert.
 * @return Returns the snake cased string.
 */
const snakeCase = (string?: string): string => _.snakeCase(string);

/**
 * Converts string to start case.
 *
 * @param string The string to convert.
 * @return Returns the start cased string.
 */
const startCase = (string?: string): string => _.startCase(string);

/**
 * Creates a compiled template function that can interpolate data properties in "interpolate" delimiters,
 * HTML-escape interpolated data properties in "escape" delimiters, and execute JavaScript in "evaluate"
 * delimiters. Data properties may be accessed as free variables in the template. If a setting object is
 * provided it takes precedence over _.templateSettings values.
 *
 * Note: In the development build _.template utilizes
 * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl) for easier
 * debugging.
 *
 * For more information on precompiling templates see
 * [lodash's custom builds documentation](https://lodash.com/custom-builds).
 *
 * For more information on Chrome extension sandboxes see
 * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
 *
 * @param string The template string.
 * @param options The options object.
 * @param options.escape The HTML "escape" delimiter.
 * @param options.evaluate The "evaluate" delimiter.
 * @param options.imports An object to import into the template as free variables.
 * @param options.interpolate The "interpolate" delimiter.
 * @param options.sourceURL The sourceURL of the template's compiled source.
 * @param options.variable The data object variable name.
 * @return Returns the compiled template function.
 */
const template = (
    string?: string,
    options?: TemplateOptions
): TemplateExecutor => _.template(string, options);

const truncateRight = (value: string, truncateAtPos: number): string => {
    if (value.length <= truncateAtPos) {
        return value;
    }

    const truncatedValue = value.substring(0, truncateAtPos - 3).trim();

    return truncatedValue.endsWith(".")
        ? truncatedValue
        : `${truncatedValue}...`;
};

/**
 * Converts the first character of `string` to upper case.
 *
 * @param string The string to convert.
 * @return Returns the converted string.
 */
const upperFirst = (string?: string): string => _.upperFirst(string);

/**
 * Splits `string` into an array of its words.
 *
 * @param string The string to inspect.
 * @param pattern The pattern to match words.
 * @return Returns the words of `string`.
 */
const words = (string?: string, pattern?: string | RegExp): string[] =>
    _.words(string, pattern);

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export const StringUtils = {
    camelCase,
    capitalize,
    filename,
    hasValue,
    isEmpty,
    isValidCultureCode,
    isValidEmail,
    join,
    lowerFirst,
    pad,
    padEnd,
    padStart,
    pluralize,
    repeat,
    snakeCase,
    startCase,
    template,
    truncateRight,
    upperFirst,
    words,
};

// #endregion Exports
