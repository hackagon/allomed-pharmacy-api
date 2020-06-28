import { IsNotEmpty } from "class-validator";


export class CreateDosageUnitDTO {
  @IsNotEmpty()
  name: string;
}

export class UpdateDosageUnitDTO {
  name: string;
}