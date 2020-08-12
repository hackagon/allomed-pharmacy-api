import { IsNotEmpty, IsOptional, IsEmail, Validate } from 'class-validator';
import { IsEmailUnique } from 'src/validator/isEmailUnique';

export class UserCredentialDTO {
  @IsNotEmpty()
  @IsEmail()
  @IsEmailUnique()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsOptional()
  full_name: string;
}

export class LoginDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class UpdateUserDTO {
  @IsOptional()
  password: string;

  @IsOptional()
  full_name: string;
}
