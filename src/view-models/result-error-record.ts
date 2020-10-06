import { Record } from "immutable";
import { ResultError } from "../interfaces/result-error";
import { ErrorType } from "../enumerations/error-type";

const defaultValues: ResultError = {
    key: undefined,
    message: undefined,
    type: ErrorType.Error,
};

class ResultErrorRecord extends Record(defaultValues) implements ResultError {
    // Do NOT set properties on immutable records due to babel and typescript transpilation issue
    // See https://github.com/facebook/create-react-app/issues/6506

    // -----------------------------------------------------------------------------------------
    // #region Constructor
    // -----------------------------------------------------------------------------------------

    constructor(params?: ResultError) {
        if (params == null) {
            params = {};
        }

        if (params.type == null) {
            params.type = ErrorType.Error;
        }

        super(params);
    }

    // #endregion Constructor

    // -----------------------------------------------------------------------------------------
    // #region Public Methods
    // -----------------------------------------------------------------------------------------

    /**
     * Display error key and message
     */
    public fullError(): string {
        return `${this.key}: ${this.message}`;
    }

    /**
     * Merges new values into the record and returns a new instance.
     *
     * @param {Partial<ResultError>} values
     * @returns {ResultErrorRecord}
     * @memberof ResultErrorRecord
     */
    public with(values: Partial<ResultError>): ResultErrorRecord {
        return new ResultErrorRecord(Object.assign(this.toJS(), values));
    }

    // #endregion Public Methods
}

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export { ResultErrorRecord };

// #endregion Export
