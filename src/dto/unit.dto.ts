import { IsNotEmpty } from 'class-validator';

export class CreateUnitDTO {
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  en_name: string;

  @IsNotEmpty()
  vn_name: string;
}

export class UpdateUnitDTO {
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  en_name: string;

  @IsNotEmpty()
  vn_name: string;
}
