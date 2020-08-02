import { BaseEntity, PrimaryColumn, Column, Entity } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity({ name: 'flavor' })
export class FlavorEntity extends BaseEntity {
  @PrimaryColumn({ default: uuidv4() })
  id: string;

  @Column({ unique: true })
  code: string;
}
