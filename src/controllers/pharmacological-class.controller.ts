import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { PharmacologicalClassEntity } from 'src/entities/pharmacological-class.entity';
import { PharmacologicalClassService } from 'src/services/pharmacological-class.service';
import {
  CreatePharmacologicalClassDTO,
  UpdatePharmacologicalClassDTO,
} from 'src/dto/pharmacological-class.dto';

@Crud({
  model: {
    type: PharmacologicalClassEntity,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  dto: {
    create: CreatePharmacologicalClassDTO,
    update: UpdatePharmacologicalClassDTO,
  },
  routes: {
    deleteOneBase: {
      interceptors: [],
      decorators: [],
      returnDeleted: true,
    },
  },
})
@Controller('pharmacological-classes')
export class PharmacologicalClassController
  implements CrudController<PharmacologicalClassEntity> {
  constructor(public service: PharmacologicalClassService) {}
}
