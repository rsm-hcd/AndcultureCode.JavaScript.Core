import { NavigatorConnection } from "../interfaces/navigator-connection";
import { Navigator } from "../types/navigator";

// -----------------------------------------------------------------------------------------
// #region Type Declarations
// -----------------------------------------------------------------------------------------

type NavigatorExtended = Navigator & {
    connection?: NavigatorConnection;
    mozConnection?: NavigatorConnection;
    onLine: boolean;
    webkitConnection?: NavigatorConnection;
};

type WindowExtended = Window &
    typeof globalThis & {
        navigator: NavigatorExtended;
    };

declare const window: WindowExtended;

// #endregion Type Declarations

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

export default function buildNetworkInformationUtils(
    navigator: NavigatorExtended
) {
    return {
        /**
         * Returns a NavigatorConnection object if one exists
         */
        getNavigatorConnection(): NavigatorConnection | undefined {
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
