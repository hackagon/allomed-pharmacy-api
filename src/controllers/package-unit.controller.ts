import { Controller } from "@nestjs/common";
import { PackageUnitService } from "src/services/package-unit.service";
import { Crud } from "@nestjsx/crud";
import { PackageUnitEntity } from "src/entities/package-unit.entity";
import { CreatePackageUnitDTO, UpdatePackageUnitDTO } from '../dto/package-unit.dto';

@Crud({
  model: {
    type: PackageUnitEntity,
  },
  params: {
    id: {
      field: "id",
      type: "uuid",
      primary: true
    }
  },
  dto: {
    create: CreatePackageUnitDTO,
    update: UpdatePackageUnitDTO
  },
  routes: {
    deleteOneBase: {
      interceptors: [],
      decorators: [],
      returnDeleted: true,
    },
  }
})
@Controller("/package-units")
export class PackageUnitController {
  constructor(
    private service: PackageUnitService
  ) { }
}