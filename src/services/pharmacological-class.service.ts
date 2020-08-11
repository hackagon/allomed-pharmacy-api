import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { PharmacologicalClassEntity } from 'src/entities/pharmacological-class.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PharmacologicalClassService extends TypeOrmCrudService<
  PharmacologicalClassEntity
> {
  constructor(@InjectRepository(PharmacologicalClassEntity) repo) {
    super(repo);
  }
}
