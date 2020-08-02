import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { VolumeEntiry } from 'src/entities/volume.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VolumeService extends TypeOrmCrudService<VolumeEntiry> {
  constructor(@InjectRepository(VolumeEntiry) repo) {
    super(repo);
  }
}
