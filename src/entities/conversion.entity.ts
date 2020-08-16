import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { InventoryLineEntity } from './inventory-line.entity';
import { Type } from 'class-transformer';

@Entity({ name: 'conversion' })
export class ConversionEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column()
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(
    type => InventoryLineEntity,
    iL => iL.conversion_id,
    { cascade: true },
  )
  @Type(type => InventoryLineEntity)
  inventoryLines: InventoryLineEntity[];
}
