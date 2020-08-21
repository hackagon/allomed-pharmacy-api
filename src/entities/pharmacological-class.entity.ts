import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  Unique,
  OneToMany,
} from 'typeorm';
import { IngredientEntity } from './ingredient.entity';
import { Type } from 'class-transformer';

@Entity({ name: 'pharmacological_class' })
@Unique(['code', 'en_name', 'vn_name'])
export class PharmacologicalClassEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  code: string;

  @Column()
  en_name: string;

  @Column()
  vn_name: string;

  @OneToMany(
    type => IngredientEntity,
    i => i.pharmacological_class,
  )
  @Type(type => IngredientEntity)
  ingredients: IngredientEntity[];
}
