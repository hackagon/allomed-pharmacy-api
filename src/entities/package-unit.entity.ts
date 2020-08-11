import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as _ from 'lodash';

@Entity({ name: 'package_unit' })
export class PackageUnitEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(partial: Partial<PackageUnitEntity>) {
    super();
    _.assign(this, partial);
  }
}
