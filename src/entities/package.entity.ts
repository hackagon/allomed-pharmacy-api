import { Entity, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";
import * as _ from "lodash";

@Entity({ name: "package" })
export class PackageEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;


  constructor(partial: Partial<PackageEntity>) {
    super();
    _.assign(this, partial);
  }
}