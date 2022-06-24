import { NavigatorConnectionVariant } from "../enumerations/navigator-connection-variant";
import buildNetworkInformationUtils, {
    NetworkInformationUtils,
} from "./network-information-utils";

const buildMockWindow = (navigator?: Navigator) => {
    return { navigator } as Window & typeof globalThis;
};

const buildMockNavigator = (
    connectionProperty?: string,
    onLine: boolean = false
): Navigator => {
    const isOnline = onLine ?? navigator.onLine;

    if (connectionProperty != null) {
        return {
            ...navigator,
            onLine: isOnline,
            [connectionProperty]: {},
        };
    }

    return { ...navigator, onLine: isOnline };
};

const setupSut = (options?: {
    buildNavigator?: boolean;
    buildWindow?: boolean;
    connectionProperty?: string;
    onLine?: boolean;
}): typeof NetworkInformationUtils => {
    const {
        buildNavigator = true,
        buildWindow = true,
        connectionProperty,
        onLine = false,
    } = options ?? {};

    const navigator = buildNavigator
        ? buildMockNavigator(connectionProperty, onLine)
        : undefined;

    const window = buildWindow ? buildMockWindow(navigator) : undefined;

    return buildNetworkInformationUtils(window);
};

describe("NetworkInformationUtils", () => {
    // -----------------------------------------------------------------------------------------
    // #region getNavigatorConnection
    // -----------------------------------------------------------------------------------------

    describe("getNavigatorConnection()", () => {
        test.each`
            connectionProperty
            ${NavigatorConnectionVariant.Standard}
            ${NavigatorConnectionVariant.Mozilla}
            ${NavigatorConnectionVariant.Webkit}
        `(
            "when window.navigator has $connectionProperty, it returns connection",
            ({ connectionProperty }) => {
                // Arrange
                const sut = setupSut({ connectionProperty });

                // Act
                const navigatorConnection = sut.getNavigatorConnection();

                // Assert
                expect(navigatorConnection).not.toBeUndefined();
            }
        );

        test("when window.navigator is undefined, it returns undefined", () => {
            // Arrange
            const sut = setupSut({ buildNavigator: false });

            // Act
            const connection = sut.getNavigatorConnection();

            // Assert
            expect(connection).toBeUndefined();
        });

        test("when window is undefined, it returns undefined", () => {
            // Arrange
            const sut = setupSut({ buildWindow: false });

            // Act
            const connection = sut.getNavigatorConnection();

            // Assert
            expect(connection).toBeUndefined();
        });

        test("when window.navigator does not have a known connection property, it returns undefined", () => {
            // Arrange
            const sut = setupSut();

            // Act
            const connection = sut.getNavigatorConnection();

            // Assert
            expect(connection).toBeUndefined();
        });
    });

    // #endregion getNavigatorConnection

    // -----------------------------------------------------------------------------------------
    // #region getNetworkConnection
    // -----------------------------------------------------------------------------------------

    describe("getNetworkConnection()", () => {
        test("when navigator has no connection, it returns a value", () => {
            // Arrange
            const sut = setupSut();

            // Act
            const networkConnection = sut.getNetworkConnection();

            // Assert
            expect(networkConnection).toBeDefined();
        });

        test("when navigator has a connection, it returns a value", () => {
            // Arrange
            const sut = setupSut({
                connectionProperty: NavigatorConnectionVariant.Standard,
            });

            // Act
            const networkConnection = sut.getNetworkConnection();

            // Assert
            expect(networkConnection).toBeDefined();
        });

        test.each`
            onLine
            ${false}
            ${true}
        `(
            "when window.navigator onLine is $onLine, isOnline is $onLine",
            ({ onLine }) => {
                // Arrange
                const sut = setupSut({ onLine });

                // Act
                const networkConnection = sut.getNetworkConnection();

                // Assert
                expect(networkConnection?.isOnline).toEqual(onLine);
            }
        );

        test("when navigator is undefined, it returns undefined", () => {
            // Arrange
            const sut = setupSut({ buildNavigator: false });

            // Act
            const networkConnection = sut.getNetworkConnection();

            // Assert
            expect(networkConnection).toBeUndefined();
        });

        describe("when window is undefined, it returns undefined", () => {
            // Arrange
            const sut = setupSut({ buildWindow: false });

            // Act
            const networkConnection = sut.getNetworkConnection();

            // Assert
            expect(networkConnection).toBeUndefined();
        });
    });

    // #endregion getNetworkConnection
});
