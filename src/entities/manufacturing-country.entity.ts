import { Entity, Column, PrimaryColumn, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid'
import * as _ from "lodash";

@Entity({ name: "manufacturing_country" })
export class ManufacturingCountryEntity extends BaseEntity {
  @PrimaryColumn({ default: uuidv4() })
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  code: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(partial: Partial<ManufacturingCountryEntity>) {
    super();
    _.assign(this, partial);
  }
}