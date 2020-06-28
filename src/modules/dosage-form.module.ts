import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DosageFormEntity } from "src/entities/dosage-form.entity";
import { DosageFormController } from "src/controllers/dosage-form.controller";
import { DosageFormService } from "src/services/dosage-form.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([DosageFormEntity])
  ],
  controllers: [DosageFormController],
  providers: [DosageFormService],
  exports: [DosageFormService]
})
export class DosageFormModule { }