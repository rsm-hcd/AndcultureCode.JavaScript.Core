import { ScrollUtils } from "./scroll-utils";
import { expression } from "@babel/template";
import { doc } from "prettier";

describe("ScrollUtils", () => {

    describe("scrollToHash", () => {
        it("when location hash is empty, then returns", () => {
            // Arrange
            const location: any = { hash: "" };

            // Act
            const result = ScrollUtils.scrollToHash(location);

            // Assert
            expect(result).toBeUndefined();
        });

        it("when location is null, then returns", () => {
            // Arrange & Act
            const result = ScrollUtils.scrollToHash(null);

            // Assert
            expect(result).toBeUndefined();
        });

        it("when location is undefined, then returns", () => {
            // Arrange & Act
            const result = ScrollUtils.scrollToHash(undefined);

            // Assert
            expect(result).toBeUndefined();
        });

        it("when location hash has value, then attempts to retrieve element by id", () => {
            // Arrange
            const location: any = { hash: "#test" }
            const documentSpy = jest.spyOn(document, "getElementById");

            // Act
            ScrollUtils.scrollToHash(location);

            // Assert
            expect(documentSpy).toBeCalled();
        });

        it("when element is retrieved, then attempts to scroll", () => {
            // Arrange
            const element = document.createElement("div");
            element.setAttribute("id", "#test");
            const location: any = { hash: "#test" }
            const elementSpy: any = jest.spyOn(element, "scrollIntoView");

            // Act
            ScrollUtils.scrollToHash(location);

            // Assert
            expect(elementSpy).toBeCalled();
        });
    });
});
