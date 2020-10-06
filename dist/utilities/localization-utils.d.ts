import { Culture } from "./../interfaces/culture";
export declare const LocalizationUtils: {
    changeCultureCode: (cultureCode: string) => Promise<import("i18next").TFunction>;
    cultureCodeFromQueryString: () => string;
    cultureFactory: <TResources>(base: Culture<any>, culture: Partial<Culture<TResources>>) => Culture<TResources>;
    currentCultureCode: () => string;
    defaultCultureCode: () => string;
    detectCultureCode: () => string;
    errorCultureIsRequired: string;
    initialize: <TResources_1>(module: any, cultures: Culture<TResources_1>[], escapeValue?: boolean) => import("i18next").i18n;
    routeParam: string;
    t: (key: string, options?: any) => string;
    translate: (key: string, options?: any) => string;
};
