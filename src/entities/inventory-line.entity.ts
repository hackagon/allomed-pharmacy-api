import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

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

  @BeforeInsert()
  @BeforeUpdate()
  getExchangeUnitPrice() {
    this.exchange_unit_price = this.invoice_unit_price / this.exchange_quantity;
  }
}
