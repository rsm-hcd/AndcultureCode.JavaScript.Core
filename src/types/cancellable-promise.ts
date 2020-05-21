type CancellablePromise<T = any> = {
    cancel: () => void;
    promise: Promise<T>;
};

export { CancellablePromise };
