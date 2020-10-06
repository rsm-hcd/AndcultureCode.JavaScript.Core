import { ResultErrorRecord } from "../view-models/result-error-record";
interface PagedResult<T> {
    errors?: ResultErrorRecord[];
    resultObject?: T[];
    rowCount: number;
}
export { PagedResult };
