import { NavigatorConnectionVariant } from "../enumerations/navigator-connection-variant";
import { NetworkInformation } from "../interfaces/network-information";

export declare interface Navigator {
    [NavigatorConnectionVariant.Standard]?: NetworkInformation;
    [NavigatorConnectionVariant.Mozilla]?: NetworkInformation;
    [NavigatorConnectionVariant.Webkit]?: NetworkInformation;
    onLine: boolean;
}
