/**
 * Represents an asynchronous method reference.
 */
type AsyncWorkload<T> = () => Promise<T>;

export { AsyncWorkload };
