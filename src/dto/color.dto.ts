import { IsNotEmpty } from 'class-validator';

export class CreateColorDTO {
  @IsNotEmpty()
  code: string;
}

export class UpdateColorDTO {
  @IsNotEmpty()
  code: string;
}
