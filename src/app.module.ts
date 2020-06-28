import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { PackageUnitModule, DosageUnitModule, DosageFormModule } from './modules';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    PackageUnitModule, DosageUnitModule, DosageFormModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
