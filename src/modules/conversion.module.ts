import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConversionEntity } from 'src/entities/conversion.entity';
import { ConversionService } from 'src/services/conversion.service';
import { ConversionController } from 'src/controllers/conversion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConversionEntity])],
  providers: [ConversionService],
  controllers: [ConversionController],
  exports: [ConversionService],
})
export class ConversionModule {}
