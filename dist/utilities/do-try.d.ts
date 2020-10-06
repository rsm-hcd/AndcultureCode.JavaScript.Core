import { DoTryConfig } from "../interfaces/do-try-config";
import { AsyncWorkload } from "../types/async-workload";
import { CatchResultHandler } from "../types/catch-result-handler";
import { FinallyHandler } from "../types/finally-handler";
import { SyncWorkload } from "../types/sync-workload";
/**
 * Utility class to be able to use strong typing in a catch handler.
 * the Do.catch method takes a callback where the parameters are:
 * - result?: Result<TResourceType> -- if it's an error from the server, will not be null
 * - error?: any -- if it's a Javascript error, will not be null
 */
declare class Do<TResourceType, TReturnVal = void> {
    private promise;
    private static config;
    private constructor();
    /**
     * Handle errors from the workload.
     * If errors are in the shape of a {ResultRecord},
     * you will get a typed {ResultRecord} as the first parameter.
     * Otherwise, if it's an unknown error or Javascript error,
     * you'll get an {any} as the second parameter.
     * @param errorHandler handle errors, either as a {ResultRecord} or {any}
     * @returns this
     */
    catch(errorHandler: CatchResultHandler<TResourceType>): Do<TResourceType, TReturnVal>;
    /**
     * Sets the global configuration object for class {Do}
     * @param config the {DoTryConfig} object to set
     */
    static configure(config: DoTryConfig): void;
    /**
     * Run some handler when the function completes, whether the
     * catch() was hit or not.
     * @param finallyHandler
     * @returns this
     */
    finally(finallyHandler: FinallyHandler): Do<TResourceType, TReturnVal>;
    /**
     * Awaits the internal promise being tracked by the Do instance,
     * and returns the result. This way, you can await a Do.try
     * chain, if you need to await for the result inside of another scope,
     * such as tests.
     * @returns the result of the promise.
     */
    getAwaiter(): Promise<TReturnVal>;
    /**
     * Static factory method for Do class.
     * Start a workload (sync or async) that you can then
     * call .catch(catchHandler).finally(finallyHandler) on.
     * @param workload a sync or async method to wrap
     * @returns a new instance of Do
     */
    static try<TResourceType, TReturnVal = void>(workload: AsyncWorkload<TReturnVal>): Do<TResourceType, TReturnVal>;
}
declare class DoSync<TResourceType, TReturnVal = void> {
    private readonly workload;
    private catchHandler?;
    private finallyHandler?;
    private static config;
    private constructor();
    /**
     * Add a catch handler to the DoSync call chain.
     * If errors are in the shape of a {ResultRecord},
     * you will get a typed {ResultRecord} as the first parameter.
     * Otherwise, if it's an unknown error or Javascript error,
     * you'll get an {any} as the second parameter.
     * @param errorHandler handle errors, either as a {ResultRecord} or {any}
     */
    catch(errorHandler: CatchResultHandler<TResourceType>): DoSync<TResourceType, TReturnVal>;
    /**
     * Sets the global configuration for class {DySync}.
     * @param config the {DoTryConfig} object to set
     */
    static configure(config: DoTryConfig): void;
    /**
     * Execute the entire DoSync call chain. For the synchronous version, i.e. DoSync,
     * you must manually call .execute() for the call chain to be executed.
     * @returns TReturnVal the value returned from the workload, or undefined if an error occurred.
     */
    execute(): TReturnVal | undefined;
    /**
     * Run some handler when the function completes, whether the
     * catch() was hit or not.
     * @param finallyHandler
     * @returns this
     */
    finally(finallyHandler: FinallyHandler): DoSync<TResourceType, TReturnVal>;
    /**
     * Static factory method for DoSync. Creates a new DoSync
     * with the given workload.
     * @param workload
     */
    static try<TResourceType, TReturnVal = void>(workload: SyncWorkload<TReturnVal>): DoSync<TResourceType, TReturnVal>;
}
export { Do, DoSync };
