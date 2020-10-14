import { ScrollUtils, DefaultScrollOptions } from "./scroll-utils";
import faker from "faker";

describe("ScrollUtils", () => {
    // -----------------------------------------------------------------------------------------
    // #region scrollToElementById
    // -----------------------------------------------------------------------------------------
    describe("scrollToElementById", () => {
        it("when element is retrieved, then attempts to scroll", () => {
            //Arrange
            const element = document.createElement("div");
            const scrollIntoViewMock = jest.fn();
            element.scrollIntoView = scrollIntoViewMock;
            jest.spyOn(document, "getElementById").mockImplementation(
                () => element
            );
            const elementId = faker.random.uuid();

            // Act
            ScrollUtils.scrollToElementById(elementId);

            // Assert
            expect(scrollIntoViewMock).toBeCalled();
        });

        test("when element is not found, it attempts to retrieve the element up to 50 times", () => {
            //Arrange
            const elementId = faker.random.uuid();
            const getElementByIdMock = jest.spyOn(document, "getElementById");

            // Act
            jest.useFakeTimers();
            ScrollUtils.scrollToElementById(elementId);
            jest.runAllTimers();

            // Assert
            expect(getElementByIdMock).toBeCalledTimes(50);
        });
    });
    // #endregion scrollToElementById

    // -----------------------------------------------------------------------------------------
    // #region scrollToHash
    // -----------------------------------------------------------------------------------------
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

        it("when location hash has value, then calls scrollToElementById", () => {
            // Arrange
            const location: any = { hash: "#test" };
            const scrollToElementByIdSpy = jest.spyOn(
                ScrollUtils,
                "scrollToElementById"
            );

            // Act
            ScrollUtils.scrollToHash(location);

            // Assert
            expect(scrollToElementByIdSpy).toBeCalled();
        });
    });

    // #endregion scrollToHash
});
