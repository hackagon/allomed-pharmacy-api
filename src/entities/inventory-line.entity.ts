import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  ManyToOne,
} from 'typeorm';
import { InventoryEntity } from './inventory.entity';

@Entity({ name: 'inventory_line' })
export class InventoryLineEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  invoice_quantity: number;

  @Column()
  exchange_quantity: number;

  @Column()
  invoice_unit_price: number;

  @Column()
  exchange_unit_price: number;

  @Column()
  lot: string;

  @Column()
  manufacture_date: Date;

  @Column()
  expired_date: Date;

  @Column()
  promotion_id: string;

  @Column()
  sponsor_id: string;

  @Column()
  discount_rate: number;

  @Column()
  discount_amount: number;

  @Column()
  vat: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  inventory_id: string;

  @BeforeInsert()
  @BeforeUpdate()
  getExchangeUnitPrice() {
    this.exchange_unit_price = this.invoice_unit_price / this.exchange_quantity;
  }

  @ManyToOne(
    type => InventoryEntity,
    i => i.inventoryLines,
    { onDelete: 'CASCADE' },
  )
  inventory?: InventoryEntity;
}
