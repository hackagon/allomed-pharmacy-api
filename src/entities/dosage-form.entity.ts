import { Entity, Column, PrimaryColumn, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid'
import * as _ from "lodash";

@Entity({ name: "dosage_form" })
export class DosageFormEntity extends BaseEntity {
  @PrimaryColumn({ default: uuidv4() })
  id: string;

  @Column({ unique: true })
  label: string;

  @Column({ unique: true })
  code: string;

  @Column({ unique: true })
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(partial: Partial<DosageFormEntity>) {
    super();
    _.assign(this, partial);
  }
}