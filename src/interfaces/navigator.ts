import { NavigatorConnectionVariants } from "../enumerations/navigator-connection-variants";
import { NavigatorConnection } from "./navigator-connection";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface StandardNavigator extends Navigator {
    [NavigatorConnectionVariants.Standard]: NavigatorConnection;
}

interface MozillaNavigator extends Navigator {
    [NavigatorConnectionVariants.Mozilla]: NavigatorConnection;
}

interface WebkitNavigator extends Navigator {
    [NavigatorConnectionVariants.Webkit]: NavigatorConnection;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export { StandardNavigator, MozillaNavigator, WebkitNavigator };

// #endregion Export
