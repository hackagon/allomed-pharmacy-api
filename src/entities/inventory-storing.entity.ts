import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'inventory_storing' })
export class InventoryStoringEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: 0 })
  month: number;

  @Column({ default: 0 })
  year: number;

  @Column({ default: 0 })
  existing_quantity: number;

  @Column()
  import_quantity: number;

  @Column({ default: 0 })
  export_quantity: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
