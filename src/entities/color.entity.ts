import { BaseEntity, Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from './product.entity';
import { Type } from 'class-transformer';

@Entity({ name: 'color' })
export class ColorEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  code: string;

  @Column()
  en_name: string;

  @Column({ unique: true })
  vn_name: string;

  @OneToMany(
    type => ProductEntity,
    p => p.color_id,
  )
  @Type(type => ProductEntity)
  products: ProductEntity[];
}
