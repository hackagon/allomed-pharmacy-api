import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PackageUnitEntity } from "src/entities/package-unit.entity";
import * as _ from 'lodash';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class PackageUnitService extends TypeOrmCrudService<PackageUnitEntity> {
  constructor(@InjectRepository(PackageUnitEntity) repo) {
    super(repo);
  }
}