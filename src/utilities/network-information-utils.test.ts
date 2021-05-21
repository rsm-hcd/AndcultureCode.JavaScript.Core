import { NavigatorConnectionVariant } from "../enumerations/navigator-connection-variant";
import buildNetworkInformationUtils, {
    NetworkInformationUtils,
} from "./network-information-utils";

const setupSut = (options?: {
    connectionProperty?: string;
    onLine?: boolean;
}): typeof NetworkInformationUtils => {
    const { connectionProperty, onLine = false } = options ?? {};

    const withConnectionProperty =
        connectionProperty != null
            ? {
                  [connectionProperty]: {},
              }
            : {};

    const navigator = {
        ...withConnectionProperty,
        onLine,
    } as Navigator;

    return buildNetworkInformationUtils(navigator);
};

describe("NetworkInformationUtils", () => {
    // -----------------------------------------------------------------------------------------
    // #region getNavigatorConnection
    // -----------------------------------------------------------------------------------------

    describe("getNavigatorConnection", () => {
        test.each`
            connectionProperty
            ${NavigatorConnectionVariant.Standard}
            ${NavigatorConnectionVariant.Mozilla}
            ${NavigatorConnectionVariant.Webkit}
        `(
            "window.navigator has $connectionProperty, it returns connection",
            ({ connectionProperty }) => {
                // Arrange
                const sut = setupSut({ connectionProperty });

                // Act
                const navigatorConnection = sut.getNavigatorConnection();

                // Assert
                expect(navigatorConnection).not.toBeUndefined();
            }
        );

        test("window.navigator does not have a known connection property, it returns undefined", () => {
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

    describe("getNetworkConnection", () => {
        test("getConnection is undefined, it returns a value", () => {
            // Arrange
            const sut = setupSut();

            // Act
            const networkConnection = sut.getNetworkConnection();

            // Assert
            expect(networkConnection).toBeDefined();
        });

        test("getConnection has value, it returns a value", () => {
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
            "window.navigator onLine is $onLine, isOnline is $onLine",
            ({ onLine }) => {
                // Arrange
                const sut = setupSut({ onLine });

                // Act
                const networkConnection = sut.getNetworkConnection();

                // Assert
                expect(networkConnection.isOnline).toEqual(onLine);
            }
        );
    });

    // #endregion getNetworkConnection
});
