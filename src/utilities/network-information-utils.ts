import { NetworkConnection } from "../interfaces/network-connection";

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

const getNavigatorConnection = ():
    | Exclude<NetworkConnection, "isOnline">
    | undefined => {
    if ("connection" in window.navigator) {
        return (window.navigator as any).connection;
    }

    if ("mozConnection" in window.navigator) {
        return (window.navigator as any).mozConnection;
    }

    if ("webkitConnection" in window.navigator) {
        return (window.navigator as any).webkitConnection;
    }

    return undefined;
};

const getNetworkConnection = (): NetworkConnection => {
    const { onLine: isOnline } = window.navigator;
    const navigatorConnection = getNavigatorConnection() ?? {};

    return {
        ...navigatorConnection,
        isOnline,
    };
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
