import { NetworkType } from "../enumerations/network-type";
import { NetworkEffectiveType } from "../enumerations/network-effective-type";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface NavigatorConnection extends Partial<EventTarget> {
    /**
     * Returns the effective bandwidth estimate in megabits per second, rounded to the nearest multiple of 25 kilobits per seconds.
     */
    downlink?: number;

    /**
     * Returns the maximum downlink speed, in megabits per second (Mbps), for the underlying connection technology.
     */
    downlinkMax?: number;

    /**
     * Returns the effective type of the connection meaning one of 'slow-2g', '2g', '3g', or '4g'.
     * This value is determined using a combination of recently observed round-trip time and downlink values.
     */
    effectiveType?: NetworkEffectiveType;

    /**
     * Returns the estimated effective round-trip time of the current connection, rounded to the
     * nearest multiple of 25 milliseconds.
     */
    rtt?: number;

    /**
     * Returns true if the user has set a reduced data usage option on the user agent.
     */
    saveData?: boolean;

    /**
     * Returns the type of connection a device is using to communicate with the network
     */
    type?: NetworkType;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export { NavigatorConnection };

// #endregion Export
