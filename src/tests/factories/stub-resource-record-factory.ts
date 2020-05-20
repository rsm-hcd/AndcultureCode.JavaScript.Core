import { Factory } from "rosie";
import { StubResourceRecord } from "../stubs/stub-resource-record";
import { FactoryType } from "./factory-type";

// -----------------------------------------------------------------------------------------
// #region Factory
// -----------------------------------------------------------------------------------------

const StubResourceRecordFactory = Factory.define<StubResourceRecord>(
    FactoryType.StubResourceRecord,
    StubResourceRecord
)
    .sequence("id", (i: number) => i)
    .sequence("name", (i: number) => `Name ${i}`);

// #endregion Factory

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export { StubResourceRecordFactory };

// #endregion Export
