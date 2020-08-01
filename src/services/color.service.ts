import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ColorEntity } from 'src/entities/color.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ColorService extends TypeOrmCrudService<ColorEntity> {
  constructor(@InjectRepository(ColorEntity) repo) {
    super(repo);
  }
}
