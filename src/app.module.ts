import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { PackageUnitModule } from './modules/package-unit.module';
import { DosageUnitModule } from './modules/dosage-unit.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    PackageUnitModule, DosageUnitModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
