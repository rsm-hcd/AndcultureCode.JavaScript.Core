import { ResultRecord } from "../view-models/result-record";

// -----------------------------------------------------------------------------------------
// #region Types
// -----------------------------------------------------------------------------------------

type AsyncWorkload<T> = () => Promise<T>;
type SyncWorkload<T> = () => T;
type CatchHandler<T> = (result?: ResultRecord<T>, error?: any) => void;
type FinallyHandler = () => void;

interface DoTryConfig {
    /**
     * A default handler that will always run on error, if configured,
     * even if a `catch()` does not exist in the call chain.
     * This is useful for adding default error handling in the
     * development environment, such as `console.error(err)`.
     */
    defaultErrorHandler?: CatchHandler<any>;
}

// #endregion Types

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export {
    AsyncWorkload,
    CatchHandler,
    DoTryConfig,
    FinallyHandler,
    SyncWorkload,
};

// #endregion Exports
