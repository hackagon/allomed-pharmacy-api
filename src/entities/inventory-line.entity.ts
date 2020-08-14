import { BaseEntity, PrimaryGeneratedColumn, Entity, Column } from "typeorm";

@Entity({name: 'inventory_line'})
export class InventoryLineEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
}