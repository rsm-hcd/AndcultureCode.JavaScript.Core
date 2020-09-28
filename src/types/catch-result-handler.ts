import { ResultRecord } from "../view-models/result-record";

/**
 * Handler for a typed error ResultRecord, or any type if a Javascript error occurred.
 */
type CatchResultHandler<T> = (result?: ResultRecord<T>, error?: any) => void;

export { CatchResultHandler };
