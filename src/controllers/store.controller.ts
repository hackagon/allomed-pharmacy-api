import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { StoreEntity } from 'src/entities/store.entity';
import { StoreService } from 'src/services/store.service';
import { CreateStoreDTO, UpdateStoreDTO } from 'src/dto/store.dto';

@Crud({
  model: {
    type: StoreEntity,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  dto: {
    create: CreateStoreDTO,
    update: UpdateStoreDTO,
  },
  routes: {
    deleteOneBase: {
      decorators: [],
      interceptors: [],
      returnDeleted: true,
    },
  },
})
@Controller('stores')
export class StoreController implements CrudController<StoreEntity> {
  constructor(public service: StoreService) {}
}
