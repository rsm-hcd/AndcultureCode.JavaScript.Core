/**
 * Allows us to use the documentMode for feature detection on globalThis.Document
 */
declare global {
    interface Document {
        documentMode?: any;
    }
}

/**
 * Returns true if the detected browser is Internet Explorer.
 * @returns boolean
 */
const _isIE = (): boolean => {
    return /*@cc_on!@*/ false || !!document.documentMode;
};

/**
 * Returns true if the brower is NOT Internet Explorer.
 * @returns boolean
 */
const _isNotIE = (): boolean => !_isIE();

export const BrowserUtils = {
    isIE: _isIE,
    isNotIE: _isNotIE,
};
