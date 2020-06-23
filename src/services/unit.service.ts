import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UnitRepository } from "src/repositories/unit.repository";
import { Unit } from "src/entities/unit.entity";
import { CreateUnitDTO, UpdateUnitDTO } from "src/dto/unit.dto";
import * as _ from 'lodash';

@Injectable()
export class UnitService {
  constructor(
    @InjectRepository(UnitRepository) private unitRepository: UnitRepository
  ) { }

  async getUnits(): Promise<Unit[]> {
    return await this.unitRepository.find()
  }

  async getUnitById(id: string): Promise<Unit> {
    const foundUnit = await this.unitRepository.findOne(id);
    if (foundUnit) throw new NotFoundException(`Unit ${id} is not found`)

    return foundUnit;
  }

  async createUnit(data: CreateUnitDTO): Promise<Unit> {
    const newUnit = this.unitRepository.create(data);
    return await newUnit.save();
  }

  async updateUnitById(id: string, data: UpdateUnitDTO): Promise<Unit> {
    let foundUnit = await this.getUnitById(id);

    foundUnit = _.assign(foundUnit, data, {})
    await foundUnit.save();

    return foundUnit;
  }

  async deleteUnitById(id: string): Promise<Unit> {
    const foundUnit = await this.getUnitById(id);
    await this.unitRepository.delete(id);
    return foundUnit;
  }
}