import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UnitRepository } from "src/repositories/unit.repository";
import { UnitController } from "src/controllers/unit.controller";
import { UnitService } from "src/services/unit.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([UnitRepository])
  ],
  controllers: [UnitController],
  providers: [UnitService]
})
export class UnitModule { }