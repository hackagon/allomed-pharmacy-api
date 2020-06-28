import { IsNotEmpty } from "class-validator";


export class CreateManufacturingEnterpriseDTO {
  @IsNotEmpty()
  name: string;

  shortName: string;

  fax: string;

  email: string;

  address: string;

  taxIdentificationNumber: string;
}

export class UpdateManufacturingEnterpriseDTO {
  @IsNotEmpty()
  name: string;

  shortName: string;

  fax: string;

  email: string;

  address: string;

  taxIdentificationNumber: string;
}