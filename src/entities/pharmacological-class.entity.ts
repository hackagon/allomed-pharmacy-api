import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  Unique,
} from 'typeorm';

@Entity({ name: 'pharmacological_class' })
@Unique(['code', 'en_name', 'vn_name'])
export class PharmacologicalClassEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  code: string;

  @Column()
  en_name: string;

  @Column()
  vn_name: string;
}
