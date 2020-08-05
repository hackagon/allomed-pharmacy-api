import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { VolumeEntity } from 'src/entities/volume.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VolumeService extends TypeOrmCrudService<VolumeEntity> {
  constructor(@InjectRepository(VolumeEntity) repo) {
    super(repo);
  }
}
