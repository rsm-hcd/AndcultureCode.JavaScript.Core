import Immutable from "immutable";
import { Result } from "../interfaces/result";
declare const ResultRecord_base: Immutable.Record.Factory<Result<any>>;
declare class ResultRecord<T> extends ResultRecord_base implements Result<T> {
    constructor(params?: Result<T>);
    /**
     * Adds a new error with the supplied details and returns a new ResultRecord
     * @param key error key value (typically property name)
     * @param message error message value
     * @param type type of error (default of 'Error')
     */
    addError(key: string, message: string): ResultRecord<T>;
    /**
     * Adds a new validation error with the supplied details and returns a new ResultRecord
     * @param key error key value (typically property name)
     * @param message error message value
     * @param type type of error (default of 'Error')
     */
    addValidationError(key: string, message: string): ResultRecord<T>;
    /**
     * Evaluates whether there are any errors on the result
     */
    doesNotHaveErrors(): boolean;
    /**
     * Returns total number of errors
     */
    errorCount(): number;
    /**
     * Returns an error message for a given key
     * @param key
     */
    getErrorMessageFor(key: string): string | undefined;
    /**
     * Determines if the result contains an error for the supplied key(s)
     * @param keys error keys for which to search
     */
    hasErrorFor(...keys: string[]): boolean;
    /**
     * Evaluates whether there are any errors on the result
     */
    hasErrors(): boolean;
    /**
     * Map all errors into simple string array
     */
    listErrors(): string[];
    /**
     * Map all error messages into a simple string array.
     */
    listErrorMessages(): string[];
    /**
     * Merges new values into the record and returns a new instance.
     *
     * @param {Partial<Result<T>>} values
     * @returns {ResultRecord<T>}
     * @memberof ResultRecord
     */
    with(values: Partial<Result<T>>): ResultRecord<T>;
    private _addErrorByType;
}
export { ResultRecord };
