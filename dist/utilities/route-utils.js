"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var query_string_1 = __importDefault(require("query-string"));
// -----------------------------------------------------------------------------------------
// #region Constants
// -----------------------------------------------------------------------------------------
var _routeParamRegEx = /(:[a-z_-]*)/gi;
// #endregion Constants
// -----------------------------------------------------------------------------------------
// #region Private Methods
// -----------------------------------------------------------------------------------------
/**
 * Appends the supplied query params object as a query string to path. Even if path is null.
 * @param path Existing path (can be null)
 * @param queryParams Object to transform into query string
 */
var appendQueryParams = function (path, queryParams) {
    if (queryParams == null) {
        return path;
    }
    if (path == null) {
        path = "";
    }
    var queryString = new URLSearchParams(queryParams).toString();
    // If no query string could be parsed from the given query params, return the unmodified path.
    if (queryString.length === 0) {
        return path;
    }
    return path + "?" + queryString;
};
/**
 * Convenience method to get a Url from a RouteDefinition
 * @param path Route path template. Parameters in the path are denoted withed a colon `:id`
 * @param pathParams Object with keys matching supplied path template components
 */
var getUrl = function (path, pathParams) {
    return getUrlFromPath(path, pathParams);
};
/**
 * Constructs a url from a formatted route path.
 * @param path Route path template. Parameters in the path are denoted withed a colon `:id`
 * @param pathParams Object with keys matching supplied path template components
 * @param queryParams Object to get translated to the query string of the url
 */
var getUrlFromPath = function (path, pathParams, queryParams) {
    if (path == null) {
        return path;
    }
    if (pathParams != null) {
        path = replacePathParams(path, pathParams);
    }
    if (queryParams != null) {
        path = appendQueryParams(path, queryParams);
    }
    return path;
};
/**
 * Determines if supplied url is an absolute url
 * @param url
 */
var isAbsoluteUrl = function (url) {
    return new RegExp("^(?:[a-z]+:)?//", "i").test(url);
};
/**
 * Parse a query string and return an object of type T
 * @param queryString current query string
 * @param arrayFormat format to parse arrays from
 * @param parseNumbers convert numbers to number type from string
 * @param parseBooleans convert booleans to boolean type from string
 */
var queryStringToObject = function (queryString, arrayFormat, parseNumbers, parseBooleans) {
    if (arrayFormat === void 0) { arrayFormat = "index"; }
    if (parseNumbers === void 0) { parseNumbers = true; }
    if (parseBooleans === void 0) { parseBooleans = true; }
    return query_string_1.default.parse(queryString, {
        arrayFormat: arrayFormat,
        parseNumbers: parseNumbers,
        parseBooleans: parseBooleans,
    });
};
/**
 * Replace routing components in supplied path with keys and values
 * of supplied pathParams.
 * @param path Path containing routing components (format: ':key').
 * Throws an error if any components aren't found in the pathParams object.
 * @param pathParams Object to transform into the supplied path.
 */
var replacePathParams = function (path, pathParams) {
    if (pathParams == null || path == null) {
        return path;
    }
    return path.replace(_routeParamRegEx, function (a, b) {
        var value = pathParams[b.substring(1)];
        if (value != null) {
            return value;
        }
        console.error("routeUtils::getUrl cannot find value for path parameter " + a);
        return a;
    });
};
// #endregion Private Methods
// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------
exports.RouteUtils = {
    appendQueryParams: appendQueryParams,
    getUrl: getUrl,
    getUrlFromPath: getUrlFromPath,
    isAbsoluteUrl: isAbsoluteUrl,
    queryStringToObject: queryStringToObject,
    replacePathParams: replacePathParams,
};
// #endregion Exports
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbGl0aWVzL3JvdXRlLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOERBQXVDO0FBRXZDLDRGQUE0RjtBQUM1RixvQkFBb0I7QUFDcEIsNEZBQTRGO0FBRTVGLElBQU0sZ0JBQWdCLEdBQUcsZUFBZSxDQUFDO0FBRXpDLHVCQUF1QjtBQUV2Qiw0RkFBNEY7QUFDNUYsMEJBQTBCO0FBQzFCLDRGQUE0RjtBQUU1Rjs7OztHQUlHO0FBQ0gsSUFBTSxpQkFBaUIsR0FBRyxVQUFDLElBQVksRUFBRSxXQUFnQjtJQUNyRCxJQUFJLFdBQVcsSUFBSSxJQUFJLEVBQUU7UUFDckIsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUVELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtRQUNkLElBQUksR0FBRyxFQUFFLENBQUM7S0FDYjtJQUVELElBQU0sV0FBVyxHQUFHLElBQUksZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRWhFLDhGQUE4RjtJQUM5RixJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzFCLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFRCxPQUFVLElBQUksU0FBSSxXQUFhLENBQUM7QUFDcEMsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNILElBQU0sTUFBTSxHQUFHLFVBQUMsSUFBWSxFQUFFLFVBQWdCO0lBQzFDLE9BQU8sY0FBYyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUM7QUFFRjs7Ozs7R0FLRztBQUNILElBQU0sY0FBYyxHQUFHLFVBQUMsSUFBWSxFQUFFLFVBQWdCLEVBQUUsV0FBaUI7SUFDckUsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1FBQ2QsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUVELElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtRQUNwQixJQUFJLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0tBQzlDO0lBRUQsSUFBSSxXQUFXLElBQUksSUFBSSxFQUFFO1FBQ3JCLElBQUksR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDL0M7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFRjs7O0dBR0c7QUFDSCxJQUFNLGFBQWEsR0FBRyxVQUFDLEdBQVc7SUFDOUIsT0FBQSxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQTVDLENBQTRDLENBQUM7QUFFakQ7Ozs7OztHQU1HO0FBQ0gsSUFBTSxtQkFBbUIsR0FBRyxVQUN4QixXQUFtQixFQUNuQixXQUFvRCxFQUNwRCxZQUE0QixFQUM1QixhQUE2QjtJQUY3Qiw0QkFBQSxFQUFBLHFCQUFvRDtJQUNwRCw2QkFBQSxFQUFBLG1CQUE0QjtJQUM1Qiw4QkFBQSxFQUFBLG9CQUE2QjtJQUU3QixPQUFDLHNCQUFXLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtRQUM1QixXQUFXLGFBQUE7UUFDWCxZQUFZLGNBQUE7UUFDWixhQUFhLGVBQUE7S0FDaEIsQ0FBYztBQUpmLENBSWUsQ0FBQztBQUVwQjs7Ozs7O0dBTUc7QUFDSCxJQUFNLGlCQUFpQixHQUFHLFVBQUMsSUFBWSxFQUFFLFVBQWU7SUFDcEQsSUFBSSxVQUFVLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7UUFDcEMsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3ZDLElBQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFekMsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2YsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxPQUFPLENBQUMsS0FBSyxDQUNULDZEQUEyRCxDQUFHLENBQ2pFLENBQUM7UUFFRixPQUFPLENBQUMsQ0FBQztJQUNiLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBRUYsNkJBQTZCO0FBRTdCLDRGQUE0RjtBQUM1RixrQkFBa0I7QUFDbEIsNEZBQTRGO0FBRS9FLFFBQUEsVUFBVSxHQUFHO0lBQ3RCLGlCQUFpQixtQkFBQTtJQUNqQixNQUFNLFFBQUE7SUFDTixjQUFjLGdCQUFBO0lBQ2QsYUFBYSxlQUFBO0lBQ2IsbUJBQW1CLHFCQUFBO0lBQ25CLGlCQUFpQixtQkFBQTtDQUNwQixDQUFDO0FBRUYscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFF1ZXJ5U3RyaW5nIGZyb20gXCJxdWVyeS1zdHJpbmdcIjtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICNyZWdpb24gQ29uc3RhbnRzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jb25zdCBfcm91dGVQYXJhbVJlZ0V4ID0gLyg6W2Etel8tXSopL2dpO1xyXG5cclxuLy8gI2VuZHJlZ2lvbiBDb25zdGFudHNcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICNyZWdpb24gUHJpdmF0ZSBNZXRob2RzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vKipcclxuICogQXBwZW5kcyB0aGUgc3VwcGxpZWQgcXVlcnkgcGFyYW1zIG9iamVjdCBhcyBhIHF1ZXJ5IHN0cmluZyB0byBwYXRoLiBFdmVuIGlmIHBhdGggaXMgbnVsbC5cclxuICogQHBhcmFtIHBhdGggRXhpc3RpbmcgcGF0aCAoY2FuIGJlIG51bGwpXHJcbiAqIEBwYXJhbSBxdWVyeVBhcmFtcyBPYmplY3QgdG8gdHJhbnNmb3JtIGludG8gcXVlcnkgc3RyaW5nXHJcbiAqL1xyXG5jb25zdCBhcHBlbmRRdWVyeVBhcmFtcyA9IChwYXRoOiBzdHJpbmcsIHF1ZXJ5UGFyYW1zOiBhbnkpID0+IHtcclxuICAgIGlmIChxdWVyeVBhcmFtcyA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhdGggPT0gbnVsbCkge1xyXG4gICAgICAgIHBhdGggPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVBhcmFtcykudG9TdHJpbmcoKTtcclxuXHJcbiAgICAvLyBJZiBubyBxdWVyeSBzdHJpbmcgY291bGQgYmUgcGFyc2VkIGZyb20gdGhlIGdpdmVuIHF1ZXJ5IHBhcmFtcywgcmV0dXJuIHRoZSB1bm1vZGlmaWVkIHBhdGguXHJcbiAgICBpZiAocXVlcnlTdHJpbmcubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGAke3BhdGh9PyR7cXVlcnlTdHJpbmd9YDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gZ2V0IGEgVXJsIGZyb20gYSBSb3V0ZURlZmluaXRpb25cclxuICogQHBhcmFtIHBhdGggUm91dGUgcGF0aCB0ZW1wbGF0ZS4gUGFyYW1ldGVycyBpbiB0aGUgcGF0aCBhcmUgZGVub3RlZCB3aXRoZWQgYSBjb2xvbiBgOmlkYFxyXG4gKiBAcGFyYW0gcGF0aFBhcmFtcyBPYmplY3Qgd2l0aCBrZXlzIG1hdGNoaW5nIHN1cHBsaWVkIHBhdGggdGVtcGxhdGUgY29tcG9uZW50c1xyXG4gKi9cclxuY29uc3QgZ2V0VXJsID0gKHBhdGg6IHN0cmluZywgcGF0aFBhcmFtcz86IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIGdldFVybEZyb21QYXRoKHBhdGgsIHBhdGhQYXJhbXMpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbnN0cnVjdHMgYSB1cmwgZnJvbSBhIGZvcm1hdHRlZCByb3V0ZSBwYXRoLlxyXG4gKiBAcGFyYW0gcGF0aCBSb3V0ZSBwYXRoIHRlbXBsYXRlLiBQYXJhbWV0ZXJzIGluIHRoZSBwYXRoIGFyZSBkZW5vdGVkIHdpdGhlZCBhIGNvbG9uIGA6aWRgXHJcbiAqIEBwYXJhbSBwYXRoUGFyYW1zIE9iamVjdCB3aXRoIGtleXMgbWF0Y2hpbmcgc3VwcGxpZWQgcGF0aCB0ZW1wbGF0ZSBjb21wb25lbnRzXHJcbiAqIEBwYXJhbSBxdWVyeVBhcmFtcyBPYmplY3QgdG8gZ2V0IHRyYW5zbGF0ZWQgdG8gdGhlIHF1ZXJ5IHN0cmluZyBvZiB0aGUgdXJsXHJcbiAqL1xyXG5jb25zdCBnZXRVcmxGcm9tUGF0aCA9IChwYXRoOiBzdHJpbmcsIHBhdGhQYXJhbXM/OiBhbnksIHF1ZXJ5UGFyYW1zPzogYW55KSA9PiB7XHJcbiAgICBpZiAocGF0aCA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhdGhQYXJhbXMgIT0gbnVsbCkge1xyXG4gICAgICAgIHBhdGggPSByZXBsYWNlUGF0aFBhcmFtcyhwYXRoLCBwYXRoUGFyYW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocXVlcnlQYXJhbXMgIT0gbnVsbCkge1xyXG4gICAgICAgIHBhdGggPSBhcHBlbmRRdWVyeVBhcmFtcyhwYXRoLCBxdWVyeVBhcmFtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhdGg7XHJcbn07XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyBpZiBzdXBwbGllZCB1cmwgaXMgYW4gYWJzb2x1dGUgdXJsXHJcbiAqIEBwYXJhbSB1cmxcclxuICovXHJcbmNvbnN0IGlzQWJzb2x1dGVVcmwgPSAodXJsOiBzdHJpbmcpOiBib29sZWFuID0+XHJcbiAgICBuZXcgUmVnRXhwKFwiXig/OlthLXpdKzopPy8vXCIsIFwiaVwiKS50ZXN0KHVybCk7XHJcblxyXG4vKipcclxuICogUGFyc2UgYSBxdWVyeSBzdHJpbmcgYW5kIHJldHVybiBhbiBvYmplY3Qgb2YgdHlwZSBUXHJcbiAqIEBwYXJhbSBxdWVyeVN0cmluZyBjdXJyZW50IHF1ZXJ5IHN0cmluZ1xyXG4gKiBAcGFyYW0gYXJyYXlGb3JtYXQgZm9ybWF0IHRvIHBhcnNlIGFycmF5cyBmcm9tXHJcbiAqIEBwYXJhbSBwYXJzZU51bWJlcnMgY29udmVydCBudW1iZXJzIHRvIG51bWJlciB0eXBlIGZyb20gc3RyaW5nXHJcbiAqIEBwYXJhbSBwYXJzZUJvb2xlYW5zIGNvbnZlcnQgYm9vbGVhbnMgdG8gYm9vbGVhbiB0eXBlIGZyb20gc3RyaW5nXHJcbiAqL1xyXG5jb25zdCBxdWVyeVN0cmluZ1RvT2JqZWN0ID0gPFQ+KFxyXG4gICAgcXVlcnlTdHJpbmc6IHN0cmluZyxcclxuICAgIGFycmF5Rm9ybWF0OiBcImJyYWNrZXRcIiB8IFwiaW5kZXhcIiB8IFwiY29tbWFcIiA9IFwiaW5kZXhcIixcclxuICAgIHBhcnNlTnVtYmVyczogYm9vbGVhbiA9IHRydWUsXHJcbiAgICBwYXJzZUJvb2xlYW5zOiBib29sZWFuID0gdHJ1ZVxyXG4pOiBUID0+XHJcbiAgICAoUXVlcnlTdHJpbmcucGFyc2UocXVlcnlTdHJpbmcsIHtcclxuICAgICAgICBhcnJheUZvcm1hdCxcclxuICAgICAgICBwYXJzZU51bWJlcnMsXHJcbiAgICAgICAgcGFyc2VCb29sZWFucyxcclxuICAgIH0pIGFzIGFueSkgYXMgVDtcclxuXHJcbi8qKlxyXG4gKiBSZXBsYWNlIHJvdXRpbmcgY29tcG9uZW50cyBpbiBzdXBwbGllZCBwYXRoIHdpdGgga2V5cyBhbmQgdmFsdWVzXHJcbiAqIG9mIHN1cHBsaWVkIHBhdGhQYXJhbXMuXHJcbiAqIEBwYXJhbSBwYXRoIFBhdGggY29udGFpbmluZyByb3V0aW5nIGNvbXBvbmVudHMgKGZvcm1hdDogJzprZXknKS5cclxuICogVGhyb3dzIGFuIGVycm9yIGlmIGFueSBjb21wb25lbnRzIGFyZW4ndCBmb3VuZCBpbiB0aGUgcGF0aFBhcmFtcyBvYmplY3QuXHJcbiAqIEBwYXJhbSBwYXRoUGFyYW1zIE9iamVjdCB0byB0cmFuc2Zvcm0gaW50byB0aGUgc3VwcGxpZWQgcGF0aC5cclxuICovXHJcbmNvbnN0IHJlcGxhY2VQYXRoUGFyYW1zID0gKHBhdGg6IHN0cmluZywgcGF0aFBhcmFtczogYW55KSA9PiB7XHJcbiAgICBpZiAocGF0aFBhcmFtcyA9PSBudWxsIHx8IHBhdGggPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoX3JvdXRlUGFyYW1SZWdFeCwgKGEsIGIpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHBhdGhQYXJhbXNbYi5zdWJzdHJpbmcoMSldO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICAgICBgcm91dGVVdGlsczo6Z2V0VXJsIGNhbm5vdCBmaW5kIHZhbHVlIGZvciBwYXRoIHBhcmFtZXRlciAke2F9YFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBhO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyAjZW5kcmVnaW9uIFByaXZhdGUgTWV0aG9kc1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gI3JlZ2lvbiBFeHBvcnRzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5leHBvcnQgY29uc3QgUm91dGVVdGlscyA9IHtcclxuICAgIGFwcGVuZFF1ZXJ5UGFyYW1zLFxyXG4gICAgZ2V0VXJsLFxyXG4gICAgZ2V0VXJsRnJvbVBhdGgsXHJcbiAgICBpc0Fic29sdXRlVXJsLFxyXG4gICAgcXVlcnlTdHJpbmdUb09iamVjdCxcclxuICAgIHJlcGxhY2VQYXRoUGFyYW1zLFxyXG59O1xyXG5cclxuLy8gI2VuZHJlZ2lvbiBFeHBvcnRzXHJcbiJdfQ==