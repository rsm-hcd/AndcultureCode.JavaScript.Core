import { NavigatorConnection } from "../interfaces/navigator-connection";
import { NetworkConnection } from "../interfaces/network-connection";
import { Navigator } from "../types/navigator";

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

/**
 * Returns a NavigatorConnection object if one exists
 */
const getNavigatorConnection = (): NavigatorConnection | undefined => {
    const navigator = getWindowNavigator();

    return (
        navigator.connection ??
        navigator.mozConnection ??
        navigator.webkitConnection ??
        undefined
    );
};

/**
 * Returns a `NetworkConnection` object which is an aggregate of `navigator.connection` and `navigator.onLine`
 */
const getNetworkConnection = (): NetworkConnection => {
    const { onLine: isOnline } = getWindowNavigator();
    const navigatorConnection = getNavigatorConnection() ?? {};

    return {
        ...navigatorConnection,
        isOnline,
    };
};

const getWindowNavigator = (): Navigator => window.navigator;

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export const NetworkInformationUtils = {
    getNavigatorConnection,
    getNetworkConnection,
    getWindowNavigator,
};

// #endregion Exports
