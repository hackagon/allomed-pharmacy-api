import { IsNotEmpty } from 'class-validator';

export class CreateVolumeDTO {
  @IsNotEmpty()
  code: string;
}

export class UpdateVolumeDTO {
  @IsNotEmpty()
  code: string;
}
