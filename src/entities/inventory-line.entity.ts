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
import { ConversionEntity } from './conversion.entity';
import { ProductEntity } from './product.entity';
import { UserEntity } from './user.entity';

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

  @Column()
  conversion_id: string;

  @Column()
  product_id: string;

  @Column()
  user_id: string;

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

  @ManyToOne(
    type => ConversionEntity,
    c => c.inventoryLines,
    { onDelete: 'SET NULL' },
  )
  conversion?: ConversionEntity;

  @ManyToOne(
    type => ProductEntity,
    p => p.inventoryLines,
    { onDelete: 'SET NULL' },
  )
  product?: ProductEntity;

  @ManyToOne(
    type => UserEntity,
    u => u.inventoryLines,
    { onDelete: 'SET NULL' },
  )
  user?: UserEntity;
}
