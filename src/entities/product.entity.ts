import { Entity, Column, BaseEntity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { IngredientEntity } from './ingredient.entity';
import { v4 as uuidv4 } from 'uuid';

@Entity({
  name: "product"
})
export class ProductEntity extends BaseEntity {
  @PrimaryColumn({
    default: uuidv4()
  })
  id: string;

  @Column()
  sku: string;

  @Column()
  product_code: string;

  @Column()
  product_name: string;

  @Column()
  brand_name: string;

  @Column()
  sub_brand_name: string;

  @Column()
  api_id: string;

  @Column()
  dosage_quantity: number;

  @Column()
  dosage_unit_id: string;

  @Column({
    name: "package_unit_id"
  })
  packageUnitId: string;

  @Column()
  dosage_form_id: string;

  @Column()
  package_id: string;

  @Column()
  manufacturing_enterprise_id: string;

  @Column()
  manufacturing_country_id: string;

  @Column()
  pharmaceutical_classification_id: string;

  @Column()
  store_id: string;

  @Column()
  national_product_code: string;

  @ManyToOne(type => IngredientEntity, ingredient => ingredient.products)
  @JoinColumn({
    name: "ingredient_id"
  })
  ingredientId: string;
}