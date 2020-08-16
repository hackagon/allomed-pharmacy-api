import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InventoryStoringEntity } from 'src/entities/inventory-storing.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InventoryStoringService extends TypeOrmCrudService<
  InventoryStoringEntity
> {
  constructor(@InjectRepository(InventoryStoringEntity) repo) {
    super(repo);
  }
}
