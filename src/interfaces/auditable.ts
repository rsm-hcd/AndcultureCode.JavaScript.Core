import { Entity } from "./entity";

export interface Auditable extends Entity {
    createdById?: number;
    createdOn?: string;
    deletedById?: number;
    deletedOn?: string;
    updatedById?: number;
    updatedOn?: string;
}
