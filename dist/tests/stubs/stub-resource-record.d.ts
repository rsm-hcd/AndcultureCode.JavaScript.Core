import { StubResource } from "./stub-resource";
import { Record } from "immutable";
declare const StubResourceRecord_base: Record.Factory<{
    id: number;
    name: string;
}>;
declare class StubResourceRecord extends StubResourceRecord_base implements StubResource {
}
export { StubResourceRecord };
