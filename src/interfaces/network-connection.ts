import { NetworkType } from "../enumerations/network-type";
import { NetworkEffectiveType } from "../enumerations/network-effective-type";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface NetworkConnection extends Partial<EventTarget> {
    downlink?: number;
    downlinkMax?: number;
    effectiveType?: NetworkEffectiveType;
    isOnline: boolean;
    saveData?: boolean;
    type?: NetworkType;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export { NetworkConnection };

// #endregion Export
