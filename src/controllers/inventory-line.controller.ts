import { Controller } from '@nestjs/common';
import {
  CrudController,
  Crud,
  Override,
  ParsedRequest,
  CrudRequest,
  ParsedBody,
} from '@nestjsx/crud';
import { InventoryLineEntity } from 'src/entities/inventory-line.entity';
import { InventoryLineService } from 'src/services/inventory-line.service';
import {
  CreateInventoryLineDTO,
  UpdateInventoryLineDTO,
} from 'src/dto/inventory-line.dto';
import { getManager } from 'typeorm';

@Crud({
  model: {
    type: InventoryLineEntity,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  dto: {
    create: CreateInventoryLineDTO,
    update: UpdateInventoryLineDTO,
  },
  routes: {
    deleteOneBase: {
      interceptors: [],
      decorators: [],
      returnDeleted: true,
    },
  },
})
@Controller('inventory-lines')
export class InventoryLineController
  implements CrudController<InventoryLineEntity> {
  constructor(public service: InventoryLineService) {}

  get base(): CrudController<InventoryLineEntity> {
    return this;
  }

  @Override()
  async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: InventoryLineEntity,
  ) {
    const inventoryStoringEntity = getManager().getRepository(
      'inventory_storing',
    );

    // await inventoryStoringEntity.create(new CreateInventoryStoringDTO());

    return this.base.createOneBase(req, dto);
  }
}
