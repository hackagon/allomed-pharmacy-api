import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { InventoryHeaderEntity } from 'src/entities/inventory-header.entity';
import { InventoryHeaderService } from 'src/services/inventory-header.service';
import {
  CreateInventoryHeaderDTO,
  UpdateInventoryHeaderDTO,
} from 'src/dto/inventory-header.dto';

@Crud({
  model: {
    type: InventoryHeaderEntity,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  dto: {
    create: CreateInventoryHeaderDTO,
    update: UpdateInventoryHeaderDTO,
  },
  routes: {
    deleteOneBase: {
      decorators: [],
      interceptors: [],
      returnDeleted: true,
    },
  },
})
@Controller('inventory-headers')
export class InventoryHeaderController
  implements CrudController<InventoryHeaderEntity> {
  constructor(public service: InventoryHeaderService) {}
}
