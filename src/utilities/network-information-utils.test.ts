import { NavigatorConnectionVariants } from "../enumerations/navigator-connection-variants";
import { NetworkInformationUtils } from "./network-information-utils";

describe("NetworkInformationUtils", () => {
    // -----------------------------------------------------------------------------------------
    // #region Mocks
    // -----------------------------------------------------------------------------------------

    const mockWindowNavigator = (options?: {
        connectionProperty?: string;
        onLine?: boolean;
    }): void => {
        const { connectionProperty: connectionPropertyName, onLine = false } =
            options ?? {};

        const connection =
            connectionPropertyName != null
                ? {
                      [connectionPropertyName]: {},
                  }
                : {};

        const mockedNavigatorValue = ({
            ...connection,
            onLine,
        } as unknown) as Navigator;

        jest.clearAllMocks();
        jest.spyOn(window, "navigator", "get").mockReturnValue(
            mockedNavigatorValue
        );
    };

    // #endregion Mocks

    // -----------------------------------------------------------------------------------------
    // #region getNavigatorConnection
    // -----------------------------------------------------------------------------------------

    describe("getNavigatorConnection", () => {
        test.each`
            connectionProperty
            ${NavigatorConnectionVariants.Standard}
            ${NavigatorConnectionVariants.Mozilla}
            ${NavigatorConnectionVariants.Webkit}
        `(
            "window.navigator has $connectionProperty, it returns connection",
            ({ connectionProperty }) => {
                // Arrange
                mockWindowNavigator({ connectionProperty });

                // Act
                const navigatorConnection = NetworkInformationUtils.getNavigatorConnection();

                // Assert
                expect(navigatorConnection).not.toBeUndefined();
            }
        );

        test("window.navigator does not have a known connection property, it returns undefined", () => {
            // Arrange
            mockWindowNavigator();

            // Act
            const connection = NetworkInformationUtils.getNavigatorConnection();

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
            mockWindowNavigator();

            // Act
            const networkConnection = NetworkInformationUtils.getNetworkConnection();

            // Assert
            expect(networkConnection).toBeDefined();
        });

        test("getConnection has value, it returns a value", () => {
            // Arrange
            mockWindowNavigator({
                connectionProperty: NavigatorConnectionVariants.Standard,
            });

            // Act
            const networkConnection = NetworkInformationUtils.getNetworkConnection();

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
                mockWindowNavigator({ onLine });

                // Act
                const networkConnection = NetworkInformationUtils.getNetworkConnection();

                // Assert
                expect(networkConnection.isOnline).toEqual(onLine);
            }
        );
    });

    // #endregion getNetworkConnection
});
