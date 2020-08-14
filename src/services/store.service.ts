import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { StoreEntity } from 'src/entities/store.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StoreService extends TypeOrmCrudService<StoreEntity> {
  constructor(@InjectRepository(StoreEntity) repo) {
    super(repo);
  }
}
