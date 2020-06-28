import { Controller, Post } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { ManufacturingEnterpriseEntity } from "src/entities/manufacturing-enterprise.entity";
import { ManufacturingEnterpriseService } from "src/services/manufacturing-enterprise.service";
import { CreateManufacturingEnterpriseDTO } from "src/dto/manufacturing-enterprise.dto";

@Crud({
  model: {
    type: ManufacturingEnterpriseEntity,
  },
  params: {
    id: {
      field: "id",
      type: "uuid",
      primary: true
    }
  },
  dto: {
    create: CreateManufacturingEnterpriseDTO,
    update: CreateManufacturingEnterpriseDTO
  },
  routes: {
    deleteOneBase: {
      interceptors: [],
      decorators: [],
      returnDeleted: true,
    },
  }
})
@Controller("/dosage-forms")
export class ManufacturingEnterpriseController {
  constructor(public service: ManufacturingEnterpriseService) { }
}