import { IsNotEmpty } from "class-validator";


export class CreateDosageFormDTO {
  @IsNotEmpty()
  name: string;
}

export class UpdateDosageFormDTO {
  @IsNotEmpty()
  name: string;
}