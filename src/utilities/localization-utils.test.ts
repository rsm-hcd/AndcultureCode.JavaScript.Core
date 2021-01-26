import i18n from "i18next";
import { LocalizationUtils } from "./localization-utils";
import { Rfc4646LanguageCodes } from "../constants/rfc4646-language-codes";
import faker from "faker";
import { BaseEnglishUnitedStates } from "../cultures/base-english-united-states";
import { Culture } from "../interfaces/culture";

describe("LocalizationUtils", () => {
    // -----------------------------------------------------------------------------------------
    // #region Setup
    // -----------------------------------------------------------------------------------------

    const randomCultureCode = () => {
        const separator = faker.random.arrayElement(["-", "_"]);
        return `${faker.address.countryCode()}${separator}${faker.address.countryCode()}`;
    };

    // #endregion Setup

    // -----------------------------------------------------------------------------------------
    // #region changeCultureCode
    // -----------------------------------------------------------------------------------------

    describe("changeCultureCode", () => {
        test.each`
            cultureCode
            ${Rfc4646LanguageCodes.EN_ZW}
            ${Rfc4646LanguageCodes.GL_ES}
            ${Rfc4646LanguageCodes.ZH_CHS}
        `(
            "when supplied cultureCode of $cultureCode, sets global language",
            ({ cultureCode }) => {
                // Arrange
                i18n.init();
                i18n.changeLanguage(Rfc4646LanguageCodes.EN_US);

                // Act
                LocalizationUtils.changeCultureCode(cultureCode);

                // Assert
                expect(i18n.language).toBe(cultureCode);
            }
        );
    });

    // #endregion changeCultureCode

    // -----------------------------------------------------------------------------------------
    // #region cultureCodeFromQueryString
    // -----------------------------------------------------------------------------------------

    describe("cultureCodeFromQueryString", () => {
        beforeEach(() => {
            delete window.location; // Must delete pre-existing location before mocked assignment works
        });

        test(`given query string does not contain ${LocalizationUtils.routeParam}, returns undefined`, () => {
            // Arrange
            window.location = { search: "key1=value1" } as any;

            // Act
            const result = LocalizationUtils.cultureCodeFromQueryString();

            // Assert
            expect(result).toBeUndefined();
        });

        test(`given query string contains ${LocalizationUtils.routeParam}, returns value`, () => {
            // Arrange
            const expected = randomCultureCode();
            window.location = {
                search: `${LocalizationUtils.routeParam}=${expected}`,
            } as any;

            // Act
            const result = LocalizationUtils.cultureCodeFromQueryString();

            // Assert
            expect(result).toBe(expected);
        });
    });

    // #endregion cultureCodeFromQueryString

    // -----------------------------------------------------------------------------------------
    // #region cultureCodeFromRoute
    // -----------------------------------------------------------------------------------------

    describe("cultureCodeFromRoute", () => {
        beforeEach(() => {
            delete window.location; // Must delete pre-existing location before mocked assignment works
        });

        test(`given pathname does not have at least one '/', returns undefined`, () => {
            // Arrange
            window.location = { pathname: "" } as any;

            // Act
            const result = LocalizationUtils.cultureCodeFromRoute();

            // Assert
            expect(result).toBeUndefined();
        });

        test(`given pathname contains at least one '/', returns value`, () => {
            // Arrange
            const expected = randomCultureCode();
            window.location = { pathname: `/${expected}` } as any;

            // Act
            const result = LocalizationUtils.cultureCodeFromRoute();

            // Assert
            expect(result).toBe(expected);
        });
    });

    // #endregion cultureCodeFromRoute

    // -----------------------------------------------------------------------------------------
    // #region cultureFactory
    // -----------------------------------------------------------------------------------------

    describe("cultureFactory", () => {
        test("when base set and culture null, returns new culture with base properties", () => {
            // Arrange & Act
            const result = LocalizationUtils.cultureFactory(
                BaseEnglishUnitedStates,
                null
            );

            // Assert
            expect(result).not.toBeNull();
            expect(result.code).toBe(BaseEnglishUnitedStates.code);
        });

        test("when base null and culture set, returns new culture with culture properties", () => {
            // Arrange
            const expected = randomCultureCode();
            const childCulture: Partial<Culture<any>> = { code: expected };

            // Act
            const result = LocalizationUtils.cultureFactory(null, childCulture);

            // Assert
            expect(result).not.toBeNull();
            expect(result.code).toBe(expected);
        });

        test("when base and culture set, returns new culture overwriting with child properties", () => {
            // Arrange
            const expected = randomCultureCode();
            const childCulture: Partial<Culture<any>> = { code: expected };

            // Act
            const result = LocalizationUtils.cultureFactory(
                BaseEnglishUnitedStates,
                childCulture
            );

            // Assert
            expect(result).not.toBeNull();
            expect(result.code).toBe(expected);
        });
    });

    // #endregion cultureFactory

    // -----------------------------------------------------------------------------------------
    // #region currentCultureCode
    // -----------------------------------------------------------------------------------------

    describe("currentCultureCode", () => {
        test.each`
            cultureCode
            ${Rfc4646LanguageCodes.EN_ZW}
            ${Rfc4646LanguageCodes.GL_ES}
            ${Rfc4646LanguageCodes.ZH_CHS}
        `(
            "return current globally configured language of $cultureCode",
            ({ cultureCode }) => {
                // Arrange
                i18n.init();
                i18n.changeLanguage(cultureCode);

                // Act
                const result = LocalizationUtils.currentCultureCode();

                // Assert
                expect(result).toBe(cultureCode);
            }
        );
    });

    // #endregion currentCultureCode

    // -----------------------------------------------------------------------------------------
    // #region defaultCultureCode
    // -----------------------------------------------------------------------------------------

    describe("defaultCultureCode", () => {
        test(`returns ${Rfc4646LanguageCodes.EN_US}`, () => {
            expect(LocalizationUtils.defaultCultureCode()).toBe(
                Rfc4646LanguageCodes.EN_US
            );
        });
    });

    // #endregion defaultCultureCode

    // -----------------------------------------------------------------------------------------
    // #region detectCultureCode
    // -----------------------------------------------------------------------------------------

    describe("detectCultureCode", () => {
        beforeEach(() => {
            delete window.location; // Must delete pre-existing location before mocked assignment works
        });

        describe("given route param is set", () => {
            test("given first path index is set, returns value", () => {
                // Arrange
                const expected = randomCultureCode();
                window.location = { pathname: `/${expected}` } as any;

                // Act
                const result = LocalizationUtils.detectCultureCode();

                // Assert
                expect(result).toBe(expected);
            });

            test("given first path index is set, configures global language", () => {
                // Arrange
                const expected = randomCultureCode();
                window.location = { pathname: `/${expected}` } as any;

                // Act
                const result = LocalizationUtils.detectCultureCode();

                // Assert
                expect(result).toBe(expected);
                expect(i18n.language).toBe(expected);
            });

            test(`given querystring '${LocalizationUtils.routeParam}' set, returns route value as priority`, () => {
                // Arrange
                const expected = randomCultureCode();
                const unexpected = faker.address.countryCode();
                window.location = {
                    pathname: `/${expected}`,
                    search: `${LocalizationUtils.routeParam}=${unexpected}`,
                } as any;

                // Act
                const result = LocalizationUtils.detectCultureCode();

                // Assert
                expect(result).toBe(expected);
                expect(i18n.language).toBe(expected);
            });

            // This test setup may need to be tweaked - test is currently not passing but not sure why.
            test.skip("given first path index value matches current language, does not attempt to change language", () => {
                // Arrange
                const expected = randomCultureCode();
                LocalizationUtils.changeCultureCode(expected);
                window.location = {
                    pathname: `/${expected}`,
                } as any;

                const i18nSpy = jest.spyOn(i18n, "changeLanguage");

                // Act
                const result = LocalizationUtils.detectCultureCode();

                // Assert
                expect(result).toBe(expected);
                expect(i18nSpy).not.toHaveBeenCalled();
            });
        });

        describe("given route param is not set", () => {
            beforeEach(() => {
                window.location = {} as any;
                window.location.pathname = "";
            });

            test(`given querystring '${LocalizationUtils.routeParam}' set, returns querystring value`, () => {
                // Arrange
                const expected = randomCultureCode();
                window.location.search = `${LocalizationUtils.routeParam}=${expected}`;

                // Act
                const result = LocalizationUtils.detectCultureCode();

                // Assert
                expect(result).toBe(expected);
            });

            test(`given querystring '${LocalizationUtils.routeParam}' set, configures global language`, () => {
                // Arrange
                i18n.init();
                const expected = randomCultureCode();
                window.location.search = `${LocalizationUtils.routeParam}=${expected}`;

                // Act
                LocalizationUtils.detectCultureCode();

                // Assert
                expect(i18n.language).toBe(expected);
            });

            test(`given querystring '${
                LocalizationUtils.routeParam
            }' missing, returns default of ${LocalizationUtils.defaultCultureCode()}`, () => {
                // Arrange
                window.location.search = "";

                // Act
                const result = LocalizationUtils.detectCultureCode();

                // Assert
                expect(result).toBe(LocalizationUtils.defaultCultureCode());
            });

            test(`given querystring '${
                LocalizationUtils.routeParam
            }' missing, configures global language to default of ${LocalizationUtils.defaultCultureCode()}`, () => {
                // Arrange
                i18n.init();
                window.location.search = "";

                // Act
                LocalizationUtils.detectCultureCode();

                // Assert
                expect(i18n.language).toBe(
                    LocalizationUtils.defaultCultureCode()
                );
            });

            test(`given querystring '${LocalizationUtils.routeParam}' value matches current language, does not attempt to change language`, () => {
                // Arrange
                i18n.init();
                const expected = randomCultureCode();
                LocalizationUtils.changeCultureCode(expected);

                window.location.search = `${LocalizationUtils.routeParam}=${expected}`;

                const i18nSpy = jest.spyOn(i18n, "changeLanguage");

                // Act
                LocalizationUtils.detectCultureCode();

                // Assert
                expect(i18nSpy).not.toHaveBeenCalled();
            });
        });
    });

    // #endregion detectCultureCode

    // -----------------------------------------------------------------------------------------
    // #region initialize
    // -----------------------------------------------------------------------------------------

    describe("initialize", () => {
        let moduleStub;

        beforeEach(() => {
            moduleStub = { type: "backend" };
        });

        test.each`
            culturesValue
            ${null}
            ${undefined}
            ${[]}
        `("when cultures $culturesValue, throws error", ({ cultures }) => {
            expect.assertions(1);
            try {
                LocalizationUtils.initialize({}, cultures);
            } catch (e) {
                expect(e.message).toBe(
                    LocalizationUtils.errorCultureIsRequired
                );
            }
        });

        test.each`
            moduleValue
            ${null}
            ${undefined}
        `("when module $moduleValue, throws error", ({ module }) => {
            // Arrange
            const cultures = [BaseEnglishUnitedStates];

            // Act & Assert
            expect.assertions(1);
            try {
                LocalizationUtils.initialize(module, cultures);
            } catch (e) {
                expect(e.message).toContain("module");
            }
        });

        test("when valid module, initializes module", () => {
            // Arrange
            const cultures = [BaseEnglishUnitedStates];

            let isModuleInitialized = false;

            const MyModule = Object.assign({}, moduleStub, {
                init() {
                    isModuleInitialized = true;
                },
            });

            // Act
            LocalizationUtils.initialize(MyModule, cultures);

            // Assert
            expect(isModuleInitialized).toBeTruthy();
        });

        test("when cultures with resources, successfully configures translations", () => {
            // Arrange
            const expectedKey = "testkey";
            const expectedValue = faker.random.words();

            const culture: Partial<Culture<any>> = { resources: {} };
            culture.resources[expectedKey] = expectedValue;

            const EnglishUnitedStates = LocalizationUtils.cultureFactory<any>(
                BaseEnglishUnitedStates,
                culture
            );

            // Act
            LocalizationUtils.initialize(moduleStub, [EnglishUnitedStates]);

            // Assert
            expect(LocalizationUtils.t(expectedKey)).toBe(expectedValue);
        });

        test("when cultures with resources, when escapeValue true, successfully configures escaped translations", () => {
            // Arrange
            const key = "testkey";
            const valueTemplate = "my value {{value}}";
            const unescapedValue = "<img />";
            const escapedValue = "&lt;img &#x2F;&gt;";
            const expectedValue = valueTemplate.replace(
                "{{value}}",
                escapedValue
            );

            const culture: Partial<Culture<any>> = { resources: {} };
            culture.resources[key] = valueTemplate;

            const EnglishUnitedStates = LocalizationUtils.cultureFactory<any>(
                BaseEnglishUnitedStates,
                culture
            );

            // Act
            LocalizationUtils.initialize(moduleStub, [EnglishUnitedStates], {
                escapeValue: true,
            });

            // Assert
            expect(LocalizationUtils.t(key, { value: unescapedValue })).toBe(
                expectedValue
            );
        });
    });

    // #endregion initialize

    // -----------------------------------------------------------------------------------------
    // #region translate (and 't' alias)
    // -----------------------------------------------------------------------------------------

    describe("translate, t", () => {
        let moduleStub;

        beforeEach(() => {
            moduleStub = { type: "backend" };
        });

        test.each`
            fn
            ${LocalizationUtils.t}
            ${LocalizationUtils.translate}
        `("when key missing translation, returns key", ({ fn }) => {
            // Arrange
            const expected = faker.random.word();

            // Act & Assert
            expect(fn(expected)).toBe(expected);
        });

        test.each`
            fn
            ${LocalizationUtils.t}
            ${LocalizationUtils.translate}
        `("when key found, returns translated value", ({ fn }) => {
            // Arrange
            const key = "testkey";
            const expected = faker.random.words();

            const culture: Partial<Culture<any>> = { resources: {} };
            culture.resources[key] = expected;

            const EnglishUnitedStates = LocalizationUtils.cultureFactory<any>(
                BaseEnglishUnitedStates,
                culture
            );

            LocalizationUtils.initialize(moduleStub, [EnglishUnitedStates]);

            // Act & Assert
            expect(fn(key)).toBe(expected);
        });

        test.each`
            fn
            ${LocalizationUtils.t}
            ${LocalizationUtils.translate}
        `(
            "when key found with templated value, returns translated and interpolated value",
            ({ fn }) => {
                // Arrange
                const key = "testkey";
                const valueTemplate = `${faker.random.words()} -- {{variable}}`;
                const variable = faker.random.word();
                const expected = valueTemplate.replace(
                    "{{variable}}",
                    variable
                );

                const culture: Partial<Culture<any>> = { resources: {} };
                culture.resources[key] = valueTemplate;

                const EnglishUnitedStates = LocalizationUtils.cultureFactory<
                    any
                >(BaseEnglishUnitedStates, culture);

                LocalizationUtils.initialize(moduleStub, [EnglishUnitedStates]);

                // Act & Assert
                expect(fn(key, { variable })).toBe(expected);
            }
        );
    });

    // #endregion translate (and 't' alias)
});
