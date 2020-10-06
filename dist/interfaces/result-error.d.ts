import { ErrorType } from "../enumerations/error-type";
interface ResultError {
    key?: string;
    message?: string;
    type?: ErrorType;
}
export { ResultError };
