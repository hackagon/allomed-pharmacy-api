import { ManufacturingEnterpriseEntity } from "src/entities/manufacturing-enterprise.entity";
import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ManufacturingEnterpriseService extends TypeOrmCrudService<ManufacturingEnterpriseEntity>{
  constructor(@InjectRepository(ManufacturingEnterpriseEntity) repo) {
    super(repo);
  }
}