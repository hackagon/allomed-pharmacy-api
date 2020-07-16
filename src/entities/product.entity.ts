import { Entity, Column, BaseEntity, ManyToOne, JoinColumn, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IngredientEntity } from './ingredient.entity';
import { v4 as uuidv4 } from 'uuid';

@Entity({ name: "product" })
export class ProductEntity extends BaseEntity {
  @PrimaryColumn({
    default: uuidv4()
  })
  id: string;

  @Column()
  sku: string;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  brand_name: string;

  @Column()
  sub_brand_name: string;

  @ManyToOne(type => IngredientEntity, ingredient => ingredient.products)
  @JoinColumn()
  api_id: string;

  @Column()
  dosage_quantity: number;

  @Column()
  dosage_unit_id: string;

  @Column()
  package_unit_id: string;

  @Column()
  dosage_form_id: string;

  @Column() // unit_id ???
  package_id: string;

  @Column()
  manufacturing_enterprise_id: string;

  @Column()
  manufacturing_country_id: string;

  @Column() // product_classification ????
  product_classification_id: string;

  @Column()
  national_product_code: string;

  @Column()
  color_id: string;

  @Column()
  shape_id: string;

  @Column()
  odor_id: string;

  @Column()
  volume_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
