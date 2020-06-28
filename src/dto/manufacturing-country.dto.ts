import { IsNotEmpty } from "class-validator";


export class CreateManufacturingCountryDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  code: string;
}

export class UpdateManufacturingCountryDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  code: string;
}