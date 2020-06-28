import { Entity, Column, PrimaryColumn, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid'
import * as _ from "lodash";

@Entity({ name: "manufacturing-enterprise" })
export class ManufacturingEnterpriseEntity extends BaseEntity {
  @PrimaryColumn({ default: uuidv4() })
  id: string;

  @Column()
  name: string;

  @Column({ name: "short_name" })
  shortName: string;

  @Column()
  fax: string;

  @Column()
  email: string;

  @Column()
  address: string;

  @Column({ name: "tax_identification_number" })
  taxIdentificationNumber: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  constructor(partial: Partial<ManufacturingEnterpriseEntity>) {
    super();
    _.assign(this, partial);
  }
}