import { NetworkInformation } from "../interfaces/network-information";
import { Navigator } from "../types/navigator";

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

export default function buildNetworkInformationUtils(navigator: Navigator) {
    return {
        /**
         * Returns a NavigatorConnection object if one exists
         */
        getNavigatorConnection(): NetworkInformation | undefined {
            return (
                navigator.connection ??
                navigator.mozConnection ??
                navigator.webkitConnection ??
                undefined
            );
        },

        /**
         * Returns a `NetworkConnection` object which is an aggregate of `navigator.connection` and `navigator.onLine`
         */
        getNetworkConnection() {
            const { onLine: isOnline } = navigator;
            const navigatorConnection = this.getNavigatorConnection() ?? {};

            return {
                ...navigatorConnection,
                isOnline,
            };
        },
    };
}

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export const NetworkInformationUtils = buildNetworkInformationUtils(
    window.navigator
);

// #endregion Exports
