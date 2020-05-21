// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

/**
 * Function to return whether or not the current environment is development.
 *
 * @returns {boolean}
 */
const isDevelopment = (): boolean => {
    return process.env.NODE_ENV === "development";
};

/**
 * Conditionally runs the given function, depending on whether the current environment is development or not.
 *
 * @param {() => any} fn Function to be run in a development environment only.
 */
const runIfDevelopment = (fn: () => any): void => {
    if (!isDevelopment()) {
        return;
    }

    fn();
};

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export const EnvironmentUtils = {
    isDevelopment,
    runIfDevelopment,
};

// #endregion Export
