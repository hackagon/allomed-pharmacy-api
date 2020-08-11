import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PharmacologicalClassEntity } from 'src/entities/pharmacological-class.entity';
import { PharmacologicalClassService } from 'src/services/pharmacological-class.service';
import { PharmacologicalClassController } from 'src/controllers/pharmacological-class.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PharmacologicalClassEntity])],
  providers: [PharmacologicalClassService],
  controllers: [PharmacologicalClassController],
  exports: [PharmacologicalClassService],
})
export class PharmacologicalClassModule {}
