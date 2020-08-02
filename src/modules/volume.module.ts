import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VolumeEntiry } from 'src/entities/volume.entity';
import { VolumeService } from 'src/services/volume.service';
import { VolumeController } from 'src/controllers';

@Module({
  imports: [TypeOrmModule.forFeature([VolumeEntiry])],
  providers: [VolumeService],
  controllers: [VolumeController],
  exports: [VolumeService],
})
export class VolumeModule {}
