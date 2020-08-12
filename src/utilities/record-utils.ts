import { Record } from "immutable";
import { Constructor } from "../types/constructor";

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

/**
 * Function to ensure a given object is an instance of a specific Record `T`. If it is not, one will
 * be instantiated with the given constructor.
 *
 * If `maybeRecord` is already an instance of `T`, it returns that value.
 *
 * @param maybeRecord Object or Record to be coalesced into a Record.
 * @param record Type of the Record to be instantiated
 */
const _ensureRecord = <T>(maybeRecord: any, record: Constructor<T>): T =>
    _isRecord(maybeRecord, record) ? maybeRecord : new record(maybeRecord);

/**
 * Function to verify a given object is an instance of a specific Record `T`.
 *
 * @param maybeRecord Object or Record to be checked as an instance of `T`
 * @param record Type of the Record to be checked
 */
const _isRecord = <T>(maybeRecord: any, record: Constructor<T>): boolean =>
    Record.isRecord(maybeRecord) && maybeRecord instanceof record;

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

const RecordUtils = {
    ensureRecord: _ensureRecord,
    isRecord: _isRecord,
};

export { RecordUtils };

// #endregion Exports
