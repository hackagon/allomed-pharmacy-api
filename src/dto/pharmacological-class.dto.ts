import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePharmacologicalClassDTO {
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  en_name: string;

  @IsNotEmpty()
  vn_name: string;
}

export class UpdatePharmacologicalClassDTO {
  @IsNotEmpty()
  code: string;

  @IsOptional()
  en_name: string;

  @IsOptional()
  vn_name: string;
}
