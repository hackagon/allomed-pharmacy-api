import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { ConversionEntity } from 'src/entities/conversion.entity';
import { ConversionService } from 'src/services/conversion.service';
import {
  CreateConversionDTO,
  UpdateConversionDTO,
} from 'src/dto/conversion.dto';

@Crud({
  model: {
    type: ConversionEntity,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  dto: {
    create: CreateConversionDTO,
    update: UpdateConversionDTO,
  },
  routes: {
    deleteOneBase: {
      decorators: [],
      interceptors: [],
      returnDeleted: true,
    },
  },
  query: {
    join: {
      from_unit_id: {
        eager: true,
      },
      to_unit_id: {
        eager: true,
      },
    },
  },
})
@Controller('conversions')
export class ConversionController implements CrudController<ConversionEntity> {
  constructor(public service: ConversionService) {}
}
