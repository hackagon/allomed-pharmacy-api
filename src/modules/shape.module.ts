import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShapeController } from 'src/controllers/shape.controller';
import { ShapeService } from 'src/services/shape.service';
import { ShapeEntity } from 'src/entities/shape.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShapeEntity])],
  providers: [ShapeService],
  controllers: [ShapeController],
  exports: [ShapeService],
})
export class ShapeModule {}
