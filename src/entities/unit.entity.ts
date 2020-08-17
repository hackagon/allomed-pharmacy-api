import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ConversionEntity } from './conversion.entity';
import { Type } from 'class-transformer';

@Entity({ name: 'unit' })
@Unique(['code', 'en_name', 'vn_name'])
export class UnitEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  code: string;

  @Column()
  en_name: string;

  @Column()
  vn_name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(
    type => ConversionEntity,
    c => c.unit_from_id,
  )
  @Type(type => ConversionEntity)
  conversion_from: ConversionEntity[];

  @OneToMany(
    type => ConversionEntity,
    c => c.unit_to_id,
  )
  @Type(type => ConversionEntity)
  conversion_to: ConversionEntity[];
}
