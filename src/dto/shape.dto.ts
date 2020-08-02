import { IsNotEmpty } from 'class-validator';

export class CreateShapeDTO {
  @IsNotEmpty()
  code: string;
}

export class UpdateShapeDTO {
  @IsNotEmpty()
  code: string;
}
