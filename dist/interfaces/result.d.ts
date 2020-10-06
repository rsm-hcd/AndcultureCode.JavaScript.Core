import { ResultErrorRecord } from "../view-models/result-error-record";
interface Result<T> {
    errors?: ResultErrorRecord[];
    resultObject?: T;
}
export { Result };
