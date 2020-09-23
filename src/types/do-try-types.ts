import { ResultRecord } from "../view-models/result-record";

// -----------------------------------------------------------------------------------------
// #region Types
// -----------------------------------------------------------------------------------------

type AsyncWorkload<T> = () => Promise<T>;
type SyncWorkload<T> = () => T;
type CatchHandler<T> = (result?: ResultRecord<T>, error?: any) => void;
type FinallyHandler = () => void;

// #endregion Types

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { AsyncWorkload, SyncWorkload, CatchHandler, FinallyHandler };

// #endregion Exports
