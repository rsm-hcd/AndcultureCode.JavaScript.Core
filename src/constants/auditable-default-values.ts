import { Auditable } from "../interfaces/auditable";

// -----------------------------------------------------------------------------------------
// #region Constants
// -----------------------------------------------------------------------------------------

const AuditableDefaultValues: Auditable = {
    createdById: undefined,
    createdOn: undefined,
    deletedById: undefined,
    deletedOn: undefined,
    id: undefined,
    updatedById: undefined,
    updatedOn: undefined,
};

// #endregion Constants

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { AuditableDefaultValues };

// #endregion Exports
