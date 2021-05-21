import { NavigatorConnectionVariants } from "../enumerations/navigator-connection-variants";
import { NavigatorConnection } from "../interfaces/navigator-connection";

export declare interface Navigator {
    [NavigatorConnectionVariants.Standard]?: NavigatorConnection;
    [NavigatorConnectionVariants.Mozilla]?: NavigatorConnection;
    [NavigatorConnectionVariants.Webkit]?: NavigatorConnection;
}
