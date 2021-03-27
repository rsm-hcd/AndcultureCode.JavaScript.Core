import { NetworkConnection } from "../interfaces/network-connection";

// -----------------------------------------------------------------------------------------
// #region Enums
// -----------------------------------------------------------------------------------------

export enum ConnectionVariants {
    Standard = "connection",
    Mozilla = "mozConnection",
    Webkit = "webkitConnection",
}

// #endregion Enums

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

const getNavigatorConnection = ():
    | Exclude<NetworkConnection, "isOnline">
    | undefined => {
    if (ConnectionVariants.Standard in window.navigator) {
        return (window.navigator as any).connection;
    }

    if (ConnectionVariants.Mozilla in window.navigator) {
        return (window.navigator as any).mozConnection;
    }

    if (ConnectionVariants.Webkit in window.navigator) {
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
