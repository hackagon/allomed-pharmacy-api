import { Controller, Post } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { PackageEntity } from "src/entities/package.entity";
import { PackageService } from "src/services/package.service";
import { CreatePackageDTO } from "src/dto/package.dto";

@Crud({
  model: {
    type: PackageEntity,
  },
  params: {
    id: {
      field: "id",
      type: "uuid",
      primary: true
    }
  },
  dto: {
    create: CreatePackageDTO,
    update: CreatePackageDTO
  },
  routes: {
    deleteOneBase: {
      interceptors: [],
      decorators: [],
      returnDeleted: true,
    },
  }
})
@Controller("/packages")
export class PackageController {
  constructor(public service: PackageService) { }
}