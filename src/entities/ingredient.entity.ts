import { BaseEntity, Entity, Column, Unique, PrimaryGeneratedColumn } from 'typeorm';

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
}
