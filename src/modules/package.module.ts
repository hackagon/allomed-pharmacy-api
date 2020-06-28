import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PackageController } from "src/controllers/package.controller";
import { PackageService } from "src/services/package.service";
import { PackageEntity } from "src/entities/package.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([PackageEntity])
  ],
  controllers: [PackageController],
  providers: [PackageService]
})
export class PackageModule { }