import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ShapeEntity } from 'src/entities/shape.entity';

@Injectable()
export class ShapeService extends TypeOrmCrudService<ShapeEntity> {
  constructor(@InjectRepository(ShapeEntity) repo) {
    super(repo);
  }
}
