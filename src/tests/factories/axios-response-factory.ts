import { Factory } from "rosie";
import { FactoryType } from "./factory-type";
import { AxiosResponse } from "axios";

// -----------------------------------------------------------------------------------------
// #region Factory
// -----------------------------------------------------------------------------------------

const AxiosResponseFactory = Factory.define<AxiosResponse>(
    FactoryType.AxiosResponse
)
    .sequence("status", () => 200)
    .sequence("statusText", () => "OK");

// #endregion Factory

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export { AxiosResponseFactory };

// #endregion Export
