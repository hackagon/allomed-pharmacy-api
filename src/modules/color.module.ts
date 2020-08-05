import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorEntity } from 'src/entities/color.entity';
import { ColorService } from 'src/services/color.service';
import { ColorController } from 'src/controllers/color.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ColorEntity])],
  providers: [ColorService],
  controllers: [ColorController],
  exports: [ColorService],
})
export class ColorModule {}
