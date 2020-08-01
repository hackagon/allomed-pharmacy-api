import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { ColorEntity } from 'src/entities/color.entity';
import { ColorService } from 'src/services/color.service';
import { CreateColorDTO, UpdateColorDTO } from 'src/dto/color.dto';

@Crud({
  model: {
    type: ColorEntity,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  dto: {
    create: CreateColorDTO,
    update: UpdateColorDTO,
  },
  routes: {
    deleteOneBase: {
      interceptors: [],
      decorators: [],
      returnDeleted: true,
    },
  },
})
@Controller('color')
export class ColorController implements CrudController<ColorEntity> {
  constructor(public service: ColorService) {}
}
