import {
  Entity,
  Column,
  PrimaryColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import * as _ from 'lodash';
import { InventoryEntity } from './inventory.entity';
import { Type } from 'class-transformer';

@Entity({ name: 'manufacturing_enterprise' })
export class ManufacturingEnterpriseEntity extends BaseEntity {
  @PrimaryColumn({ default: uuidv4() })
  id: string;

  @Column()
  name: string;

  @Column({ name: 'short_name' })
  short_name: string;

  @Column()
  fax: string;

  @Column()
  email: string;

  @Column()
  address: string;

  @Column()
  tax_identification_number: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(
    type => InventoryEntity,
    i => i.provide_enterprise_id,
    { cascade: true },
  )
  @Type(type => InventoryEntity)
  inventories: InventoryEntity[];

  constructor(partial: Partial<ManufacturingEnterpriseEntity>) {
    super();
    _.assign(this, partial);
  }
}
