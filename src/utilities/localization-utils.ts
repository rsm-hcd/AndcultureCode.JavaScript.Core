import { CollectionUtils } from "./collection-utils";
import { EnvironmentUtils } from "./environment-utils";
import { Culture } from "./../interfaces/culture";
import { CultureParams } from "./../interfaces/culture-params";
import { RouteUtils } from "./route-utils";
import { StringUtils } from "./string-utils";
import { Rfc4646LanguageCodes } from "./../constants/rfc4646-language-codes";
import i18n from "i18next";
import LanguageDetector, {
    DetectorOptions,
} from "i18next-browser-languagedetector";
import { LocalizationInitOptions } from "../interfaces/localization-init-options";

// -----------------------------------------------------------------------------------------
// #region Constants
// -----------------------------------------------------------------------------------------

const errorCultureIsRequired = "Culture is required";

/**
 * Key name for handling language selection in routing (ie. queryString, path, etc...)
 */
const routeParam = "culture";

/**
 * Defaults detection options for i18next-browser-languageDetector
 */
const detectionOptions: DetectorOptions = {
    lookupFromPathIndex: 0,
    lookupQuerystring: routeParam,
    order: ["path", "querystring"], // order and from where user language should be detected
};

const defaultInitOptions: LocalizationInitOptions = {
    debug: EnvironmentUtils.isDevelopment(),
    detection: detectionOptions,
    escapeValue: false,
};

// #endregion Constants

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

/**
 * Updates application's configured language used for translations
 * @param cultureCode RFC-4646 culture code
 */
const changeCultureCode = (cultureCode: string) =>
    i18n.changeLanguage(cultureCode);

/**
 * Returns the culture code from the querystring, ie `/login?culture=en-us`
 */
const cultureCodeFromQueryString = () => {
    const queryString = window.location.search;
    return RouteUtils.queryStringToObject<CultureParams>(queryString)?.culture;
};

/**
 * Returns the culture code from the first position in the route, ie `/en-us/xyz`
 */
const cultureCodeFromRoute = () => window.location.pathname.split("/")[1];

/**
 * Factory to build an inheritance chain for base to child Culture<TResource> types
 * @param base Base culture from core package
 * @param culture subclass culture's partial properties to override 'base'. Typically where providing culture resources
 */
const cultureFactory = <TResources>(
    base: Culture<any>,
    culture: Partial<Culture<TResources>>
): Culture<TResources> => Object.assign({}, base, culture);

const culturesToResources = <TResources>(cultures: Culture<TResources>[]) => {
    const resources: any = {};

    cultures.forEach((l) => {
        resources[l.code] = { translation: l.resources };
    });

    return resources;
};

/**
 * Returns currently configured RFC-4646 culture code
 */
const currentCultureCode = () => i18n.language;

const defaultCultureCode = () => Rfc4646LanguageCodes.EN_US;

/**
 * Detect and set current language for which to provide translations
 *
 * @returns string current RFC-4646 culture code
 */
const detectCultureCode = () => {
    let culture = cultureCodeFromRoute();

    if (!StringUtils.isValidCultureCode(culture)) {
        culture = cultureCodeFromQueryString();
    }

    // If requested culture is missing, default to english
    if (!StringUtils.isValidCultureCode(culture)) {
        culture = defaultCultureCode();
    }

    if (culture === currentCultureCode()) {
        return culture;
    }

    changeCultureCode(culture!);

    return culture;
};

/**
 * Initialize frontend i18n module - typically in root/startup of application
 * @param module Third party module for use with i18next (ie. initReactI18next)
 * @param cultures List of supported language cultures
 * @param options Additional options for configuring i18n detection
 */
const initialize = <TResources>(
    module: any,
    cultures: Culture<TResources>[],
    options: LocalizationInitOptions = defaultInitOptions
) => {
    if (CollectionUtils.isEmpty(cultures)) {
        throw new Error(errorCultureIsRequired);
    }

    i18n.use(module)
        .use(LanguageDetector)
        .init({
            // Cannot set lng value when using LanguageDetector (https://stackoverflow.com/a/55143859)
            cleanCode: true, // language will be lowercased EN --> en while leaving full locales like en-US
            debug: options.debug, // logs info level to console output. Helps finding issues with loading not working.
            detection: options.detection,
            fallbackLng: defaultCultureCode(), // language to use if translations in user language are not available.
            interpolation: {
                escapeValue: options.escapeValue,
            },
            resources: culturesToResources<TResources>(cultures),
        });

    return i18n;
};

/**
 * Retrieve translation for given key in the currently configured language
 * @param key culture resource key
 * @param options object key/values for interpolation of dynamic values
 */
const translate = (key: string, options?: any): string => i18n.t(key, options);

/**
 * Retrieve translation for given key in the currently configured language
 * @param key culture resource key
 * @param options object key/values for interpolation of dynamic values
 */
const t = translate;

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export const LocalizationUtils = {
    changeCultureCode,
    cultureCodeFromQueryString,
    cultureCodeFromRoute,
    cultureFactory,
    currentCultureCode,
    defaultCultureCode,
    defaultInitOptions,
    detectCultureCode,
    errorCultureIsRequired,
    initialize,
    routeParam,
    t,
    translate,
};

// #endregion Exports
