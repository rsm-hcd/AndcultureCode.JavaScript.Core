import { NavigatorConnection } from "../interfaces/navigator-connection";
import {
    MozillaNavigator,
    StandardNavigator,
    WebkitNavigator,
} from "../interfaces/navigator";
import { NetworkConnection } from "../interfaces/network-connection";
import { NavigatorConnectionVariants } from "../enumerations/navigator-connection-variants";

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

/**
 * Returns a NavigatorConnection object if one exists
 */
const getNavigatorConnection = (): NavigatorConnection | undefined => {
    if (isStandardNavigator(window.navigator)) {
        return window.navigator.connection;
    }

    if (isMozillaNavigator(window.navigator)) {
        return window.navigator.mozConnection;
    }

    if (isWebkitNavigator(window.navigator)) {
        return window.navigator.webkitConnection;
    }

    return undefined;
};

/**
 * Returns a `NetworkConnection` object which is an aggregate of `navigator.connection` and `navigator.onLine`
 */
const getNetworkConnection = (): NetworkConnection => {
    const { onLine: isOnline } = window.navigator;
    const navigatorConnection = getNavigatorConnection() ?? {};

    return {
        ...navigatorConnection,
        isOnline,
    };
};

const isMozillaNavigator = (navigator: any): navigator is MozillaNavigator => {
    return navigator[NavigatorConnectionVariants.Mozilla] != null;
};

const isStandardNavigator = (
    navigator: any
): navigator is StandardNavigator => {
    return navigator[NavigatorConnectionVariants.Standard] != null;
};

const isWebkitNavigator = (navigator: any): navigator is WebkitNavigator => {
    return navigator[NavigatorConnectionVariants.Webkit] != null;
};

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export const NetworkInformationUtils = {
    getNavigatorConnection,
    getNetworkConnection,
};

// #endregion Exports
