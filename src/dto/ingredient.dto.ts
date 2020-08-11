import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateIngredientDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  unii: string;
}

export class UpdateIngredientDTO {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  other_name: string;

  @IsOptional()
  unii: string;
}
