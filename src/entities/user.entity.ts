import {
  BaseEntity,
  Entity,
  PrimaryColumn,
  Column,
  Unique,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';

@Entity({ name: 'user' })
@Unique(['email'])
export class UserEntity extends BaseEntity {
  @PrimaryColumn({ default: uuidv4() })
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  full_name: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    const salt = await bcrypt.genSalt();

    this.password = await bcrypt.hash(this.password, salt);
  }
}
