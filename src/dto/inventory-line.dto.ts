import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateInventoryLineDTO {
  @IsNotEmpty()
  invoice_quantity: number;

  @IsNotEmpty()
  exchange_quantity: number;

  @IsNotEmpty()
  invoice_unit_price: number;

  @IsNotEmpty()
  lot: string;

  @IsNotEmpty()
  manufacture_date: Date;

  @IsNotEmpty()
  expired_date: Date;

  @IsNotEmpty()
  promotion_id: string;

  @IsNotEmpty()
  sponsor_id: string;

  @IsNotEmpty()
  discount_rate: number = 0;

  @IsNotEmpty()
  discount_amount: number = 0;

  @IsNotEmpty()
  vat: number;
}

export class UpdateInventoryLineDTO {
  @IsOptional()
  invoice_quantity: number;

  @IsOptional()
  exchange_quantity: number;

  @IsOptional()
  invoice_unit_price: number;

  @IsOptional()
  lot: string;

  @IsOptional()
  manufacture_date: Date;

  @IsOptional()
  expired_date: Date;

  @IsOptional()
  promotion_id: string;

  @IsOptional()
  sponsor_id: string;

  @IsOptional()
  discount_rate: number;

  @IsOptional()
  discount_amount: number;

  @IsOptional()
  vat: number;
}
