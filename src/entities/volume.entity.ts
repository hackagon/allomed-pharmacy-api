import { BaseEntity, PrimaryColumn, Column, Entity } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity({ name: 'volume' })
export class VolumeEntity extends BaseEntity {
  @PrimaryColumn({ default: uuidv4() })
  id: string;

  @Column({ unique: true })
  code: string;

  @Column({ unique: true })
  en_name: string;

  @Column({ unique: true })
  vn_name: string;
}
