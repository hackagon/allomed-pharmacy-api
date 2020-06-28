import { DosageFormEntity } from "src/entities/dosage-form.entity";
import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class DosageFormService extends TypeOrmCrudService<DosageFormEntity>{
  constructor(@InjectRepository(DosageFormEntity) repo) {
    super(repo);
  }
}