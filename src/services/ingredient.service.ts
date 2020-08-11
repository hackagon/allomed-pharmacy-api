import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { IngredientEntity } from 'src/entities/ingredient.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class IngredientService extends TypeOrmCrudService<IngredientEntity> {
  constructor(@InjectRepository(IngredientEntity) repo) {
    super(repo);
  }
}
