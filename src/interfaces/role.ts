import { Auditable } from "./auditable";

export interface Role extends Auditable {
    description?: string;
    name?: string;
}
