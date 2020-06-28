import { Controller, Post } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { DosageUnitEntity } from "src/entities/dosage-unit.entity";
import { DosageUnitService } from "src/services/dosage-unit.service";
import { CreateDosageUnitDTO } from "src/dto/dosage-unit.dto";

@Crud({
  model: {
    type: DosageUnitEntity,
  },
  params: {
    id: {
      field: "id",
      type: "uuid",
      primary: true
    }
  },
  dto: {
    create: CreateDosageUnitDTO,
    update: CreateDosageUnitDTO
  },
  routes: {
    deleteOneBase: {
      interceptors: [],
      decorators: [],
      returnDeleted: true,
    },
  }
})
@Controller("/dosage-units")
export class DosageUnitController {
  constructor(public service: DosageUnitService) { }
}