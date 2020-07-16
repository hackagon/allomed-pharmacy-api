import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PackageUnitController } from "src/controllers/package-unit.controller";
import { PackageUnitService } from "src/services/package-unit.service";
import { PackageUnitEntity } from '../entities/package-unit.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PackageUnitEntity])
  ],
  controllers: [PackageUnitController],
  providers: [PackageUnitService]
})
export class PackageUnitModule { }