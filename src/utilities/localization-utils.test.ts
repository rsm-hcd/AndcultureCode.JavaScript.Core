import i18n from "i18next";
import { LocalizationUtils } from "./localization-utils";
import { Rfc4646LanguageCodes } from "../constants/rfc4646-language-codes";
import faker from "faker";

describe("LocalizationUtils", () => {
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
            "given cultureCode of $cultureCode, sets global language",
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

    //#endregion changeCultureCode

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
            const expected = faker.random.locale();
            window.location = {
                search: `${LocalizationUtils.routeParam}=${expected}`,
            } as any;

            // Act
            const result = LocalizationUtils.cultureCodeFromQueryString();

            // Assert
            expect(result).toBe(expected);
        });
    });

    //#endregion cultureCodeFromQueryString

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

    //#endregion currentCultureCode

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

    //#endregion defaultCultureCode

    // -----------------------------------------------------------------------------------------
    // #region detectCultureCode
    // -----------------------------------------------------------------------------------------

    describe("detectCultureCode", () => {
        test.skip("TODO", () => {});
    });

    //#endregion detectCultureCode

    // -----------------------------------------------------------------------------------------
    // #region initialize
    // -----------------------------------------------------------------------------------------

    describe("initialize", () => {
        test.skip("TODO", () => {});
    });

    //#endregion initialize
});
