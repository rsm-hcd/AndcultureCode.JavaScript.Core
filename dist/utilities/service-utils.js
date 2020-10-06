"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var localization_utils_1 = require("./localization-utils");
var string_utils_1 = require("./string-utils");
var axios_1 = __importDefault(require("axios"));
var result_record_1 = require("../view-models/result-record");
var http_header_1 = require("../enumerations/http-header");
var content_type_1 = require("../enumerations/content-type");
var collection_utils_1 = require("./collection-utils");
// -----------------------------------------------------------------------------------------
// #region Variables
// -----------------------------------------------------------------------------------------
var _currentCultureCode;
var _defaultApiUrl = "/api/v1";
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
var _configure = function (cultureCode, onApiResponseError, onApiResponseSuccess) {
    _configureCultureCode(cultureCode);
    _configureHeaders();
    _configureInterceptors(onApiResponseError, onApiResponseSuccess);
};
/**
 * Configure application's services for the provided culture
 * @param cultureCode Requested RFC-4646 language code
 * @param apiUrl Application's base api url (hopefully versioned)
 */
var _configureCultureCode = function (cultureCode, apiUrl) {
    if (apiUrl === void 0) { apiUrl = _defaultApiUrl; }
    if (string_utils_1.StringUtils.isEmpty(cultureCode)) {
        cultureCode = localization_utils_1.LocalizationUtils.defaultCultureCode();
    }
    if (_currentCultureCode === cultureCode) {
        return;
    }
    _currentCultureCode = cultureCode;
    axios_1.default.defaults.baseURL = "/" + _currentCultureCode.toLowerCase() + apiUrl;
};
/**
 * Configure axios HTTP headers
 */
var _configureHeaders = function () {
    axios_1.default.defaults.headers.post[http_header_1.HttpHeader.Accept] = content_type_1.ContentType.Json;
    axios_1.default.defaults.headers.post[http_header_1.HttpHeader.ContentType] = content_type_1.ContentType.Json;
    axios_1.default.defaults.headers.put[http_header_1.HttpHeader.Accept] = content_type_1.ContentType.Json;
    axios_1.default.defaults.headers.put[http_header_1.HttpHeader.ContentType] = content_type_1.ContentType.Json;
};
/**
 * Configures axios global API interceptors
 * @param onApiResponseError
 * @param onApiResponseSuccess
 */
var _configureInterceptors = function (onApiResponseError, onApiResponseSuccess) {
    if (onApiResponseError == null && onApiResponseSuccess == null) {
        return;
    }
    axios_1.default.interceptors.response.use(onApiResponseSuccess, onApiResponseError);
};
/**
 * Translates axios specific data response to a more generic ServiceResponse
 * type for consumption throughout the system
 */
var _mapAxiosResponse = function (recordType, axiosResponse) {
    var _a;
    if (axiosResponse == null) {
        return null;
    }
    // Ensure result data is wrapped within a record
    var resultObject;
    if (((_a = axiosResponse.data) === null || _a === void 0 ? void 0 : _a.resultObject) != null) {
        resultObject = new recordType(axiosResponse.data.resultObject);
        axiosResponse.data.resultObject = resultObject;
    }
    return {
        result: new result_record_1.ResultRecord(axiosResponse.data),
        resultObject: resultObject,
        rowCount: 1,
        status: axiosResponse.status,
    };
};
/**
 * Translates axios specific data responses to a more generic ServiceResponse
 * type for consumption throughout the system
 */
var _mapPagedAxiosResponse = function (recordType, axiosResponse) {
    if (axiosResponse == null) {
        return null;
    }
    var data = axiosResponse.data;
    // Ensure result data is wrapped within records
    var resultObjects;
    var rowCount = 0;
    if (collection_utils_1.CollectionUtils.hasValues(data === null || data === void 0 ? void 0 : data.resultObject)) {
        resultObjects = data.resultObject.map(function (r) { return new recordType(r); });
        // For now, record rowCount as the number of resultObjects we got back. We'll check the
        // response for a rowCount of the total query set if the value was returned.
        rowCount = resultObjects.length;
    }
    if ((data === null || data === void 0 ? void 0 : data.rowCount) != null) {
        rowCount = data.rowCount;
    }
    return {
        results: new result_record_1.ResultRecord(data),
        resultObjects: resultObjects,
        rowCount: rowCount,
        status: axiosResponse.status,
    };
};
// #endregion Functions
// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------
exports.ServiceUtils = {
    configure: _configure,
    configureCultureCode: _configureCultureCode,
    mapAxiosResponse: _mapAxiosResponse,
    mapPagedAxiosResponse: _mapPagedAxiosResponse,
};
// #endregion Exports
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2VydmljZS11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDJEQUF5RDtBQUN6RCwrQ0FBNkM7QUFDN0MsZ0RBQTZDO0FBRzdDLDhEQUE0RDtBQUU1RCwyREFBeUQ7QUFDekQsNkRBQTJEO0FBQzNELHVEQUFxRDtBQUVyRCw0RkFBNEY7QUFDNUYsb0JBQW9CO0FBQ3BCLDRGQUE0RjtBQUU1RixJQUFJLG1CQUEyQixDQUFDO0FBQ2hDLElBQU0sY0FBYyxHQUFHLFNBQVMsQ0FBQztBQUVqQyx1QkFBdUI7QUFFdkIsNEZBQTRGO0FBQzVGLG9CQUFvQjtBQUNwQiw0RkFBNEY7QUFFNUY7Ozs7O0dBS0c7QUFDSCxJQUFNLFVBQVUsR0FBRyxVQUNmLFdBQW9CLEVBQ3BCLGtCQUFxRCxFQUNyRCxvQkFBc0U7SUFFdEUscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixzQkFBc0IsQ0FBQyxrQkFBa0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3JFLENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDSCxJQUFNLHFCQUFxQixHQUFHLFVBQzFCLFdBQW9CLEVBQ3BCLE1BQStCO0lBQS9CLHVCQUFBLEVBQUEsdUJBQStCO0lBRS9CLElBQUksMEJBQVcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7UUFDbEMsV0FBVyxHQUFHLHNDQUFpQixDQUFDLGtCQUFrQixFQUFFLENBQUM7S0FDeEQ7SUFFRCxJQUFJLG1CQUFtQixLQUFLLFdBQVcsRUFBRTtRQUNyQyxPQUFPO0tBQ1Y7SUFFRCxtQkFBbUIsR0FBRyxXQUFZLENBQUM7SUFFbkMsZUFBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsTUFBSSxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsR0FBRyxNQUFRLENBQUM7QUFDOUUs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UUFDbEIsTUFBTSxFQUFFLGFBQWEsQ0FBQyxNQUFNO0tBQy9CLENBQUM7QUFDTixDQUFDLENBQUM7QUFFRix1QkFBdUI7QUFFdkIsNEZBQTRGO0FBQzVGLGtCQUFrQjtBQUNsQiw0RkFBNEY7QUFFL0UsUUFBQSxZQUFZLEdBQUc7SUFDeEIsU0FBUyxFQUFFLFVBQVU7SUFDckIsb0JBQW9CLEVBQUUscUJBQXFCO0lBQzNDLGdCQUFnQixFQUFFLGlCQUFpQjtJQUNuQyxxQkFBcUIsRUFBRSxzQkFBc0I7Q0FDaEQsQ0FBQztBQUVGLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2FsaXphdGlvblV0aWxzIH0gZnJvbSBcIi4vbG9jYWxpemF0aW9uLXV0aWxzXCI7XHJcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4vc3RyaW5nLXV0aWxzXCI7XHJcbmltcG9ydCBheGlvcywgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IFNlcnZpY2VSZXNwb25zZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3NlcnZpY2UtcmVzcG9uc2VcIjtcclxuaW1wb3J0IHsgUmVzdWx0IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvcmVzdWx0XCI7XHJcbmltcG9ydCB7IFJlc3VsdFJlY29yZCB9IGZyb20gXCIuLi92aWV3LW1vZGVscy9yZXN1bHQtcmVjb3JkXCI7XHJcbmltcG9ydCB7IFBhZ2VkUmVzdWx0IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvcGFnZWQtcmVzdWx0XCI7XHJcbmltcG9ydCB7IEh0dHBIZWFkZXIgfSBmcm9tIFwiLi4vZW51bWVyYXRpb25zL2h0dHAtaGVhZGVyXCI7XHJcbmltcG9ydCB7IENvbnRlbnRUeXBlIH0gZnJvbSBcIi4uL2VudW1lcmF0aW9ucy9jb250ZW50LXR5cGVcIjtcclxuaW1wb3J0IHsgQ29sbGVjdGlvblV0aWxzIH0gZnJvbSBcIi4vY29sbGVjdGlvbi11dGlsc1wiO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gI3JlZ2lvbiBWYXJpYWJsZXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmxldCBfY3VycmVudEN1bHR1cmVDb2RlOiBzdHJpbmc7XHJcbmNvbnN0IF9kZWZhdWx0QXBpVXJsID0gXCIvYXBpL3YxXCI7XHJcblxyXG4vLyAjZW5kcmVnaW9uIFZhcmlhYmxlc1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gI3JlZ2lvbiBGdW5jdGlvbnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8qKlxyXG4gKiBDb25maWd1cmVzIGdsb2JhbCBzZXJ2aWNlIHByb3BlcnRpZXMgZm9yIHlvdXIgYXBwbGljYXRpb25cclxuICogQHBhcmFtIGN1bHR1cmVDb2RlIEN1cnJlbnQgY3VsdHVyZSBjb2RlIG9mIHRoZSBhcHBsaWNhdGlvblxyXG4gKiBAcGFyYW0gb25BcGlSZXNwb25zZUVycm9yIEdsb2JhbCBoYW5kbGVyIGNhbGxlZCB3aGVuZXZlciB0aGVyZSBpcyBhbiBlcnJvbmVvdXMgQVBJIHJlc3BvbnNlXHJcbiAqIEBwYXJhbSBvbkFwaVJlc3BvbnNlU3VjY2VzcyBHbG9iYWwgaGFuZGxlciBjYWxsZWQgd2hlbmV2ZXIgdGhlcmUgaXMgYSBzdWNjZXNzZnVsIEFQSSByZXNwb25zZVxyXG4gKi9cclxuY29uc3QgX2NvbmZpZ3VyZSA9IChcclxuICAgIGN1bHR1cmVDb2RlPzogc3RyaW5nLFxyXG4gICAgb25BcGlSZXNwb25zZUVycm9yPzogKGVycm9yOiBhbnkpID0+IFByb21pc2U8dW5rbm93bj4sXHJcbiAgICBvbkFwaVJlc3BvbnNlU3VjY2Vzcz86IChyZXNwb25zZTogQXhpb3NSZXNwb25zZSkgPT4gQXhpb3NSZXNwb25zZTxhbnk+XHJcbikgPT4ge1xyXG4gICAgX2NvbmZpZ3VyZUN1bHR1cmVDb2RlKGN1bHR1cmVDb2RlKTtcclxuICAgIF9jb25maWd1cmVIZWFkZXJzKCk7XHJcbiAgICBfY29uZmlndXJlSW50ZXJjZXB0b3JzKG9uQXBpUmVzcG9uc2VFcnJvciwgb25BcGlSZXNwb25zZVN1Y2Nlc3MpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbmZpZ3VyZSBhcHBsaWNhdGlvbidzIHNlcnZpY2VzIGZvciB0aGUgcHJvdmlkZWQgY3VsdHVyZVxyXG4gKiBAcGFyYW0gY3VsdHVyZUNvZGUgUmVxdWVzdGVkIFJGQy00NjQ2IGxhbmd1YWdlIGNvZGVcclxuICogQHBhcmFtIGFwaVVybCBBcHBsaWNhdGlvbidzIGJhc2UgYXBpIHVybCAoaG9wZWZ1bGx5IHZlcnNpb25lZClcclxuICovXHJcbmNvbnN0IF9jb25maWd1cmVDdWx0dXJlQ29kZSA9IChcclxuICAgIGN1bHR1cmVDb2RlPzogc3RyaW5nLFxyXG4gICAgYXBpVXJsOiBzdHJpbmcgPSBfZGVmYXVsdEFwaVVybFxyXG4pID0+IHtcclxuICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KGN1bHR1cmVDb2RlKSkge1xyXG4gICAgICAgIGN1bHR1cmVDb2RlID0gTG9jYWxpemF0aW9uVXRpbHMuZGVmYXVsdEN1bHR1cmVDb2RlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKF9jdXJyZW50Q3VsdHVyZUNvZGUgPT09IGN1bHR1cmVDb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIF9jdXJyZW50Q3VsdHVyZUNvZGUgPSBjdWx0dXJlQ29kZSE7XHJcblxyXG4gICAgYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGAvJHtfY3VycmVudEN1bHR1cmVDb2RlLnRvTG93ZXJDYXNlKCl9JHthcGlVcmx9YDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb25maWd1cmUgYXhpb3MgSFRUUCBoZWFkZXJzXHJcbiAqL1xyXG5jb25zdCBfY29uZmlndXJlSGVhZGVycyA9ICgpID0+IHtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFtIdHRwSGVhZGVyLkFjY2VwdF0gPSBDb250ZW50VHlwZS5Kc29uO1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0W0h0dHBIZWFkZXIuQ29udGVudFR5cGVdID0gQ29udGVudFR5cGUuSnNvbjtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucHV0W0h0dHBIZWFkZXIuQWNjZXB0XSA9IENvbnRlbnRUeXBlLkpzb247XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLnB1dFtIdHRwSGVhZGVyLkNvbnRlbnRUeXBlXSA9IENvbnRlbnRUeXBlLkpzb247XHJcbn07XHJcblxyXG4vKipcclxuICogQ29uZmlndXJlcyBheGlvcyBnbG9iYWwgQVBJIGludGVyY2VwdG9yc1xyXG4gKiBAcGFyYW0gb25BcGlSZXNwb25zZUVycm9yXHJcbiAqIEBwYXJhbSBvbkFwaVJlc3BvbnNlU3VjY2Vzc1xyXG4gKi9cclxuY29uc3QgX2NvbmZpZ3VyZUludGVyY2VwdG9ycyA9IChcclxuICAgIG9uQXBpUmVzcG9uc2VFcnJvcj86IChlcnJvcjogYW55KSA9PiBQcm9taXNlPHVua25vd24+LFxyXG4gICAgb25BcGlSZXNwb25zZVN1Y2Nlc3M/OiAocmVzcG9uc2U6IEF4aW9zUmVzcG9uc2UpID0+IEF4aW9zUmVzcG9uc2U8YW55PlxyXG4pID0+IHtcclxuICAgIGlmIChvbkFwaVJlc3BvbnNlRXJyb3IgPT0gbnVsbCAmJiBvbkFwaVJlc3BvbnNlU3VjY2VzcyA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2Uob25BcGlSZXNwb25zZVN1Y2Nlc3MsIG9uQXBpUmVzcG9uc2VFcnJvcik7XHJcbn07XHJcblxyXG4vKipcclxuICogVHJhbnNsYXRlcyBheGlvcyBzcGVjaWZpYyBkYXRhIHJlc3BvbnNlIHRvIGEgbW9yZSBnZW5lcmljIFNlcnZpY2VSZXNwb25zZVxyXG4gKiB0eXBlIGZvciBjb25zdW1wdGlvbiB0aHJvdWdob3V0IHRoZSBzeXN0ZW1cclxuICovXHJcbmNvbnN0IF9tYXBBeGlvc1Jlc3BvbnNlID0gPFRSZWNvcmQ+KFxyXG4gICAgcmVjb3JkVHlwZTogeyBuZXcgKHByb3BzOiBQYXJ0aWFsPFRSZWNvcmQ+KTogVFJlY29yZCB9LFxyXG4gICAgYXhpb3NSZXNwb25zZTogQXhpb3NSZXNwb25zZTxSZXN1bHQ8VFJlY29yZD4+XHJcbik6IFNlcnZpY2VSZXNwb25zZTxUUmVjb3JkPiA9PiB7XHJcbiAgICBpZiAoYXhpb3NSZXNwb25zZSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGwhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEVuc3VyZSByZXN1bHQgZGF0YSBpcyB3cmFwcGVkIHdpdGhpbiBhIHJlY29yZFxyXG4gICAgbGV0IHJlc3VsdE9iamVjdDtcclxuICAgIGlmIChheGlvc1Jlc3BvbnNlLmRhdGE/LnJlc3VsdE9iamVjdCAhPSBudWxsKSB7XHJcbiAgICAgICAgcmVzdWx0T2JqZWN0ID0gbmV3IHJlY29yZFR5cGUoYXhpb3NSZXNwb25zZS5kYXRhLnJlc3VsdE9iamVjdCk7XHJcbiAgICAgICAgYXhpb3NSZXNwb25zZS5kYXRhLnJlc3VsdE9iamVjdCA9IHJlc3VsdE9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3VsdDogbmV3IFJlc3VsdFJlY29yZDxUUmVjb3JkPihheGlvc1Jlc3BvbnNlLmRhdGEpLFxyXG4gICAgICAgIHJlc3VsdE9iamVjdDogcmVzdWx0T2JqZWN0LFxyXG4gICAgICAgIHJvd0NvdW50OiAxLFxyXG4gICAgICAgIHN0YXR1czogYXhpb3NSZXNwb25zZS5zdGF0dXMsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRyYW5zbGF0ZXMgYXhpb3Mgc3BlY2lmaWMgZGF0YSByZXNwb25zZXMgdG8gYSBtb3JlIGdlbmVyaWMgU2VydmljZVJlc3BvbnNlXHJcbiAqIHR5cGUgZm9yIGNvbnN1bXB0aW9uIHRocm91Z2hvdXQgdGhlIHN5c3RlbVxyXG4gKi9cclxuY29uc3QgX21hcFBhZ2VkQXhpb3NSZXNwb25zZSA9IDxUUmVjb3JkPihcclxuICAgIHJlY29yZFR5cGU6IHsgbmV3IChwcm9wczogUGFydGlhbDxUUmVjb3JkPik6IFRSZWNvcmQgfSxcclxuICAgIGF4aW9zUmVzcG9uc2U6IEF4aW9zUmVzcG9uc2U8UGFnZWRSZXN1bHQ8VFJlY29yZD4+XHJcbik6IFNlcnZpY2VSZXNwb25zZTxUUmVjb3JkPiA9PiB7XHJcbiAgICBpZiAoYXhpb3NSZXNwb25zZSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGwhO1xyXG4gICAgfVxyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBheGlvc1Jlc3BvbnNlO1xyXG5cclxuICAgIC8vIEVuc3VyZSByZXN1bHQgZGF0YSBpcyB3cmFwcGVkIHdpdGhpbiByZWNvcmRzXHJcbiAgICBsZXQgcmVzdWx0T2JqZWN0cztcclxuICAgIGxldCByb3dDb3VudCA9IDA7XHJcbiAgICBpZiAoQ29sbGVjdGlvblV0aWxzLmhhc1ZhbHVlcyhkYXRhPy5yZXN1bHRPYmplY3QpKSB7XHJcbiAgICAgICAgcmVzdWx0T2JqZWN0cyA9IGRhdGEucmVzdWx0T2JqZWN0IS5tYXAoKHI6IGFueSkgPT4gbmV3IHJlY29yZFR5cGUocikpO1xyXG5cclxuICAgICAgICAvLyBGb3Igbm93LCByZWNvcmQgcm93Q291bnQgYXMgdGhlIG51bWJlciBvZiByZXN1bHRPYmplY3RzIHdlIGdvdCBiYWNrLiBXZSdsbCBjaGVjayB0aGVcclxuICAgICAgICAvLyByZXNwb25zZSBmb3IgYSByb3dDb3VudCBvZiB0aGUgdG90YWwgcXVlcnkgc2V0IGlmIHRoZSB2YWx1ZSB3YXMgcmV0dXJuZWQuXHJcbiAgICAgICAgcm93Q291bnQgPSByZXN1bHRPYmplY3RzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YT8ucm93Q291bnQgIT0gbnVsbCkge1xyXG4gICAgICAgIHJvd0NvdW50ID0gZGF0YS5yb3dDb3VudDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3VsdHM6IG5ldyBSZXN1bHRSZWNvcmQ8VFJlY29yZFtdPihkYXRhKSxcclxuICAgICAgICByZXN1bHRPYmplY3RzOiByZXN1bHRPYmplY3RzLFxyXG4gICAgICAgIHJvd0NvdW50OiByb3dDb3VudCxcclxuICAgICAgICBzdGF0dXM6IGF4aW9zUmVzcG9uc2Uuc3RhdHVzLFxyXG4gICAgfTtcclxufTtcclxuXHJcbi8vICNlbmRyZWdpb24gRnVuY3Rpb25zXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAjcmVnaW9uIEV4cG9ydHNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmV4cG9ydCBjb25zdCBTZXJ2aWNlVXRpbHMgPSB7XHJcbiAgICBjb25maWd1cmU6IF9jb25maWd1cmUsXHJcbiAgICBjb25maWd1cmVDdWx0dXJlQ29kZTogX2NvbmZpZ3VyZUN1bHR1cmVDb2RlLFxyXG4gICAgbWFwQXhpb3NSZXNwb25zZTogX21hcEF4aW9zUmVzcG9uc2UsXHJcbiAgICBtYXBQYWdlZEF4aW9zUmVzcG9uc2U6IF9tYXBQYWdlZEF4aW9zUmVzcG9uc2UsXHJcbn07XHJcblxyXG4vLyAjZW5kcmVnaW9uIEV4cG9ydHNcclxuIl19