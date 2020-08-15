import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ConversionEntity } from 'src/entities/conversion.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ConversionService extends TypeOrmCrudService<ConversionEntity> {
  constructor(@InjectRepository(ConversionEntity) repo) {
    super(repo);
  }
}
