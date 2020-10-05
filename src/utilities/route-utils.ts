import QueryString, { StringifyOptions } from "query-string";
import { QueryStringArrayFormat } from "../enumerations/query-string-array-format";

// -----------------------------------------------------------------------------------------
// #region Constants
// -----------------------------------------------------------------------------------------

const _routeParamRegEx = /(:[a-z_-]*)/gi;

// #endregion Constants

// -----------------------------------------------------------------------------------------
// #region Private Methods
// -----------------------------------------------------------------------------------------

/**
 * Appends the supplied query params object as a query string to path. Even if path is null.
 * @param path Existing path (can be null)
 * @param queryParams Object to transform into query string
 * @param arrayFormat Format to serialize arrays to a query string with. Defaults to "index".
 * @param arrayFormatSeparator Seaparator character to use if using arrayFormat="separator"
 */
const appendQueryParams = (
    path: string,
    queryParams: any,
    arrayFormat: QueryStringArrayFormat = QueryStringArrayFormat.Index,
    arrayFormatSeparator: string | undefined = undefined
) => {
    if (path == null) {
        path = "";
    }

    if (queryParams == null) {
        return path;
    }

    let options: StringifyOptions = { arrayFormat };

    // assign arrayFormatSeparator only if not null/undefined
    // for some reason, if you define it when it's undefined,
    // it comes through to query-string as the string "undefined"
    if (arrayFormatSeparator != null) {
        options = { ...options, arrayFormatSeparator };
    }

    const queryString = QueryString.stringify(queryParams, options);

    // If no query string could be parsed from the given query params, return the unmodified path.
    if (queryString.length === 0) {
        return path;
    }

    return `${path}?${queryString}`;
};

/**
 * Convenience method to get a Url from a RouteDefinition
 * @param path Route path template. Parameters in the path are denoted withed a colon `:id`
 * @param pathParams Object with keys matching supplied path template components
 */
const getUrl = (path: string, pathParams?: any) => {
    return getUrlFromPath(path, pathParams);
};

/**
 * Constructs a url from a formatted route path.
 * @param path Route path template. Parameters in the path are denoted withed a colon `:id`
 * @param pathParams Object with keys matching supplied path template components
 * @param queryParams Object to get translated to the query string of the url
 */
const getUrlFromPath = (path: string, pathParams?: any, queryParams?: any) => {
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
const isAbsoluteUrl = (url: string): boolean =>
    new RegExp("^(?:[a-z]+:)?//", "i").test(url);

/**
 * Parse a query string and return an object of type T
 * @param queryString current query string
 * @param arrayFormat format to parse arrays from
 * @param parseNumbers convert numbers to number type from string
 * @param parseBooleans convert booleans to boolean type from string
 */
const queryStringToObject = <T>(
    queryString: string,
    arrayFormat: QueryStringArrayFormat = QueryStringArrayFormat.Index,
    parseNumbers: boolean = true,
    parseBooleans: boolean = true
): T =>
    (QueryString.parse(queryString, {
        arrayFormat,
        parseNumbers,
        parseBooleans,
    }) as any) as T;

/**
 * Replace routing components in supplied path with keys and values
 * of supplied pathParams.
 * @param path Path containing routing components (format: ':key').
 * Throws an error if any components aren't found in the pathParams object.
 * @param pathParams Object to transform into the supplied path.
 */
const replacePathParams = (path: string, pathParams: any) => {
    if (pathParams == null || path == null) {
        return path;
    }

    return path.replace(_routeParamRegEx, (a, b) => {
        const value = pathParams[b.substring(1)];

        if (value != null) {
            return value;
        }

        console.error(
            `routeUtils::getUrl cannot find value for path parameter ${a}`
        );

        return a;
    });
};

// #endregion Private Methods

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export const RouteUtils = {
    appendQueryParams,
    getUrl,
    getUrlFromPath,
    isAbsoluteUrl,
    queryStringToObject,
    replacePathParams,
};

// #endregion Exports
