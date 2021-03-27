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
        const connectionGetter = jest.spyOn(window, "navigator", "get");

        const connection =
            connectionPropertyName != null
                ? {
                      [connectionPropertyName]: {},
                  }
                : {};

        connectionGetter.mockReturnValue(({
            ...connection,
            onLine,
        } as unknown) as Navigator);
    };

    // #endregion Mocks

    // -----------------------------------------------------------------------------------------
    // #region getNavigatorConnection
    // -----------------------------------------------------------------------------------------

    describe("getNavigatorConnection", () => {
        test("window.navigator has connection, it returns connection", () => {
            // Arrange
            mockWindowNavigator({ connectionProperty: "connection" });

            // Act
            const connection = NetworkInformationUtils.getNavigatorConnection();

            // Assert
            expect(connection).not.toBeUndefined();
        });

        test("window.navigator has mozConnection, it returns connection", () => {
            // Arrange
            mockWindowNavigator({ connectionProperty: "mozConnection" });

            // Act
            const connection = NetworkInformationUtils.getNavigatorConnection();

            // Assert
            expect(connection).not.toBeUndefined();
        });

        test("window.navigator has webkitConnection, it returns connection", () => {
            // Arrange
            mockWindowNavigator({ connectionProperty: "webkitConnection" });

            // Act
            const connection = NetworkInformationUtils.getNavigatorConnection();

            // Assert
            expect(connection).not.toBeUndefined();
        });

        test("window.navigator does not have connection, mozConnection nor webkitConnection, it returns undefined", () => {
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
            const connection = NetworkInformationUtils.getNetworkConnection();

            // Assert
            expect(connection).toBeDefined();
        });

        test("getConnection has value, it returns a value", () => {
            // Arrange
            mockWindowNavigator({ connectionProperty: "connection" });

            // Act
            const connection = NetworkInformationUtils.getNetworkConnection();

            // Assert
            expect(connection).toBeDefined();
        });

        test("window.navigator onLine is false, isOnline is false", () => {
            // Arrange
            mockWindowNavigator({ onLine: false });

            // Act
            const connection = NetworkInformationUtils.getNetworkConnection();

            // Assert
            expect(connection.isOnline).toEqual(false);
        });

        test("window.navigator onLine is true, isOnline is true", () => {
            // Arrange
            mockWindowNavigator({ onLine: true });

            // Act
            const connection = NetworkInformationUtils.getNetworkConnection();

            // Assert
            expect(connection.isOnline).toEqual(true);
        });
    });

    // #endregion getNetworkConnection
});
