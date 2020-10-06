import immutable from "immutable";
import { ResultError } from "../interfaces/result-error";
declare const ResultErrorRecord_base: immutable.Record.Factory<ResultError>;
declare class ResultErrorRecord extends ResultErrorRecord_base implements ResultError {
    constructor(params?: ResultError);
    /**
     * Display error key and message
     */
    fullError(): string;
    /**
     * Merges new values into the record and returns a new instance.
     *
     * @param {Partial<ResultError>} values
     * @returns {ResultErrorRecord}
     * @memberof ResultErrorRecord
     */
    with(values: Partial<ResultError>): ResultErrorRecord;
}
export { ResultErrorRecord };
