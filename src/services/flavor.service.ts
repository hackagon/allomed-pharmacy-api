import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { FlavorEntity } from 'src/entities/flavor.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FlavorService extends TypeOrmCrudService<FlavorEntity> {
  constructor(@InjectRepository(FlavorEntity) repo) {
    super(repo);
  }
}
