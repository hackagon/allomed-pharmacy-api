import { IsNotEmpty } from 'class-validator';

export class CreateInventoryStoringDTO {
  @IsNotEmpty()
  month: number;

  @IsNotEmpty()
  year: number;

  @IsNotEmpty()
  existing_quantity: number = 0;

  @IsNotEmpty()
  import_quantity: number;

  @IsNotEmpty()
  export_quantity: number;
}

export class UpdateInventoryStoringDTO {}
