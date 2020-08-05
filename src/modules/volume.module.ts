import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VolumeEntity } from 'src/entities/volume.entity';
import { VolumeService } from 'src/services/volume.service';
import { VolumeController } from 'src/controllers/volume.controller';

@Module({
  imports: [TypeOrmModule.forFeature([VolumeEntity])],
  providers: [VolumeService],
  controllers: [VolumeController],
  exports: [VolumeService],
})
export class VolumeModule {}
