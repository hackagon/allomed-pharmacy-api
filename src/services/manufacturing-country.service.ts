import { ManufacturingCountryEntity } from "src/entities/manufacturing-country.entity";
import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ManufacturingCountryService extends TypeOrmCrudService<ManufacturingCountryEntity>{
  constructor(@InjectRepository(ManufacturingCountryEntity) repo) {
    super(repo);
  }
}