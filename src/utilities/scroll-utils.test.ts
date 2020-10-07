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

        test("when element is not found after 50 attempts, it logs a console warning for development environment", () => {
            //Arrange
            const elementId = faker.random.uuid();
            process.env.NODE_ENV = "development";
            const consoleWarnMock = jest.spyOn(console, "warn");

            // Act
            jest.useFakeTimers();
            ScrollUtils.scrollToElementById(elementId);
            jest.runAllTimers();

            // Assert
            expect(consoleWarnMock).toBeCalled();
        });

        test("when scrollOption has initial delay, it calls setTimeout with supplied delay", () => {
            //Arrange
            const options = { initialDelay: 200 };
            const elementId = faker.random.uuid();
            const setTimeoutMock = jest.spyOn(window, "setTimeout");

            // Act
            ScrollUtils.scrollToElementById(elementId, options);

            // Assert
            expect(setTimeoutMock).toBeCalled();
            expect(setTimeoutMock.mock.calls[0][1]).toBe(options.initialDelay);
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

        test.each`
            location
            ${null}
            ${undefined}
        `(
            "when location is '$location', it does not scroll",
            ({ location }) => {
                // Arrange
                const scrollToElementByIdSpy = jest.spyOn(
                    ScrollUtils,
                    "scrollToElementById"
                );

                // Act
                ScrollUtils.scrollToHash(location);

                // Assert
                expect(scrollToElementByIdSpy).not.toBeCalled();
            }
        );

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
