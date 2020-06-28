import { Controller, Get, Post, Patch, Delete, Param, Body } from "@nestjs/common";
import { PackageUnitService } from "src/services/package-unit.service";
import { PackageUnitEntity } from "src/entities/package-unit.entity";
import { CreateDosageUnitDTO } from "src/dto/dosage-unit.dto";

@Controller("/package-units")
export class PackageUnitController {
  constructor(
    private unitService: PackageUnitService
  ) { }

  @Get("/")
  async getUnits(): Promise<PackageUnitEntity[]> {
    return await this.unitService.getUnits()
  }

  @Get("/:id")
  async getUnitById(@Param() id: string): Promise<PackageUnitEntity> {
    return await this.unitService.getUnitById(id)
  }

  @Post("/")
  async createUnit(@Body() data: CreateDosageUnitDTO): Promise<PackageUnitEntity> {
    return await this.unitService.createUnit(data)
  }

  @Patch("/:id")
  async updateUnitById(@Param() id: string, @Body() data: CreateDosageUnitDTO): Promise<PackageUnitEntity> {
    return await this.unitService.updateUnitById(id, data)
  }

  @Delete("/:id")
  async deleteUnitById(@Param() id: string): Promise<PackageUnitEntity> {
    return await this.unitService.deleteUnitById(id)
  }
}