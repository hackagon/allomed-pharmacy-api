import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { InventoryEntity } from './inventory.entity';
import { Type } from 'class-transformer';

@Entity({ name: 'store' })
@Unique(['code', 'name'])
export class StoreEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  code: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(
    type => InventoryEntity,
    i => i.store_id,
    { cascade: true },
  )
  @Type(type => InventoryEntity)
  inventories: InventoryEntity[];
}
