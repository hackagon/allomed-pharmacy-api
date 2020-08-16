import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryStoringEntity } from 'src/entities/inventory-storing.entity';
import { InventoryStoringService } from 'src/services/inventory-storing.service';

@Module({
  imports: [TypeOrmModule.forFeature([InventoryStoringEntity])],
  providers: [InventoryStoringService],
  controllers: [],
  exports: [InventoryStoringService],
})
export class InventoryStoringModule {}
