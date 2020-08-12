import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitEntity } from 'src/entities/unit.entity';
import { UnitService } from 'src/services/unit.service';
import { UnitController } from 'src/controllers/unit.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UnitEntity])],
  providers: [UnitService],
  controllers: [UnitController],
  exports: [UnitService],
})
export class UnitModule {}
