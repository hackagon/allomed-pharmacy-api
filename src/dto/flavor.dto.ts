import { IsNotEmpty } from 'class-validator';

export class CreateFlavorDTO {
  @IsNotEmpty()
  code: string;
}

export class UpdateFlavorDTO {
  @IsNotEmpty()
  code: string;
}
