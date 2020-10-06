"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var collection_utils_1 = require("./collection-utils");
var environment_utils_1 = require("./environment-utils");
var route_utils_1 = require("./route-utils");
var string_utils_1 = require("./string-utils");
var rfc4646_language_codes_1 = require("./../constants/rfc4646-language-codes");
var i18next_1 = __importDefault(require("i18next"));
// -----------------------------------------------------------------------------------------
// #region Constants
// -----------------------------------------------------------------------------------------
var errorCultureIsRequired = "Culture is required";
/**
 * Key name for handling language selection in routing (ie. queryString, path, etc...)
 */
var routeParam = "culture";
// #endregion Constants
// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------
// TODO: Issue #12
// i18next-browser-languageDetector options (@see https://github.com/i18next/i18next-browser-languageDetector)
// const detectionOptions: DetectorOptions = {
//     checkForSimilarInWhitelist: true, // fallback to a similar whitelist language
//     checkWhitelist: true, // only detect languages that are in the whitelist
//     lookupFromPathIndex: 0,
//     lookupQuerystring: "culture",
//     order: ["querystring", "path"], // order and from where user language should be detected
// };
/**
 * Updates application's configured language used for translations
 * @param cultureCode RFC-4646 culture code
 */
var changeCultureCode = function (cultureCode) {
    return i18next_1.default.changeLanguage(cultureCode);
};
var cultureCodeFromQueryString = function () {
    var _a;
    var queryString = window.location.search;
    return (_a = route_utils_1.RouteUtils.queryStringToObject(queryString)) === null || _a === void 0 ? void 0 : _a.culture;
};
/**
 * Factory to build an inheritance chain for base to child Culture<TResource> types
 * @param base Base culture from core package
 * @param culture subclass culture's partial properties to override 'base'. Typically where providing culture resources
 */
var cultureFactory = function (base, culture) { return Object.assign({}, base, culture); };
var culturesToResources = function (cultures) {
    var resources = {};
    cultures.forEach(function (l) {
        resources[l.code] = { translation: l.resources };
    });
    return resources;
};
/**
 * Returns currently configured RFC-4646 culture code
 */
var currentCultureCode = function () { return i18next_1.default.language; };
var defaultCultureCode = function () { return rfc4646_language_codes_1.Rfc4646LanguageCodes.EN_US; };
/**
 * Detect current language for which to provide translations
 * @param requestCulture Incoming requested culture
 * @returns string current RFC-4646 culture code
 */
var detectCultureCode = function () {
    var culture = cultureCodeFromQueryString();
    // If requested culture is missing, default to english
    if (string_utils_1.StringUtils.isEmpty(culture)) {
        culture = defaultCultureCode();
    }
    if (culture === currentCultureCode()) {
        return culture;
    }
    changeCultureCode(culture);
    return culture;
};
/**
 * Initialize frontend i18next module - typically in root/startup of application
 * @param module Third party module for use with i18next (ie. initReactI18next)
 * @param cultures List of supported language cultures
 * @param escapeValue Optional flag to set interpolation value escaping. False by default being react does this by default
 */
var initialize = function (module, cultures, escapeValue) {
    if (escapeValue === void 0) { escapeValue = false; }
    if (collection_utils_1.CollectionUtils.isEmpty(cultures)) {
        throw new Error(errorCultureIsRequired);
    }
    i18next_1.default.use(module).init({
        cleanCode: true,
        debug: environment_utils_1.EnvironmentUtils.isDevelopment(),
        // detection: detectionOptions, // TODO: Issue #12 - Uncomment and implement when enabling translation by way of routes (ie. /en-us/xyz)
        fallbackLng: defaultCultureCode(),
        interpolation: {
            escapeValue: escapeValue,
        },
        lng: defaultCultureCode(),
        resources: culturesToResources(cultures),
    });
    return i18next_1.default;
};
/**
 * Retrieve translation for given key in the currently configured language
 * @param key culture resource key
 * @param options object key/values for interpolation of dynamic values
 */
var translate = function (key, options) {
    return i18next_1.default.t(key, options);
};
/**
 * Retrieve translation for given key in the currently configured language
 * @param key culture resource key
 * @param options object key/values for interpolation of dynamic values
 */
var t = translate;
// #endregion Functions
// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------
exports.LocalizationUtils = {
    changeCultureCode: changeCultureCode,
    cultureCodeFromQueryString: cultureCodeFromQueryString,
    cultureFactory: cultureFactory,
    currentCultureCode: currentCultureCode,
    defaultCultureCode: defaultCultureCode,
    detectCultureCode: detectCultureCode,
    errorCultureIsRequired: errorCultureIsRequired,
    initialize: initialize,
    routeParam: routeParam,
    t: t,
    translate: translate,
};
// #endregion Exports
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpemF0aW9uLXV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxpdGllcy9sb2NhbGl6YXRpb24tdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx1REFBcUQ7QUFDckQseURBQXVEO0FBR3ZELDZDQUEyQztBQUMzQywrQ0FBNkM7QUFDN0MsZ0ZBQTZFO0FBQzdFLG9EQUE4QjtBQUU5Qiw0RkFBNEY7QUFDNUYsb0JBQW9CO0FBQ3BCLDRGQUE0RjtBQUU1RixJQUFNLHNCQUFzQixHQUFHLHFCQUFxQixDQUFDO0FBRXJEOztHQUVHO0FBQ0gsSUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDO0FBRTdCLHVCQUF1QjtBQUV2Qiw0RkFBNEY7QUFDNUYsb0JBQW9CO0FBQ3BCLDRGQUE0RjtBQUU1RixrQkFBa0I7QUFDbEIsOEdBQThHO0FBQzlHLDhDQUE4QztBQUM5QyxvRkFBb0Y7QUFDcEYsK0VBQStFO0FBQy9FLDhCQUE4QjtBQUM5QixvQ0FBb0M7QUFDcEMsK0ZBQStGO0FBQy9GLEtBQUs7QUFFTDs7O0dBR0c7QUFDSCxJQUFNLGlCQUFpQixHQUFHLFVBQUMsV0FBbUI7SUFDMUMsT0FBQSxpQkFBTyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7QUFBbkMsQ0FBbUMsQ0FBQztBQUV4QyxJQUFNLDBCQUEwQixHQUFHOztJQUMvQixJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUMzQyxhQUFPLHdCQUFVLENBQUMsbUJBQW1CLENBQWdCLFdBQVcsQ0FBQywwQ0FBRSxPQUFPLENBQUM7QUFDL0UsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNILElBQU0sY0FBYyxHQUFHLFVBQ25CLElBQWtCLEVBQ2xCLE9BQXFDLElBQ2YsT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQWhDLENBQWdDLENBQUM7QUFFM0QsSUFBTSxtQkFBbUIsR0FBRyxVQUFhLFFBQStCO0lBQ3BFLElBQU0sU0FBUyxHQUFRLEVBQUUsQ0FBQztJQUUxQixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQztRQUNmLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JELENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQyxDQUFDO0FBRUY7O0dBRUc7QUFDSCxJQUFNLGtCQUFrQixHQUFHLGNBQU0sT0FBQSxpQkFBTyxDQUFDLFFBQVEsRUFBaEIsQ0FBZ0IsQ0FBQztBQUVsRCxJQUFNLGtCQUFrQixHQUFHLGNBQU0sT0FBQSw2Q0FBb0IsQ0FBQyxLQUFLLEVBQTFCLENBQTBCLENBQUM7QUFFNUQ7Ozs7R0FJRztBQUNILElBQU0saUJBQWlCLEdBQUc7SUFDdEIsSUFBSSxPQUFPLEdBQUcsMEJBQTBCLEVBQUUsQ0FBQztJQUUzQyxzREFBc0Q7SUFDdEQsSUFBSSwwQkFBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUM5QixPQUFPLEdBQUcsa0JBQWtCLEVBQUUsQ0FBQztLQUNsQztJQUVELElBQUksT0FBTyxLQUFLLGtCQUFrQixFQUFFLEVBQUU7UUFDbEMsT0FBTyxPQUFPLENBQUM7S0FDbEI7SUFFRCxpQkFBaUIsQ0FBQyxPQUFRLENBQUMsQ0FBQztJQUU1QixPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDLENBQUM7QUFFRjs7Ozs7R0FLRztBQUNILElBQU0sVUFBVSxHQUFHLFVBQ2YsTUFBVyxFQUNYLFFBQStCLEVBQy9CLFdBQTRCO0lBQTVCLDRCQUFBLEVBQUEsbUJBQTRCO0lBRTVCLElBQUksa0NBQWUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0tBQzNDO0lBRUQsaUJBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3JCLFNBQVMsRUFBRSxJQUFJO1FBQ2YsS0FBSyxFQUFFLG9DQUFnQixDQUFDLGFBQWEsRUFBRTtRQUN2Qyx3SUFBd0k7UUFDeEksV0FBVyxFQUFFLGtCQUFrQixFQUFFO1FBQ2pDLGFBQWEsRUFBRTtZQUNYLFdBQVcsYUFBQTtTQUNkO1FBQ0QsR0FBRyxFQUFFLGtCQUFrQixFQUFFO1FBQ3pCLFNBQVMsRUFBRSxtQkFBbUIsQ0FBYSxRQUFRLENBQUM7S0FDdkQsQ0FBQyxDQUFDO0lBRUgsT0FBTyxpQkFBTyxDQUFDO0FBQ25CLENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDSCxJQUFNLFNBQVMsR0FBRyxVQUFDLEdBQVcsRUFBRSxPQUFhO0lBQ3pDLE9BQUEsaUJBQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQztBQUF2QixDQUF1QixDQUFDO0FBRTVCOzs7O0dBSUc7QUFDSCxJQUFNLENBQUMsR0FBRyxTQUFTLENBQUM7QUFFcEIsdUJBQXVCO0FBRXZCLDRGQUE0RjtBQUM1RixrQkFBa0I7QUFDbEIsNEZBQTRGO0FBRS9FLFFBQUEsaUJBQWlCLEdBQUc7SUFDN0IsaUJBQWlCLG1CQUFBO0lBQ2pCLDBCQUEwQiw0QkFBQTtJQUMxQixjQUFjLGdCQUFBO0lBQ2Qsa0JBQWtCLG9CQUFBO0lBQ2xCLGtCQUFrQixvQkFBQTtJQUNsQixpQkFBaUIsbUJBQUE7SUFDakIsc0JBQXNCLHdCQUFBO0lBQ3RCLFVBQVUsWUFBQTtJQUNWLFVBQVUsWUFBQTtJQUNWLENBQUMsR0FBQTtJQUNELFNBQVMsV0FBQTtDQUNaLENBQUM7QUFFRixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xsZWN0aW9uVXRpbHMgfSBmcm9tIFwiLi9jb2xsZWN0aW9uLXV0aWxzXCI7XHJcbmltcG9ydCB7IEVudmlyb25tZW50VXRpbHMgfSBmcm9tIFwiLi9lbnZpcm9ubWVudC11dGlsc1wiO1xyXG5pbXBvcnQgeyBDdWx0dXJlIH0gZnJvbSBcIi4vLi4vaW50ZXJmYWNlcy9jdWx0dXJlXCI7XHJcbmltcG9ydCB7IEN1bHR1cmVQYXJhbXMgfSBmcm9tIFwiLi8uLi9pbnRlcmZhY2VzL2N1bHR1cmUtcGFyYW1zXCI7XHJcbmltcG9ydCB7IFJvdXRlVXRpbHMgfSBmcm9tIFwiLi9yb3V0ZS11dGlsc1wiO1xyXG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuL3N0cmluZy11dGlsc1wiO1xyXG5pbXBvcnQgeyBSZmM0NjQ2TGFuZ3VhZ2VDb2RlcyB9IGZyb20gXCIuLy4uL2NvbnN0YW50cy9yZmM0NjQ2LWxhbmd1YWdlLWNvZGVzXCI7XHJcbmltcG9ydCBpMThuZXh0IGZyb20gXCJpMThuZXh0XCI7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAjcmVnaW9uIENvbnN0YW50c1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgZXJyb3JDdWx0dXJlSXNSZXF1aXJlZCA9IFwiQ3VsdHVyZSBpcyByZXF1aXJlZFwiO1xyXG5cclxuLyoqXHJcbiAqIEtleSBuYW1lIGZvciBoYW5kbGluZyBsYW5ndWFnZSBzZWxlY3Rpb24gaW4gcm91dGluZyAoaWUuIHF1ZXJ5U3RyaW5nLCBwYXRoLCBldGMuLi4pXHJcbiAqL1xyXG5jb25zdCByb3V0ZVBhcmFtID0gXCJjdWx0dXJlXCI7XHJcblxyXG4vLyAjZW5kcmVnaW9uIENvbnN0YW50c1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gI3JlZ2lvbiBGdW5jdGlvbnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIFRPRE86IElzc3VlICMxMlxyXG4vLyBpMThuZXh0LWJyb3dzZXItbGFuZ3VhZ2VEZXRlY3RvciBvcHRpb25zIChAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9pMThuZXh0L2kxOG5leHQtYnJvd3Nlci1sYW5ndWFnZURldGVjdG9yKVxyXG4vLyBjb25zdCBkZXRlY3Rpb25PcHRpb25zOiBEZXRlY3Rvck9wdGlvbnMgPSB7XHJcbi8vICAgICBjaGVja0ZvclNpbWlsYXJJbldoaXRlbGlzdDogdHJ1ZSwgLy8gZmFsbGJhY2sgdG8gYSBzaW1pbGFyIHdoaXRlbGlzdCBsYW5ndWFnZVxyXG4vLyAgICAgY2hlY2tXaGl0ZWxpc3Q6IHRydWUsIC8vIG9ubHkgZGV0ZWN0IGxhbmd1YWdlcyB0aGF0IGFyZSBpbiB0aGUgd2hpdGVsaXN0XHJcbi8vICAgICBsb29rdXBGcm9tUGF0aEluZGV4OiAwLFxyXG4vLyAgICAgbG9va3VwUXVlcnlzdHJpbmc6IFwiY3VsdHVyZVwiLFxyXG4vLyAgICAgb3JkZXI6IFtcInF1ZXJ5c3RyaW5nXCIsIFwicGF0aFwiXSwgLy8gb3JkZXIgYW5kIGZyb20gd2hlcmUgdXNlciBsYW5ndWFnZSBzaG91bGQgYmUgZGV0ZWN0ZWRcclxuLy8gfTtcclxuXHJcbi8qKlxyXG4gKiBVcGRhdGVzIGFwcGxpY2F0aW9uJ3MgY29uZmlndXJlZCBsYW5ndWFnZSB1c2VkIGZvciB0cmFuc2xhdGlvbnNcclxuICogQHBhcmFtIGN1bHR1cmVDb2RlIFJGQy00NjQ2IGN1bHR1cmUgY29kZVxyXG4gKi9cclxuY29uc3QgY2hhbmdlQ3VsdHVyZUNvZGUgPSAoY3VsdHVyZUNvZGU6IHN0cmluZykgPT5cclxuICAgIGkxOG5leHQuY2hhbmdlTGFuZ3VhZ2UoY3VsdHVyZUNvZGUpO1xyXG5cclxuY29uc3QgY3VsdHVyZUNvZGVGcm9tUXVlcnlTdHJpbmcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcbiAgICByZXR1cm4gUm91dGVVdGlscy5xdWVyeVN0cmluZ1RvT2JqZWN0PEN1bHR1cmVQYXJhbXM+KHF1ZXJ5U3RyaW5nKT8uY3VsdHVyZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBGYWN0b3J5IHRvIGJ1aWxkIGFuIGluaGVyaXRhbmNlIGNoYWluIGZvciBiYXNlIHRvIGNoaWxkIEN1bHR1cmU8VFJlc291cmNlPiB0eXBlc1xyXG4gKiBAcGFyYW0gYmFzZSBCYXNlIGN1bHR1cmUgZnJvbSBjb3JlIHBhY2thZ2VcclxuICogQHBhcmFtIGN1bHR1cmUgc3ViY2xhc3MgY3VsdHVyZSdzIHBhcnRpYWwgcHJvcGVydGllcyB0byBvdmVycmlkZSAnYmFzZScuIFR5cGljYWxseSB3aGVyZSBwcm92aWRpbmcgY3VsdHVyZSByZXNvdXJjZXNcclxuICovXHJcbmNvbnN0IGN1bHR1cmVGYWN0b3J5ID0gPFRSZXNvdXJjZXM+KFxyXG4gICAgYmFzZTogQ3VsdHVyZTxhbnk+LFxyXG4gICAgY3VsdHVyZTogUGFydGlhbDxDdWx0dXJlPFRSZXNvdXJjZXM+PlxyXG4pOiBDdWx0dXJlPFRSZXNvdXJjZXM+ID0+IE9iamVjdC5hc3NpZ24oe30sIGJhc2UsIGN1bHR1cmUpO1xyXG5cclxuY29uc3QgY3VsdHVyZXNUb1Jlc291cmNlcyA9IDxUUmVzb3VyY2VzPihjdWx0dXJlczogQ3VsdHVyZTxUUmVzb3VyY2VzPltdKSA9PiB7XHJcbiAgICBjb25zdCByZXNvdXJjZXM6IGFueSA9IHt9O1xyXG5cclxuICAgIGN1bHR1cmVzLmZvckVhY2goKGwpID0+IHtcclxuICAgICAgICByZXNvdXJjZXNbbC5jb2RlXSA9IHsgdHJhbnNsYXRpb246IGwucmVzb3VyY2VzIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzb3VyY2VzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgY3VycmVudGx5IGNvbmZpZ3VyZWQgUkZDLTQ2NDYgY3VsdHVyZSBjb2RlXHJcbiAqL1xyXG5jb25zdCBjdXJyZW50Q3VsdHVyZUNvZGUgPSAoKSA9PiBpMThuZXh0Lmxhbmd1YWdlO1xyXG5cclxuY29uc3QgZGVmYXVsdEN1bHR1cmVDb2RlID0gKCkgPT4gUmZjNDY0Nkxhbmd1YWdlQ29kZXMuRU5fVVM7XHJcblxyXG4vKipcclxuICogRGV0ZWN0IGN1cnJlbnQgbGFuZ3VhZ2UgZm9yIHdoaWNoIHRvIHByb3ZpZGUgdHJhbnNsYXRpb25zXHJcbiAqIEBwYXJhbSByZXF1ZXN0Q3VsdHVyZSBJbmNvbWluZyByZXF1ZXN0ZWQgY3VsdHVyZVxyXG4gKiBAcmV0dXJucyBzdHJpbmcgY3VycmVudCBSRkMtNDY0NiBjdWx0dXJlIGNvZGVcclxuICovXHJcbmNvbnN0IGRldGVjdEN1bHR1cmVDb2RlID0gKCkgPT4ge1xyXG4gICAgbGV0IGN1bHR1cmUgPSBjdWx0dXJlQ29kZUZyb21RdWVyeVN0cmluZygpO1xyXG5cclxuICAgIC8vIElmIHJlcXVlc3RlZCBjdWx0dXJlIGlzIG1pc3NpbmcsIGRlZmF1bHQgdG8gZW5nbGlzaFxyXG4gICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoY3VsdHVyZSkpIHtcclxuICAgICAgICBjdWx0dXJlID0gZGVmYXVsdEN1bHR1cmVDb2RlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGN1bHR1cmUgPT09IGN1cnJlbnRDdWx0dXJlQ29kZSgpKSB7XHJcbiAgICAgICAgcmV0dXJuIGN1bHR1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQ3VsdHVyZUNvZGUoY3VsdHVyZSEpO1xyXG5cclxuICAgIHJldHVybiBjdWx0dXJlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgZnJvbnRlbmQgaTE4bmV4dCBtb2R1bGUgLSB0eXBpY2FsbHkgaW4gcm9vdC9zdGFydHVwIG9mIGFwcGxpY2F0aW9uXHJcbiAqIEBwYXJhbSBtb2R1bGUgVGhpcmQgcGFydHkgbW9kdWxlIGZvciB1c2Ugd2l0aCBpMThuZXh0IChpZS4gaW5pdFJlYWN0STE4bmV4dClcclxuICogQHBhcmFtIGN1bHR1cmVzIExpc3Qgb2Ygc3VwcG9ydGVkIGxhbmd1YWdlIGN1bHR1cmVzXHJcbiAqIEBwYXJhbSBlc2NhcGVWYWx1ZSBPcHRpb25hbCBmbGFnIHRvIHNldCBpbnRlcnBvbGF0aW9uIHZhbHVlIGVzY2FwaW5nLiBGYWxzZSBieSBkZWZhdWx0IGJlaW5nIHJlYWN0IGRvZXMgdGhpcyBieSBkZWZhdWx0XHJcbiAqL1xyXG5jb25zdCBpbml0aWFsaXplID0gPFRSZXNvdXJjZXM+KFxyXG4gICAgbW9kdWxlOiBhbnksXHJcbiAgICBjdWx0dXJlczogQ3VsdHVyZTxUUmVzb3VyY2VzPltdLFxyXG4gICAgZXNjYXBlVmFsdWU6IGJvb2xlYW4gPSBmYWxzZVxyXG4pID0+IHtcclxuICAgIGlmIChDb2xsZWN0aW9uVXRpbHMuaXNFbXB0eShjdWx0dXJlcykpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JDdWx0dXJlSXNSZXF1aXJlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgaTE4bmV4dC51c2UobW9kdWxlKS5pbml0KHtcclxuICAgICAgICBjbGVhbkNvZGU6IHRydWUsIC8vIGxhbmd1YWdlIHdpbGwgYmUgbG93ZXJjYXNlZCBFTiAtLT4gZW4gd2hpbGUgbGVhdmluZyBmdWxsIGxvY2FsZXMgbGlrZSBlbi1VU1xyXG4gICAgICAgIGRlYnVnOiBFbnZpcm9ubWVudFV0aWxzLmlzRGV2ZWxvcG1lbnQoKSwgLy8gbG9ncyBpbmZvIGxldmVsIHRvIGNvbnNvbGUgb3V0cHV0LiBIZWxwcyBmaW5kaW5nIGlzc3VlcyB3aXRoIGxvYWRpbmcgbm90IHdvcmtpbmcuXHJcbiAgICAgICAgLy8gZGV0ZWN0aW9uOiBkZXRlY3Rpb25PcHRpb25zLCAvLyBUT0RPOiBJc3N1ZSAjMTIgLSBVbmNvbW1lbnQgYW5kIGltcGxlbWVudCB3aGVuIGVuYWJsaW5nIHRyYW5zbGF0aW9uIGJ5IHdheSBvZiByb3V0ZXMgKGllLiAvZW4tdXMveHl6KVxyXG4gICAgICAgIGZhbGxiYWNrTG5nOiBkZWZhdWx0Q3VsdHVyZUNvZGUoKSwgLy8gbGFuZ3VhZ2UgdG8gdXNlIGlmIHRyYW5zbGF0aW9ucyBpbiB1c2VyIGxhbmd1YWdlIGFyZSBub3QgYXZhaWxhYmxlLlxyXG4gICAgICAgIGludGVycG9sYXRpb246IHtcclxuICAgICAgICAgICAgZXNjYXBlVmFsdWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsbmc6IGRlZmF1bHRDdWx0dXJlQ29kZSgpLFxyXG4gICAgICAgIHJlc291cmNlczogY3VsdHVyZXNUb1Jlc291cmNlczxUUmVzb3VyY2VzPihjdWx0dXJlcyksXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gaTE4bmV4dDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZSB0cmFuc2xhdGlvbiBmb3IgZ2l2ZW4ga2V5IGluIHRoZSBjdXJyZW50bHkgY29uZmlndXJlZCBsYW5ndWFnZVxyXG4gKiBAcGFyYW0ga2V5IGN1bHR1cmUgcmVzb3VyY2Uga2V5XHJcbiAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCBrZXkvdmFsdWVzIGZvciBpbnRlcnBvbGF0aW9uIG9mIGR5bmFtaWMgdmFsdWVzXHJcbiAqL1xyXG5jb25zdCB0cmFuc2xhdGUgPSAoa2V5OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiBzdHJpbmcgPT5cclxuICAgIGkxOG5leHQudChrZXksIG9wdGlvbnMpO1xyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlIHRyYW5zbGF0aW9uIGZvciBnaXZlbiBrZXkgaW4gdGhlIGN1cnJlbnRseSBjb25maWd1cmVkIGxhbmd1YWdlXHJcbiAqIEBwYXJhbSBrZXkgY3VsdHVyZSByZXNvdXJjZSBrZXlcclxuICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IGtleS92YWx1ZXMgZm9yIGludGVycG9sYXRpb24gb2YgZHluYW1pYyB2YWx1ZXNcclxuICovXHJcbmNvbnN0IHQgPSB0cmFuc2xhdGU7XHJcblxyXG4vLyAjZW5kcmVnaW9uIEZ1bmN0aW9uc1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gI3JlZ2lvbiBFeHBvcnRzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5leHBvcnQgY29uc3QgTG9jYWxpemF0aW9uVXRpbHMgPSB7XHJcbiAgICBjaGFuZ2VDdWx0dXJlQ29kZSxcclxuICAgIGN1bHR1cmVDb2RlRnJvbVF1ZXJ5U3RyaW5nLFxyXG4gICAgY3VsdHVyZUZhY3RvcnksXHJcbiAgICBjdXJyZW50Q3VsdHVyZUNvZGUsXHJcbiAgICBkZWZhdWx0Q3VsdHVyZUNvZGUsXHJcbiAgICBkZXRlY3RDdWx0dXJlQ29kZSxcclxuICAgIGVycm9yQ3VsdHVyZUlzUmVxdWlyZWQsXHJcbiAgICBpbml0aWFsaXplLFxyXG4gICAgcm91dGVQYXJhbSxcclxuICAgIHQsXHJcbiAgICB0cmFuc2xhdGUsXHJcbn07XHJcblxyXG4vLyAjZW5kcmVnaW9uIEV4cG9ydHNcclxuIl19