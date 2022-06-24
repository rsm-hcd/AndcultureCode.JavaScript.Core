import { BrowserUtils } from "./browser-utils";

describe("BrowserUtils", () => {
    afterEach(() => {
        // Clean up
        window.document.documentMode = undefined;
    });

    describe("isIE", () => {
        it("when window.document.documentMode is undefined, then returns false", () => {
            // Arrange
            window.document.documentMode = undefined;

            // Act
            const result = BrowserUtils.isIE();

            // Assert
            expect(result).toBeFalse();
        });

        it("when window.document.documentMode is truthy, then returns true", () => {
            // Arrange
            window.document.documentMode = true;

            // Act
            const result = BrowserUtils.isIE();

            // Assert
            expect(result).toBeTrue();
        });
    });

    describe("isNotIE", () => {
        it("when window.document.documentMode is undefined, then returns true", () => {
            // Arrange
            window.document.documentMode = undefined;

            // Act
            const result = BrowserUtils.isNotIE();

            // Assert
            expect(result).toBeTrue();
        });

        it("when window.document.documentMode is truthy, then returns false", () => {
            // Arrange
            window.document.documentMode = true;

            // Act
            const result = BrowserUtils.isNotIE();

            // Assert
            expect(result).toBeFalse();
        });
    });
});
