import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { UnitEntity } from 'src/entities/unit.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UnitService extends TypeOrmCrudService<UnitEntity> {
  constructor(@InjectRepository(UnitEntity) repo) {
    super(repo);
  }
}
