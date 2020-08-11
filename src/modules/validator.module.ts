import { Module } from '@nestjs/common';
import { IsEmailUniqueConstraint } from 'src/validator/isEmailUnique';

@Module({
  imports: [],
  providers: [IsEmailUniqueConstraint],
  exports: [],
})
export class ValidatorModule {}
