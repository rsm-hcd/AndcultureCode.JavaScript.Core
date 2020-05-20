// -----------------------------------------------------------------------------------------
// #region Enumerations
// -----------------------------------------------------------------------------------------

export * from "./enumerations/content-type";
export * from "./enumerations/error-type";
export * from "./enumerations/http-header";
export * from "./enumerations/http-verb";

//#endregion Enumerations

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export * from "./interfaces/paged-result";
export * from "./interfaces/result";
export * from "./interfaces/result-error";
export * from "./interfaces/service-response";

//#endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Tests
// -----------------------------------------------------------------------------------------

// factories
export * from "./tests/factories/axios-response-factory";
export * from "./tests/factories/factory-type";
export * from "./tests/factories/stub-resource-record-factory";

// mocks
export * from "./__mocks__/axios";
export * from "./tests/mocks/mock-axios";

// stubs
export * from "./tests/stubs/stub-resource";
export * from "./tests/stubs/stub-resource-record";

//#endregion Tests

// -----------------------------------------------------------------------------------------
// #region Utilities
// -----------------------------------------------------------------------------------------

export * from "./utilities/collection-utils";
export * from "./utilities/core-utils";
export * from "./utilities/promise-factory";
export * from "./utilities/route-utils";
export * from "./utilities/service-utils";
export * from "./utilities/string-utils";

//#endregion Utilities

// -----------------------------------------------------------------------------------------
// #region View Models
// -----------------------------------------------------------------------------------------

export * from "./view-models/result-record";
export * from "./view-models/result-error-record";

//#endregion View Models
