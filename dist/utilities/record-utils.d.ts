import { Constructor } from "../types/constructor";
declare const RecordUtils: {
    ensureRecord: <T>(maybeRecord: any, record: Constructor<T>) => T;
    isRecord: <T_1>(maybeRecord: any, record: Constructor<T_1>) => boolean;
};
export { RecordUtils };
