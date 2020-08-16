import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { StoreEntity } from './store.entity';
import { InventoryLineEntity } from './inventory-line.entity';
import { Type } from 'class-transformer';
import { ManufacturingEnterpriseEntity } from './manufacturing-enterprise.entity';

@Entity({ name: 'inventory' })
@Unique(['code'])
export class InventoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  code: string;

  @Column()
  invoice_number: string;

  @Column()
  document_date: Date;

  @Column()
  delivery_date: Date;

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;

  @Column()
  store_id: string;

  @Column()
  provide_enterprise_id: string;

  @ManyToOne(
    type => StoreEntity,
    s => s.inventories,
    { onDelete: 'SET NULL' },
  )
  store?: StoreEntity;

  @OneToMany(
    type => InventoryLineEntity,
    iL => iL.inventory_id,
    { cascade: true },
  )
  @Type(type => InventoryLineEntity)
  inventoryLines: InventoryLineEntity[];

  @ManyToOne(
    type => ManufacturingEnterpriseEntity,
    e => e.inventories,
    { onDelete: 'SET NULL' },
  )
  enterprise?: ManufacturingEnterpriseEntity;
}
