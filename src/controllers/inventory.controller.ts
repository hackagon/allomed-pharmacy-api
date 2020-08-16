import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { InventoryEntity } from 'src/entities/inventory.entity';
import { InventoryService } from 'src/services/inventory.service';
import {
  CreateInventoryDTO,
  UpdateInventoryDTO,
} from 'src/dto/inventory.dto';

@Crud({
  model: {
    type: InventoryEntity,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  dto: {
    create: CreateInventoryDTO,
    update: UpdateInventoryDTO,
  },
  routes: {
    deleteOneBase: {
      decorators: [],
      interceptors: [],
      returnDeleted: true,
    },
  },
})
@Controller('inventories')
export class InventoryController
  implements CrudController<InventoryEntity> {
  constructor(public service: InventoryService) {}
}
