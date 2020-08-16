import {
  BaseEntity,
  Entity,
  Column,
  Unique,
  BeforeInsert,
  BeforeUpdate,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Exclude, Type } from 'class-transformer';
import { InventoryEntity } from './inventory.entity';
import { InventoryLineEntity } from './inventory-line.entity';

@Entity({ name: 'user' })
@Unique(['email'])
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;

  @Column()
  full_name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    if (this.password) {
      console.log('this.email', this.email);
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
    }
  }

  @OneToMany(
    type => InventoryEntity,
    i => i.user_id,
    { cascade: true },
  )
  @Type(type => InventoryEntity)
  inventories: InventoryEntity[];

  @OneToMany(
    type => InventoryLineEntity,
    iL => iL.user_id,
    { cascade: true },
  )
  @Type(type => InventoryLineEntity)
  inventoryLines: InventoryLineEntity[];
}
