import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { FlavorEntity } from 'src/entities/flavor.entity';
import { FlavorService } from 'src/services/flavor.service';
import { CreateFlavorDTO, UpdateFlavorDTO } from 'src/dto/falvor.dto';

@Crud({
  model: {
    type: FlavorEntity,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  dto: {
    create: CreateFlavorDTO,
    update: UpdateFlavorDTO,
  },
  routes: {
    deleteOneBase: {
      interceptors: [],
      decorators: [],
      returnDeleted: true,
    },
  },
})
@Controller('flavors')
export class FlavorController implements CrudController<FlavorEntity> {
  constructor(public service: FlavorService) {}
}
