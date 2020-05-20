import { ResultErrorRecord } from "../view-models/result-error-record";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface PagedResult<T> {
    errors?: ResultErrorRecord[];
    resultObject?: T[];
    rowCount: number;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export { PagedResult };

// #endregion Export
