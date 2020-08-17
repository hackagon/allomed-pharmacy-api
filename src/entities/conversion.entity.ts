import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { InventoryLineEntity } from './inventory-line.entity';
import { Type } from 'class-transformer';
import { UnitEntity } from './unit.entity';

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

  @Column()
  unit_from_id: string;

  @Column()
  unit_to_id: string;

  @OneToMany(
    type => InventoryLineEntity,
    iL => iL.conversion_id,
    { cascade: true },
  )
  @Type(type => InventoryLineEntity)
  inventoryLines: InventoryLineEntity[];

  @ManyToOne(
    type => UnitEntity,
    u => u.conversion_from,
  )
  unitFrom?: UnitEntity;

  @ManyToOne(
    type => UnitEntity,
    u => u.conversion_to,
  )
  unitTo?: UnitEntity;
}
