import {
  BaseEntity,
  PrimaryColumn,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { ProductEntity } from './product.entity';
import { Type } from 'class-transformer';

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

  @OneToMany(
    type => ProductEntity,
    p => p.volume_id,
  )
  @Type(type => ProductEntity)
  products: ProductEntity[];
}
