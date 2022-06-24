import { ResultRecord } from "../../view-models/result-record";
import { Factory } from "rosie";
import { FactoryType } from "./factory-type";

// -------------------------------------------------------------------------------------------------
// #region Factory
// -------------------------------------------------------------------------------------------------

const ResultRecordFactory = Factory.define<ResultRecord<any>>(
    FactoryType.ResultRecord,
    ResultRecord
);

// #endregion Factory

// -------------------------------------------------------------------------------------------------
// #region Exports
// -------------------------------------------------------------------------------------------------

export { ResultRecordFactory };

// #endregion Exports
