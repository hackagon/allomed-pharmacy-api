import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { ShapeEntity } from 'src/entities/shape.entity';
import { ShapeService } from 'src/services/shape.service';
import { CreateShapeDTO, UpdateShapeDTO } from 'src/dto/shape.dto';

@Crud({
  model: {
    type: ShapeEntity,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  dto: {
    create: CreateShapeDTO,
    update: UpdateShapeDTO,
  },
  routes: {
    deleteOneBase: {
      interceptors: [],
      decorators: [],
      returnDeleted: true,
    },
  },
})
@Controller('shapes')
export class ShapeController implements CrudController<ShapeEntity> {
  constructor(public service: ShapeService) {}
}
