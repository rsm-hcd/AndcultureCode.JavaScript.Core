import { LocalizationUtils } from "./localization-utils";
import { StringUtils } from "./string-utils";
import axios, { AxiosResponse } from "axios";
import { ServiceResponse } from "../interfaces/service-response";
import { Result } from "../interfaces/result";
import { ResultRecord } from "../view-models/result-record";
import { PagedResult } from "../interfaces/paged-result";
import { HttpHeader } from "../enumerations/http-header";
import { ContentType } from "../enumerations/content-type";
import { CollectionUtils } from "./collection-utils";

// -----------------------------------------------------------------------------------------
// #region Variables
// -----------------------------------------------------------------------------------------

let _currentCultureCode: string;
const _defaultApiUrl = "/api/v1";

// #endregion Variables

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

/**
 * Configures global service properties for your application
 * @param cultureCode Current culture code of the application
 * @param onApiResponseError Global handler called whenever there is an erroneous API response
 * @param onApiResponseSuccess Global handler called whenever there is a successful API response
 */
const _configure = (
    cultureCode?: string,
    onApiResponseError?: (error: any) => Promise<unknown>,
    onApiResponseSuccess?: (response: AxiosResponse) => AxiosResponse<any>
) => {
    _configureCultureCode(cultureCode);
    _configureHeaders();
    _configureInterceptors(onApiResponseError, onApiResponseSuccess);
};

/**
 * Configure application's services for the provided culture
 * @param cultureCode Requested RFC-4646 language code
 * @param apiUrl Application's base api url (hopefully versioned)
 */
const _configureCultureCode = (
    cultureCode?: string,
    apiUrl: string = _defaultApiUrl
) => {
    if (StringUtils.isEmpty(cultureCode)) {
        cultureCode = LocalizationUtils.defaultCultureCode();
    }

    if (_currentCultureCode === cultureCode) {
        return;
    }

    _currentCultureCode = cultureCode!;

    axios.defaults.baseURL = `/${_currentCultureCode.toLowerCase()}${apiUrl}`;
};

/**
 * Configure axios HTTP headers
 */
const _configureHeaders = () => {
    axios.defaults.headers.post[HttpHeader.Accept] = ContentType.Json;
    axios.defaults.headers.post[HttpHeader.ContentType] = ContentType.Json;
    axios.defaults.headers.put[HttpHeader.Accept] = ContentType.Json;
    axios.defaults.headers.put[HttpHeader.ContentType] = ContentType.Json;
};

/**
 * Configures axios global API interceptors
 * @param onApiResponseError
 * @param onApiResponseSuccess
 */
const _configureInterceptors = (
    onApiResponseError?: (error: any) => Promise<unknown>,
    onApiResponseSuccess?: (response: AxiosResponse) => AxiosResponse<any>
) => {
    if (onApiResponseError == null && onApiResponseSuccess == null) {
        return;
    }

    axios.interceptors.response.use(onApiResponseSuccess, onApiResponseError);
};

/**
 * Translates axios specific data response to a more generic ServiceResponse
 * type for consumption throughout the system
 */
const _mapAxiosResponse = <TRecord>(
    recordType: { new (props: Partial<TRecord>): TRecord },
    axiosResponse: AxiosResponse<Result<TRecord>>
): ServiceResponse<TRecord> => {
    if (axiosResponse == null) {
        return null!;
    }

    // Ensure result data is wrapped within a record
    let resultObject;
    if (axiosResponse.data?.resultObject != null) {
        resultObject = new recordType(axiosResponse.data.resultObject);
        axiosResponse.data.resultObject = resultObject;
    }

    return {
        result: new ResultRecord<TRecord>(axiosResponse.data),
        resultObject: resultObject,
        resultObjects: [],
        rowCount: 1,
        status: axiosResponse.status,
    };
};

/**
 * Translates axios specific data responses to a more generic ServiceResponse
 * type for consumption throughout the system
 */
const _mapPagedAxiosResponse = <TRecord>(
    recordType: { new (props: Partial<TRecord>): TRecord },
    axiosResponse: AxiosResponse<PagedResult<TRecord>>
): ServiceResponse<TRecord> => {
    if (axiosResponse == null) {
        return null!;
    }
    const { data } = axiosResponse;

    // Ensure result data is wrapped within records
    let resultObjects: Array<TRecord> = [];
    let rowCount = 0;
    if (CollectionUtils.hasValues(data?.resultObject)) {
        resultObjects = data.resultObject!.map((r: any) => new recordType(r));

        // For now, record rowCount as the number of resultObjects we got back. We'll check the
        // response for a rowCount of the total query set if the value was returned.
        rowCount = resultObjects.length;
    }

    if (data?.rowCount != null) {
        rowCount = data.rowCount;
    }

    return {
        results: new ResultRecord<TRecord[]>(data),
        resultObjects: resultObjects,
        rowCount: rowCount,
        status: axiosResponse.status,
    };
};

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export const ServiceUtils = {
    configure: _configure,
    configureCultureCode: _configureCultureCode,
    mapAxiosResponse: _mapAxiosResponse,
    mapPagedAxiosResponse: _mapPagedAxiosResponse,
};

// #endregion Exports
