import { Controller, Get } from "@nestjs/common";
import { UnitService } from "src/services/unit.service";
import { Unit } from "src/entities/unit.entity";

@Controller("units")
export class UnitController {
  constructor(
    private unitService: UnitService
  ) { }

  @Get()
  async getUnits(): Promise<Unit[]> {
    return await this.unitService.getUnits()
  }
}