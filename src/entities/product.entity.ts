import {
  Entity,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { IngredientEntity } from './ingredient.entity';
import { ColorEntity } from './color.entity';
import { VolumeEntity } from './volume.entity';
import { ShapeEntity } from './shape.entity';
import { FlavorEntity } from './flavor.entity';
import { IngredientProductEntity } from './ingredient-product.entity';
import { InventoryLineEntity } from './inventory-line.entity';
import { Type } from 'class-transformer';

@Entity({ name: 'product' })
export class ProductEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
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

  @Column()
  dosage_quantity: number;

  @Column()
  dosage_unit_id: string;

  @Column()
  package_unit_id: string; // don vi dong goi

  @Column()
  dosage_form_id: string; // dang bao che 

  @Column()
  package_id: string; // quy cach dong goi

  @Column()
  manufacturing_enterprise_id: string;

  @Column() // phan loai duoc
  product_classification_id: string;

  @Column()
  national_product_code: string;

  @Column()
  color_id: string;

  @Column()
  shape_id: string;

  @Column()
  flavor_id: string;

  @Column()
  volume_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(
    type => ColorEntity,
    c => c.products,
  )
  color?: ColorEntity;

  @ManyToOne(
    type => VolumeEntity,
    v => v.products,
  )
  volume?: VolumeEntity;

  @ManyToOne(
    type => ShapeEntity,
    s => s.products,
  )
  shape?: ShapeEntity;

  @ManyToOne(
    type => FlavorEntity,
    f => f.products,
  )
  flavor?: FlavorEntity;

  // @ManyToMany(
  //   type => IngredientEntity,
  //   i => i.products,
  // )
  // ingredients?: IngredientEntity[];

  // @OneToMany(
  //   type => IngredientProductEntity,
  //   i => i.productId,
  //   {
  //     persistence: false,
  //     onDelete: 'CASCADE',
  //   },
  // )
  // ingredientProduct?: IngredientProductEntity[];

  @OneToMany(
    type => InventoryLineEntity,
    iL => iL.product_id,
    { cascade: true },
  )
  @Type(type => InventoryLineEntity)
  inventoryLines: InventoryLineEntity[];
}
