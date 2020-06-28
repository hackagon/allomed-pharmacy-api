import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import {
  PackageUnitModule, DosageUnitModule, DosageFormModule,
  ManufacturingEnterprise, ManufacturingCountry
} from './modules';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    PackageUnitModule, DosageUnitModule, DosageFormModule,
    ManufacturingEnterprise, ManufacturingCountry
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
