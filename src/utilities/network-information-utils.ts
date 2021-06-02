import { NetworkConnection } from "../interfaces/network-connection";
import { NetworkInformation } from "../interfaces/network-information";
import { Navigator } from "../types/navigator";

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

export default function buildNetworkInformationUtils(window?: Window) {
    const navigator: Navigator | undefined = window?.navigator;

    return {
        /**
         * Returns a NavigatorConnection object if one exists
         */
        getNavigatorConnection(): NetworkInformation | undefined {
            return (
                navigator?.connection ??
                navigator?.mozConnection ??
                navigator?.webkitConnection ??
                undefined
            );
        },

        /**
         * Returns a `NetworkConnection` object which is an aggregate of `navigator.connection` and `navigator.onLine`
         */
        getNetworkConnection(): NetworkConnection | undefined {
            if (navigator == null) {
                return undefined;
            }

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
    typeof window !== "undefined" ? window : undefined
);

// #endregion Exports
