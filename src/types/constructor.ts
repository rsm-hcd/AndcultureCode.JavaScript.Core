/**
 * Represents the constructor of a typed object which can be used for instantiation.
 */
type Constructor<T = {}> = new (...values: any[]) => T;

export { Constructor };
