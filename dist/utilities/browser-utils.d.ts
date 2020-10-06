/**
 * Allows us to use the documentMode for feature detection on globalThis.Document
 */
declare global {
    interface Document {
        documentMode?: any;
    }
}
export declare const BrowserUtils: {
    isIE: () => boolean;
    isNotIE: () => boolean;
};
