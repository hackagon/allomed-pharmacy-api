import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity({ name: 'ingredient' })
export class IngredientEntity extends BaseEntity {
  @PrimaryColumn({ default: uuidv4() })
  id: string;

  @Column()
  name: string;

  @Column()
  other_name: string;

  @Column()
  unii: string;
}
