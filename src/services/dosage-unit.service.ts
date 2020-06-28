import { DosageUnitEntity } from "src/entities/dosage-unit.entity";
import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class DosageUnitService extends TypeOrmCrudService<DosageUnitEntity>{
  constructor(@InjectRepository(DosageUnitEntity) repo) {
    super(repo);
  }
}