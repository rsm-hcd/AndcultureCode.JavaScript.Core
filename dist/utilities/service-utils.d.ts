import { AxiosResponse } from "axios";
import { ServiceResponse } from "../interfaces/service-response";
import { Result } from "../interfaces/result";
import { PagedResult } from "../interfaces/paged-result";
export declare const ServiceUtils: {
    configure: (cultureCode?: string | undefined, onApiResponseError?: ((error: any) => Promise<unknown>) | undefined, onApiResponseSuccess?: ((response: AxiosResponse<any>) => AxiosResponse<any>) | undefined) => void;
    configureCultureCode: (cultureCode?: string | undefined, apiUrl?: string) => void;
    mapAxiosResponse: <TRecord>(recordType: new (props: Partial<TRecord>) => TRecord, axiosResponse: AxiosResponse<Result<TRecord>>) => ServiceResponse<TRecord>;
    mapPagedAxiosResponse: <TRecord_1>(recordType: new (props: Partial<TRecord_1>) => TRecord_1, axiosResponse: AxiosResponse<PagedResult<TRecord_1>>) => ServiceResponse<TRecord_1>;
};
