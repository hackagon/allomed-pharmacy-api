import { IsNotEmpty, Matches, IsOptional } from 'class-validator';

export class UserCredentialDTO {
  @IsNotEmpty()
  @Matches(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  )
  email: string;

  @IsNotEmpty()
  password: string;

  @IsOptional()
  full_name: string;
}

export class UpdateUserDTO {}
