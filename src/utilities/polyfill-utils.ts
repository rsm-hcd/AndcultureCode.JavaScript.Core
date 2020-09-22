// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

/**
 * Promise.finally is not natively supported in Internet Explorer.
 */
/* tslint:disable */
const registerPromiseFinallyPolyfill = () => {
    Promise.prototype.finally =
        Promise.prototype.finally ??
        function(callback: () => any) {
            // @ts-ignore
            return this.then(
                (value: any) => Promise.resolve(callback()).then(() => value),
                (reason: any) =>
                    Promise.resolve(callback()).then(() => {
                        throw reason;
                    })
            );
        };
};
/* tslint:enable */

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

const PolyfillUtils = {
    registerPromiseFinallyPolyfill,
};

export { PolyfillUtils };

// #endregion Exports
