import { Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, Column, BaseEntity } from "typeorm";
import { v4 as uuidv4 } from 'uuid'
import * as _ from "lodash";

@Entity()
export class PackageUnitEntity extends BaseEntity {
  @PrimaryColumn({
    default: uuidv4()
  })
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