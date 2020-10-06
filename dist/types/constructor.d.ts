/**
 * Represents the constructor of a typed object which can be used for instantiation.
 */
declare type Constructor<T> = new (...values: any) => T;
export { Constructor };
