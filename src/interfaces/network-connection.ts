import { NetworkInformation } from "./network-information";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface NetworkConnection extends NetworkInformation {
    /**
     * Returns a true or false indicating whether the browser is working online.
     */
    isOnline: boolean;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export { NetworkConnection };

// #endregion Export
