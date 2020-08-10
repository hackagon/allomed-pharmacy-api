import { IsNotEmpty, IsOptional, IsEmail } from 'class-validator';

export class UserCredentialDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsOptional()
  full_name: string;
}

export class UpdateUserDTO {}
