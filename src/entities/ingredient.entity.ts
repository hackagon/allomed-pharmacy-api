import {
  BaseEntity,
  Entity,
  Column,
  Unique,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PharmacologicalClassEntity } from './pharmacological-class.entity';
import { ProductEntity } from './product.entity';
import { IngredientProductEntity } from './ingredient-product.entity';

@Entity({ name: 'ingredient' })
@Unique(['name', 'other_name', 'unii'])
export class IngredientEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  other_name: string;

  @Column()
  unii: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  pharmacological_class_id: string;

  @ManyToOne(
    type => PharmacologicalClassEntity,
    p => p.ingredients,
  )
  ingredient?: IngredientEntity;

  @ManyToMany(
    type => ProductEntity,
    p => p.ingredients,
  )
  @JoinTable({
    name: 'ingredient_product',
    joinColumn: {
      name: 'ingredientId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'productId',
      referencedColumnName: 'id',
    },
  })
  products: ProductEntity[];

  @OneToMany(
    type => IngredientProductEntity,
    i => i.ingredientId,
    {
      persistence: false,
      onDelete: 'CASCADE',
    },
  )
  ingredientProduct!: IngredientProductEntity[];
}
