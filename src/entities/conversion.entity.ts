import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
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

  @OneToMany(
    type => InventoryLineEntity,
    iL => iL.conversion_id,
    { cascade: true },
  )
  @Type(type => InventoryLineEntity)
  inventoryLines: InventoryLineEntity[];

  @ManyToOne(
    type => UnitEntity,
    u => u.from_conversions,
    { onDelete: 'SET NULL' },
  )
  @JoinColumn({ name: 'from_unit_id', referencedColumnName: 'id' })
  from_unit_id: string;

  @ManyToOne(
    type => UnitEntity,
    u => u.to_conversions,
    { onDelete: 'SET NULL' },
  )
  @JoinColumn({ name: 'to_unit_id', referencedColumnName: 'id' })
  to_unit_id: string;
}
