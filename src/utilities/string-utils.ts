// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

/**
 * Determines whether or not the provided value is NOT `undefined`, `null`, or an empty string
 * (after trimming both ends of the string)
 *
 * @param {string} [value]
 * @returns {boolean}
 */
const hasValue = (value?: string): boolean =>
    // toString is called here to ensure handling all edge cases when a non string value is passed in this fuction
    value != null && value.toString().trim() !== "";

/**
 * Determines whether or not the provided value is `undefined`, `null`, or an empty string
 * (after trimming both ends of the string)
 *
 * @param {string} [value]
 * @returns {boolean}
 */
const isEmpty = (value?: string): boolean =>
    // toString is called here to ensure handling all edge cases when a non string value is passed in this fuction
    value == null || value.toString().trim() === "";

/**
 * Validates a given string matches a valid email format
 * @param value
 */
const isValidEmail = (value?: string): boolean =>
    value != null &&
    new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ).test(value);

const truncateRight = (value: string, truncateAtPos: number): string => {
    if (value.length <= truncateAtPos) {
        return value;
    }

    const truncatedValue = value.substring(0, truncateAtPos - 3).trim();

    return truncatedValue.endsWith(".")
        ? truncatedValue
        : `${truncatedValue}...`;
};

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

const StringUtils = {
    hasValue,
    isEmpty,
    isValidEmail,
    truncateRight,
};

export default StringUtils;

// #endregion Exports
