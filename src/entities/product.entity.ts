import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import { IngredientEntity } from './ingredient.entity';

@Entity({
  name: "product"
})
export class ProductEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: "sku"
  })
  sku: string;

  @Column({
    name: "product_code"
  })
  productCode: string;

  @Column({
    name: "brand_name"
  })
  brandName: string;

  @Column({
    name: "sub_brand_name"
  })
  subBrandName: string;

  @ManyToOne(type => IngredientEntity, ingredient => ingredient.products)
  @JoinColumn({
    name: "ingredient_id"
  })
  ingredientId
}
