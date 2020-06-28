import { Controller, Post } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { DosageFormEntity } from "src/entities/dosage-form.entity";
import { DosageFormService } from "src/services/dosage-form.service";
import { CreateDosageFormDTO } from "src/dto/dosage-form.dto";

@Crud({
  model: {
    type: DosageFormEntity,
  },
  params: {
    id: {
      field: "id",
      type: "uuid",
      primary: true
    }
  },
  dto: {
    create: CreateDosageFormDTO,
    update: CreateDosageFormDTO
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
export class DosageFormController {
  constructor(public service: DosageFormService) { }
}