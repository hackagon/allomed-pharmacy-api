import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PackageUnitRepository } from "src/repositories/package-unit.repository";
import { PackageUnitEntity } from "src/entities/package-unit.entity";
import { CreateUnitDTO, UpdateUnitDTO } from "src/dto/unit.dto";
import * as _ from 'lodash';

@Injectable()
export class PackageUnitService {
  constructor(
    @InjectRepository(PackageUnitRepository) private packageUnitRepository: PackageUnitRepository
  ) { }

  async getUnits(): Promise<PackageUnitEntity[]> {
    return await this.packageUnitRepository.find()
  }

  async getUnitById(id: string): Promise<PackageUnitEntity> {
    const foundUnit = await this.packageUnitRepository.findOne(id);
    if (foundUnit) throw new NotFoundException(`Unit ${id} is not found`)

    return foundUnit;
  }

  async createUnit(data: CreateUnitDTO): Promise<PackageUnitEntity> {
    const newUnit = this.packageUnitRepository.create(data);
    return await newUnit.save();
  }

  async updateUnitById(id: string, data: UpdateUnitDTO): Promise<PackageUnitEntity> {
    let foundUnit = await this.getUnitById(id);

    foundUnit = _.assign(foundUnit, data, {})
    await foundUnit.save();

    return foundUnit;
  }

  async deleteUnitById(id: string): Promise<PackageUnitEntity> {
    const foundUnit = await this.getUnitById(id);
    await this.packageUnitRepository.delete(id);
    return foundUnit;
  }
}