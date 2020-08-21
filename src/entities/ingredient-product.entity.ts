import {
  BaseEntity,
  Entity,
  PrimaryColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductEntity } from './product.entity';
import { IngredientEntity } from './ingredient.entity';

@Entity({ name: 'ingredient_product' })
export class IngredientProductEntity extends BaseEntity {
  @PrimaryColumn()
  public ingredientId!: string;

  @PrimaryColumn()
  public productId!: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // @ManyToOne(
  //   type => ProductEntity,
  //   p => p.ingredientProduct,
  // )
  // public product: ProductEntity;

  // @ManyToOne(
  //   type => IngredientEntity,
  //   i => i.ingredientProduct,
  // )
  // public ingredient: IngredientEntity;
}
