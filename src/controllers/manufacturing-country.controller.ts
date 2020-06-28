import { Controller, Post } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { ManufacturingCountryEntity } from "src/entities/manufacturing-country.entity";
import { ManufacturingCountryService } from "src/services/manufacturing-country.service";
import { CreateManufacturingCountryDTO } from "src/dto/manufacturing-country.dto";

@Crud({
  model: {
    type: ManufacturingCountryEntity,
  },
  params: {
    id: {
      field: "id",
      type: "uuid",
      primary: true
    }
  },
  dto: {
    create: CreateManufacturingCountryDTO,
    update: CreateManufacturingCountryDTO
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
export class ManufacturingCountryController {
  constructor(public service: ManufacturingCountryService) { }
}