import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InventoryLineEntity } from 'src/entities/inventory-line.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InventoryLineService extends TypeOrmCrudService<
  InventoryLineEntity
> {
  constructor(@InjectRepository(InventoryLineEntity) repo) {
    super(repo);
  }
}
