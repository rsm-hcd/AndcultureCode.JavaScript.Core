import { RequiredOr } from "./required-or";

// -----------------------------------------------------------------------------------------
// #region Types
// -----------------------------------------------------------------------------------------

/**
 * Mark all properties of `T` as required or explicitly set as undefined
 */
type RequiredOrUndefined<T> = RequiredOr<T, undefined>;

// #endregion Types

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { RequiredOrUndefined };

// #endregion Exports
