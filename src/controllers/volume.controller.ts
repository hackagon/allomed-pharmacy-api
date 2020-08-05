import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { VolumeEntity } from 'src/entities/volume.entity';
import { VolumeService } from 'src/services/volume.service';
import { CreateVolumeDTO, UpdateVolumeDTO } from 'src/dto/volume.dto';

@Crud({
  model: {
    type: VolumeEntity,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  dto: {
    create: CreateVolumeDTO,
    update: UpdateVolumeDTO,
  },
  routes: {
    deleteOneBase: {
      interceptors: [],
      decorators: [],
      returnDeleted: true,
    },
  },
})
@Controller('volumes')
export class VolumeController implements CrudController<VolumeEntity> {
  constructor(public service: VolumeService) {}
}
