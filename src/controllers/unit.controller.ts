import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { UnitEntity } from 'src/entities/unit.entity';
import { UnitService } from 'src/services/unit.service';
import { CreateUnitDTO, UpdateUnitDTO } from 'src/dto/unit.dto';

@Crud({
  model: {
    type: UnitEntity,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  dto: {
    create: CreateUnitDTO,
    update: UpdateUnitDTO,
  },
  routes: {
    deleteOneBase: {
      interceptors: [],
      decorators: [],
      returnDeleted: true,
    },
  },
  query: {
    join: {
      from_conversions: {
        eager: true,
      },
      to_conversions: {
        eager: true,
      },
    },
  },
})
@Controller('units')
export class UnitController implements CrudController<UnitEntity> {
  constructor(public service: UnitService) {}
}
