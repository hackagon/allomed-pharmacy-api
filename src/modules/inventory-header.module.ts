import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryHeaderEntity } from 'src/entities/inventory-header.entity';
import { InventoryHeaderService } from 'src/services/inventory-header.service';
import { InventoryHeaderController } from 'src/controllers/inventory-header.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InventoryHeaderEntity])],
  providers: [InventoryHeaderService],
  controllers: [InventoryHeaderController],
  exports: [InventoryHeaderService],
})
export class InventoryHeaderModule {}
