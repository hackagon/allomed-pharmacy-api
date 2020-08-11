import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductEntity } from './product.entity';
import { Type } from 'class-transformer';

@Entity({ name: 'volume' })
export class VolumeEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
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
