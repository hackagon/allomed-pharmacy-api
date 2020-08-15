import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateConversionDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  is_active: boolean;
}

export class UpdateConversionDTO {
  @IsOptional()
  name: string;

  @IsOptional()
  quantity: number;

  @IsOptional()
  is_active: boolean;
}
