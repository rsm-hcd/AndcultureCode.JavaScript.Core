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
 */
const appendQueryParams = (path: string, queryParams: any) => {
    if (queryParams == null) {
        return path;
    }

    if (path == null) {
        path = "";
    }

    const queryString = new URLSearchParams(queryParams).toString();

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
    replacePathParams,
};

// #endregion Exports
