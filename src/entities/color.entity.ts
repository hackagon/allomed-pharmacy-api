import { BaseEntity, Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { ProductEntity } from './product.entity';
import { Type } from 'class-transformer';

@Entity({ name: 'color' })
export class ColorEntity extends BaseEntity {
  @PrimaryColumn({ default: uuidv4() })
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
