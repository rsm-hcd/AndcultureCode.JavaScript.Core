import { CancellablePromise } from "../types/cancellable-promise";

// -----------------------------------------------------------------------------------------
// #region Public Methods
// -----------------------------------------------------------------------------------------

const PromiseFactory = {
    cancellable<T = any>(promise: Promise<T>): CancellablePromise<T> {
        let isCanceled = false;

        const wrappedPromise = new Promise<T>((resolve, reject) =>
            promise
                .then((value: T) =>
                    isCanceled ? PromiseFactory.pending() : resolve(value)
                )
                .catch((error: any) =>
                    isCanceled ? PromiseFactory.pending() : reject(error)
                )
        );

        return {
            promise: wrappedPromise,
            cancel() {
                isCanceled = true;
            },
        };
    },
    /**
     * Creates a new and empty/unfullfilled promise to cancel further
     * chained promise operations
     */
    pending() {
        return new Promise(() => {});
    },
};

// #endregion Public Methods

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { PromiseFactory };

// #endregion Exports
