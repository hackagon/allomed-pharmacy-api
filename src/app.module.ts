import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import {
  PackageUnitModule,
  DosageUnitModule,
  DosageFormModule,
  ManufacturingEnterprise,
  ManufacturingCountry,
  ColorModule,
  FlavorModule,
  VolumeModule,
  ShapeModule,
  UserModule,
  IngredientModule,
  PharmacologicalClassModule,
  ValidatorModule,
  UnitModule,
  StoreModule,
  InventoryModule,
  InventoryLineModule,
  ConversionModule,
  InventoryStoringModule,
} from './modules';
import { CSVToMySQL } from './modules/csv-to-mysql.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    PackageUnitModule,
    DosageUnitModule,
    DosageFormModule,
    ManufacturingEnterprise,
    ManufacturingCountry,
    ColorModule,
    FlavorModule,
    VolumeModule,
    ShapeModule,
    UserModule,
    IngredientModule,
    PharmacologicalClassModule,
    ValidatorModule,
    UnitModule,
    StoreModule,
    InventoryModule,
    InventoryLineModule,
    ConversionModule,
    InventoryStoringModule,
    CSVToMySQL,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
