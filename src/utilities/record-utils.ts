import { Record } from "immutable";
import { AuditableDefaultValues } from "../constants/auditable-default-values";
import { Auditable } from "../interfaces/auditable";
import { Constructor } from "../types/constructor";
import { OmitKeys } from "../types/omit-keys";
import { RequiredOrUndefined } from "../types/required-or-undefined";

// -----------------------------------------------------------------------------------------
// #region Public Functions
// -----------------------------------------------------------------------------------------

const RecordUtils = {
    /**
     * Returns object of type `T` with Auditable values (`createdById`, `createdOn`, etc.) set to `undefined`
     *
     * @param defaultValues Object with all non-Auditable properties set to a default value (or `undefined`)
     */
    auditableDefaultValuesFactory<T extends Auditable>(
        defaultValues: RequiredOrUndefined<OmitKeys<T, Auditable>>
    ): T {
        return Object.assign(defaultValues, AuditableDefaultValues) as T;
    },

    /**
     * Returns object cast back as type `T` to ensure all properties are set for use with a `Record`
     * class definition
     *
     * @param defaultValues Object with all properties set to a default value (or `undefined`)
     */
    defaultValuesFactory<T>(defaultValues: RequiredOrUndefined<T>): T {
        return defaultValues as T;
    },

    /**
     * Function to ensure a given object is an instance of a specific Record `T`. If it is not, one will
     * be instantiated with the given constructor.
     *
     * If `maybeRecord` is already an instance of `T`, it returns that value.
     *
     * @param maybeRecord Object or Record to be coalesced into a Record.
     * @param record Type of the Record to be instantiated
     */
    ensureRecord<TValue, TRecord extends TValue>(
        maybeRecord: TValue,
        record: Constructor<TRecord>
    ): TRecord {
        return RecordUtils.isRecord(maybeRecord, record)
            ? maybeRecord
            : new record(maybeRecord);
    },

    /**
     * Function to ensure a given array of objects are instances of a specific Record `T`. If they
     * are not, one will be instantiated with the given constructor.
     *
     * If `maybeRecord` is already an instance of `T`, it returns that value.
     *
     * @param maybeRecords Array of objects or Records to be coalesced into Records.
     * @param record Type of the Record to be instantiated
     */
    ensureRecords<TValue, TRecord extends TValue>(
        maybeRecords: TValue[],
        record: Constructor<TRecord>
    ): TRecord[] {
        const ensureRecord = (maybeRecord: TValue) =>
            this.ensureRecord(maybeRecord, record);
        return maybeRecords.map(ensureRecord);
    },

    /**
     * Function to verify a given object is an instance of a specific Record `T`.
     *
     * @param maybeRecord Object or Record to be checked as an instance of `T`
     * @param record Type of the Record to be checked
     */
    isRecord<TValue, TRecord extends TValue>(
        maybeRecord: TValue,
        record: Constructor<TRecord>
    ): maybeRecord is TRecord {
        return Record.isRecord(maybeRecord) && maybeRecord instanceof record;
    },
};

// #endregion Public Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { RecordUtils };

// #endregion Exports
