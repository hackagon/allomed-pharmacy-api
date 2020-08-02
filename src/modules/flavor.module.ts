import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlavorEntity } from 'src/entities/flavor.entity';
import { FlavorService } from 'src/services/flavor.service';
import { FlavorController } from 'src/controllers';

@Module({
  imports: [TypeOrmModule.forFeature([FlavorEntity])],
  providers: [FlavorService],
  controllers: [FlavorController],
  exports: [FlavorService],
})
export class FlavorModule {}
