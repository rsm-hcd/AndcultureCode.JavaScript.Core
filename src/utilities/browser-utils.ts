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

export const BrowserUtils = {
  isIE: _isIE,
};
