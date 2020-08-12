import { Auditable } from "./auditable";

export interface User extends Auditable {
    email?: string;
    firstName: string;
    isSuperAdmin?: boolean;
    lastName: string;
    userName?: string;
}
