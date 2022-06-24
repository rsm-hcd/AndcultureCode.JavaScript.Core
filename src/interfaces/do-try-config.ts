import { CatchResultHandler } from "../types/catch-result-handler";

interface DoTryConfig {
    /**
     * A default handler that will always run on error, if configured,
     * even if a `catch()` does not exist in the call chain.
     * This is useful for adding default error handling in the
     * development environment, such as `console.error(err)`.
     */
    defaultErrorHandler?: CatchResultHandler<any>;
}

export { DoTryConfig };
