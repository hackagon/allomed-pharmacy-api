import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ManufacturingEnterpriseEntity } from "src/entities/manufacturing-enterprise.entity";
import { ManufacturingEnterpriseController } from "src/controllers/manufacturing-enterprise.controller";
import { ManufacturingEnterpriseService } from "src/services/manufacturing-enterprise.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([ManufacturingEnterpriseEntity])
  ],
  controllers: [ManufacturingEnterpriseController],
  providers: [ManufacturingEnterpriseService],
  exports: [ManufacturingEnterpriseService]
})
export class DosageFormModule { }