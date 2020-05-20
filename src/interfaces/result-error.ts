import { ErrorType } from "../enumerations/error-type";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface ResultError {
    key?: string;
    message?: string;
    type?: ErrorType;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export { ResultError };

// #endregion Export
