import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ManufacturingCountryEntity } from "src/entities/manufacturing-country.entity";
import { ManufacturingCountryController } from "src/controllers/manufacturing-country.controller";
import { ManufacturingCountryService } from "src/services/manufacturing-country.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([ManufacturingCountryEntity])
  ],
  controllers: [ManufacturingCountryController],
  providers: [ManufacturingCountryService],
  exports: [ManufacturingCountryService]
})
export class ManufacturingCountry { }