import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DosageUnitEntity } from "src/entities/dosage-unit.entity";
import { DosageUnitController } from "src/controllers/dosage-unit.controller";
import { DosageUnitService } from "src/services/dosage-unit.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([DosageUnitEntity])
  ],
  controllers: [DosageUnitController],
  providers: [DosageUnitService],
  exports: [DosageUnitService]
})
export class DosageUnitModule { }