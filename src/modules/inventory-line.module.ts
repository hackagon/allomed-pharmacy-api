import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryLineService } from 'src/services/inventory-line.service';
import { InventoryLineController } from 'src/controllers/inventory-line.controller';
import { InventoryLineEntity } from 'src/entities/inventory-line.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InventoryLineEntity])],
  providers: [InventoryLineService],
  controllers: [InventoryLineController],
  exports: [InventoryLineService],
})
export class InventoryLineModule {}
