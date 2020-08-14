import { IsNotEmpty } from 'class-validator';

export class CreateStoreDTO {
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  name: string;
}

export class UpdateStoreDTO {
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  name: string;
}
