import { Controller, Get } from "@nestjs/common";
import { PackageUnitService } from "src/services/package-unit.service";
import { PackageUnitEntity } from "src/entities/package-unit.entity";

@Controller("/package-units")
export class PackageUnitController {
  constructor(
    private unitService: PackageUnitService
  ) { }

  @Get("/")
  async getUnits(): Promise<PackageUnitEntity[]> {
    return await this.unitService.getUnits()
  }
}