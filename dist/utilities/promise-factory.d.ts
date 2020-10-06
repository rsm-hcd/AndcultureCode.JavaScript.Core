import { CancellablePromise } from "../types/cancellable-promise";
declare const PromiseFactory: {
    cancellable<T = any>(promise: Promise<T>): CancellablePromise<T>;
    /**
     * Creates a new and empty/unfullfilled promise to cancel further
     * chained promise operations
     */
    pending(): Promise<unknown>;
};
export { PromiseFactory };
