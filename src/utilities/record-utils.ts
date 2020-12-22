import { Record } from "immutable";
import { Constructor } from "../types/constructor";

// -----------------------------------------------------------------------------------------
// #region Public Functions
// -----------------------------------------------------------------------------------------

const RecordUtils = {
    /**
     * Function to ensure a given object is an instance of a specific Record `T`. If it is not, one will
     * be instantiated with the given constructor.
     *
     * If `maybeRecord` is already an instance of `T`, it returns that value.
     *
     * @param maybeRecord Object or Record to be coalesced into a Record.
     * @param record Type of the Record to be instantiated
     */
    ensureRecord<T>(maybeRecord: any, record: Constructor<T>): T {
        return RecordUtils.isRecord(maybeRecord, record)
            ? maybeRecord
            : new record(maybeRecord);
    },

    /**
     * Function to verify a given object is an instance of a specific Record `T`.
     *
     * @param maybeRecord Object or Record to be checked as an instance of `T`
     * @param record Type of the Record to be checked
     */
    isRecord<T>(maybeRecord: any, record: Constructor<T>): maybeRecord is T {
        return Record.isRecord(maybeRecord) && maybeRecord instanceof record;
    },
};

// #endregion Public Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { RecordUtils };

// #endregion Exports
