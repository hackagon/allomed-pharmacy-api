import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorEntity } from 'src/entities/color.entity';
import { ColorService } from 'src/services/color.service';

@Module({
  imports: [TypeOrmModule.forFeature([ColorEntity])],
  providers: [ColorService],
  controllers: [],
  exports: [ColorService],
})
export class ColorModule {}
