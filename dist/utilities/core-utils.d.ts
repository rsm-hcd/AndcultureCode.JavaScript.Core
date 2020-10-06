import _ from "lodash";
export declare const CoreUtils: {
    bindAll: <T>(object: T, ...methodNames: _.Many<string>[]) => T;
    curry: _.Curry;
    enumToArray: <TEnum = any>(enumObject: any) => TEnum[];
    getRandomEnum: <TEnum_1 = any>(enumObject: any, excludeElement?: TEnum_1 | undefined) => TEnum_1;
    memoize: {
        <T_1 extends (...args: any[]) => any>(func: T_1, resolver?: ((...args: any[]) => any) | undefined): T_1 & _.MemoizedFunction;
        Cache: _.MapCacheConstructor;
    };
    merge: {
        <TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
        <TObject_1, TSource1, TSource2>(object: TObject_1, source1: TSource1, source2: TSource2): TObject_1 & TSource1 & TSource2;
        <TObject_2, TSource1_1, TSource2_1, TSource3>(object: TObject_2, source1: TSource1_1, source2: TSource2_1, source3: TSource3): TObject_2 & TSource1_1 & TSource2_1 & TSource3;
        <TObject_3, TSource1_2, TSource2_2, TSource3_1, TSource4>(object: TObject_3, source1: TSource1_2, source2: TSource2_2, source3: TSource3_1, source4: TSource4): TObject_3 & TSource1_2 & TSource2_2 & TSource3_1 & TSource4;
        (object: any, ...otherArgs: any[]): any;
    };
    numericEnumToPojo: (enumObject: any) => {};
    objectToArray: (object: any) => any[];
    range: {
        (start: number, end?: number | undefined, step?: number | undefined): number[];
        (end: number, index: string | number, guard: object): number[];
    };
    sleep: (milliseconds: number, debug?: boolean) => Promise<unknown>;
    sleepSync: (milliseconds: number) => void;
    throttle: <T_2 extends (...args: any[]) => any>(func: T_2, wait?: number | undefined, options?: _.ThrottleSettings | undefined) => T_2 & _.Cancelable;
    timer: (name: string) => {
        /**
         * Stops the timer and returns elapsed time in milliseconds
         * @param log Optional flag if you'd like the timer to log to the console
         */
        stop(log?: boolean | undefined): number;
    };
    times: {
        <TResult>(n: number, iteratee: (num: number) => TResult): TResult[];
        (n: number): number[];
    };
};
