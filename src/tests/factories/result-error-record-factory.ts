import { ResultErrorRecord } from "../../view-models/result-error-record";
import { Factory } from "rosie";
import { FactoryType } from "./factory-type";

// -------------------------------------------------------------------------------------------------
// #region Factory
// -------------------------------------------------------------------------------------------------

const ResultErrorRecordFactory = Factory.define<ResultErrorRecord>(
    FactoryType.ResultErrorRecord,
    ResultErrorRecord
)
    .sequence("key", (i: number) => `TEST_ERROR_KEY_${i}`)
    .sequence("message", (i: number) => `Test error message ${i}`);

// #endregion Factory

// -------------------------------------------------------------------------------------------------
// #region Exports
// -------------------------------------------------------------------------------------------------

export { ResultErrorRecordFactory };

// #endregion Exports
