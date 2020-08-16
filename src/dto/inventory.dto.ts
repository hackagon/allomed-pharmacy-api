import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateInventoryDTO {
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  invoice_number: string;

  @IsNotEmpty()
  document_date: Date;

  @IsNotEmpty()
  delivery_date: Date;
}

export class UpdateInventoryDTO {
  @IsOptional()
  code: string;

  @IsOptional()
  invoice_number: string;

  @IsOptional()
  document_date: Date;

  @IsOptional()
  delivery_date: Date;
}
