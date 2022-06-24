import { ResultRecord } from "../view-models/result-record";
import { DoTryConfig } from "../interfaces/do-try-config";
import { AsyncWorkload } from "../types/async-workload";
import { CatchResultHandler } from "../types/catch-result-handler";
import { FinallyHandler } from "../types/finally-handler";
import { SyncWorkload } from "../types/sync-workload";

// -----------------------------------------------------------------------------------------
// #region Do
// -----------------------------------------------------------------------------------------

/**
 * Utility class to be able to use strong typing in a catch handler.
 * the Do.catch method takes a callback where the parameters are:
 * - result?: Result<TResourceType> -- if it's an error from the server, will not be null
 * - error?: any -- if it's a Javascript error, will not be null
 */
class Do<TResourceType, TReturnVal = void> {
    private promise: Promise<TReturnVal>;

    private static config: DoTryConfig = {
        defaultErrorHandler: undefined,
    };

    private constructor(workload: AsyncWorkload<TReturnVal>) {
        this.promise = workload().catch((err: any) => {
            if (err instanceof ResultRecord) {
                Do.config.defaultErrorHandler?.(err, undefined);
                throw err; // rethrow so it doesn't interrupt call chain
            }

            Do.config.defaultErrorHandler?.(undefined, err);
            throw err; // rethrow so it doesn't interrupt call chain
        });
    }

    /**
     * Handle errors from the workload.
     * If errors are in the shape of a {ResultRecord},
     * you will get a typed {ResultRecord} as the first parameter.
     * Otherwise, if it's an unknown error or Javascript error,
     * you'll get an {any} as the second parameter.
     * @param errorHandler handle errors, either as a {ResultRecord} or {any}
     * @returns this
     */
    public catch(
        errorHandler: CatchResultHandler<TResourceType>
    ): Do<TResourceType, TReturnVal> {
        this.promise = this.promise.catch((err: any) => {
            if (err instanceof ResultRecord) {
                errorHandler(err, undefined);
                return;
            }

            errorHandler(undefined, err);
        }) as Promise<TReturnVal>;

        return this;
    }

    /**
     * Sets the global configuration object for class {Do}
     * @param config the {DoTryConfig} object to set
     */
    public static configure(config: DoTryConfig): void {
        Do.config = config;
    }

    /**
     * Run some handler when the function completes, whether the
     * catch() was hit or not.
     * @param finallyHandler
     * @returns this
     */
    public finally(
        finallyHandler: FinallyHandler
    ): Do<TResourceType, TReturnVal> {
        this.promise = this.promise.finally(finallyHandler);
        return this;
    }

    /**
     * Awaits the internal promise being tracked by the Do instance,
     * and returns the result. This way, you can await a Do.try
     * chain, if you need to await for the result inside of another scope,
     * such as tests.
     * @returns the result of the promise.
     */
    public async getAwaiter(): Promise<TReturnVal> {
        return this.promise;
    }

    /**
     * Static factory method for Do class.
     * Start a workload (sync or async) that you can then
     * call .catch(catchHandler).finally(finallyHandler) on.
     * @param workload a sync or async method to wrap
     * @returns a new instance of Do
     */
    public static try<TResourceType, TReturnVal = void>(
        workload: AsyncWorkload<TReturnVal>
    ): Do<TResourceType, TReturnVal> {
        return new Do<TResourceType, TReturnVal>(workload);
    }
}

// #endregion Do

// -----------------------------------------------------------------------------------------
// #region DoSync
// -----------------------------------------------------------------------------------------

class DoSync<TResourceType, TReturnVal = void> {
    private readonly workload: SyncWorkload<TReturnVal>;
    private catchHandler?: (err: any) => void;
    private finallyHandler?: FinallyHandler;

    private static config: DoTryConfig = {
        defaultErrorHandler: undefined,
    };

    private constructor(workload: SyncWorkload<TReturnVal>) {
        this.workload = workload;
    }

    /**
     * Add a catch handler to the DoSync call chain.
     * If errors are in the shape of a {ResultRecord},
     * you will get a typed {ResultRecord} as the first parameter.
     * Otherwise, if it's an unknown error or Javascript error,
     * you'll get an {any} as the second parameter.
     * @param errorHandler handle errors, either as a {ResultRecord} or {any}
     */
    public catch(
        errorHandler: CatchResultHandler<TResourceType>
    ): DoSync<TResourceType, TReturnVal> {
        this.catchHandler = (err: any) => {
            if (err instanceof ResultRecord) {
                errorHandler(err, undefined);
                return;
            }

            errorHandler(undefined, err);
        };

        return this;
    }

    /**
     * Sets the global configuration for class {DySync}.
     * @param config the {DoTryConfig} object to set
     */
    public static configure(config: DoTryConfig): void {
        DoSync.config = config;
    }

    /**
     * Execute the entire DoSync call chain. For the synchronous version, i.e. DoSync,
     * you must manually call .execute() for the call chain to be executed.
     * @returns TReturnVal the value returned from the workload, or undefined if an error occurred.
     */
    public execute(): TReturnVal | undefined {
        try {
            return this.workload();
        } catch (e) {
            if (e instanceof ResultRecord) {
                DoSync.config.defaultErrorHandler?.(e, undefined);
                this.catchHandler?.(e);
                return;
            }

            DoSync.config.defaultErrorHandler?.(undefined, e);
            this.catchHandler?.(e);
        } finally {
            this.finallyHandler?.();
        }
    }

    /**
     * Run some handler when the function completes, whether the
     * catch() was hit or not.
     * @param finallyHandler
     * @returns this
     */
    public finally(
        finallyHandler: FinallyHandler
    ): DoSync<TResourceType, TReturnVal> {
        this.finallyHandler = finallyHandler;
        return this;
    }

    /**
     * Static factory method for DoSync. Creates a new DoSync
     * with the given workload.
     * @param workload
     */
    public static try<TResourceType, TReturnVal = void>(
        workload: SyncWorkload<TReturnVal>
    ) {
        return new DoSync<TResourceType, TReturnVal>(workload);
    }
}

// #endregion DoSync

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { Do, DoSync };

// #endregion Exports
