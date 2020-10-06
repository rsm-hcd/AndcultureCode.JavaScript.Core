export declare const RouteUtils: {
    appendQueryParams: (path: string, queryParams: any) => string;
    getUrl: (path: string, pathParams?: any) => string;
    getUrlFromPath: (path: string, pathParams?: any, queryParams?: any) => string;
    isAbsoluteUrl: (url: string) => boolean;
    queryStringToObject: <T>(queryString: string, arrayFormat?: "bracket" | "index" | "comma", parseNumbers?: boolean, parseBooleans?: boolean) => T;
    replacePathParams: (path: string, pathParams: any) => string;
};
