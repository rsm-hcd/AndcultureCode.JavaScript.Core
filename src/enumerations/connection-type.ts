/**
 * ConnectionType - Network Information API
 * - W3C Draft Community Group Report 11 May 2020
 * - https://wicg.github.io/netinfo/#connectiontype-enum
 */
enum ConnectionType {
    Bluetooth = "bluetooth",
    Cellular = "cellular",
    Ethernet = "ethernet",
    None = "none",
    Other = "other",
    Unknown = "unknown",
    Wifi = "wifi",
    Wimax = "wimax",
}

export { ConnectionType };
