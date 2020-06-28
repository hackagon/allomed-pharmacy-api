import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity({
  name: "ingredient"
})
export class IngredientEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: "name"
  })
  name: string;

  @Column({
    name: "usage"
  })
  usage: string;

  @OneToMany(type => ProductEntity, product => product.apiId, {
    cascade: ["insert", "update", "remove"]
  })
  products: ProductEntity[]
}
