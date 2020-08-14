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
}
