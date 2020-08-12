import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
} from 'typeorm';

@Entity({ name: 'unit' })
@Unique(['code', 'en_name', 'vn_name'])
export class UnitEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  code: string;

  @Column()
  en_name: string;

  @Column()
  vn_name: string;
}
