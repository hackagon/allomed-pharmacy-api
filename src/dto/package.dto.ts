import { IsNotEmpty } from "class-validator";


export class CreatePackageDTO {
  @IsNotEmpty()
  name: string;
}

export class UpdatePackageDTO {
  @IsNotEmpty()
  name: string;
}