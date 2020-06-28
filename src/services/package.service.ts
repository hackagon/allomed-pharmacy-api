import { PackageEntity } from "src/entities/package.entity";
import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PackageService extends TypeOrmCrudService<PackageEntity>{
  constructor(@InjectRepository(PackageEntity) repo) {
    super(repo);
  }
}