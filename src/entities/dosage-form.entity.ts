import { Entity, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";
import * as _ from "lodash";

@Entity({ name: "dosage_form" })
export class DosageFormEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  code: string;

  @Column({ unique: true })
  en_name: string;

  @Column({ unique: true })
  vn_name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(partial: Partial<DosageFormEntity>) {
    super();
    _.assign(this, partial);
  }
}