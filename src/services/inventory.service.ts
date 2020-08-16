import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InventoryEntity } from 'src/entities/inventory.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InventoryService extends TypeOrmCrudService<
  InventoryEntity
> {
  constructor(@InjectRepository(InventoryEntity) repo) {
    super(repo);
  }
}
