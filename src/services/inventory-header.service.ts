import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InventoryHeaderEntity } from 'src/entities/inventory-header.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InventoryHeaderService extends TypeOrmCrudService<
  InventoryHeaderEntity
> {
  constructor(@InjectRepository(InventoryHeaderEntity) repo) {
    super(repo);
  }
}
