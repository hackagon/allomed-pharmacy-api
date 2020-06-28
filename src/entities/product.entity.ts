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

  @Column({ name: "brand_name" })
  brandName: string;

  @Column({ name: "sub_brand_name" })
  subBrandName: string;

  @ManyToOne(type => IngredientEntity, ingredient => ingredient.products)
  @JoinColumn({
    name: "api_id"
  })
  apiId: string;

  @Column({ name: "dosage_quantity" })
  dosageQuantity: number;

  @Column({ name: "dosage_unit_id" })
  dosageUnitId: string;

  @Column({ name: "package_unit_id" })
  packageUnitId: string;

  @Column({ name: "dosage_form_id" })
  dosageFormId: string;

  @Column({ name: "package_id" })
  packageId: string;

  @Column({ name: "manufacturing_enterprise_id" })
  manufacturingEnterpriseId: string;

  @Column({ name: "manufacturing_country_id" })
  manufacturingCountryId: string;

  @Column({ name: "pharmaceutical_classification_id" })
  pharmaceuticalClassificationId: string;

  @Column({ name: "store_id" })
  storeId: string;

  @Column({ name: "national_product_code" })
  nationalProductCode: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
