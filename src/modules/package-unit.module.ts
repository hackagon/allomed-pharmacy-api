import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PackageUnitRepository } from "src/repositories/package-unit.repository";
import { PackageUnitController } from "src/controllers/package-unit.controller";
import { PackageUnitService } from "src/services/package-unit.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([PackageUnitRepository])
  ],
  controllers: [PackageUnitController],
  providers: [PackageUnitService]
})
export class PackageUnitModule { }