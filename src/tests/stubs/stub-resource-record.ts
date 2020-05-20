import { StubResource } from "./stub-resource";
import { Record } from "immutable";

class StubResourceRecord
    extends Record({
        id: 0,
        name: "stub",
    })
    implements StubResource {}

export { StubResourceRecord };
