import { Factory } from "rosie";
import {
    AxiosResponseFactoryBuilder,
    StubResourceRecordFactoryBuilder,
} from "andculturecode-javascript-testing";
export * from "./result-error-record-factory";
export * from "./result-record-factory";

// -----------------------------------------------------------------------------------------
// #region Factory Builders
// -----------------------------------------------------------------------------------------

export const AxiosResponseFactory = AxiosResponseFactoryBuilder(Factory);
export const StubResourceRecordFactory =
    StubResourceRecordFactoryBuilder(Factory);

// #endregion  Factory Builders
