import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientEntity } from 'src/entities/ingredient.entity';
import { IngredientService } from 'src/services/ingredient.service';
import { IngredientController } from 'src/controllers/ingredient.controller';

@Module({
  imports: [TypeOrmModule.forFeature([IngredientEntity])],
  providers: [IngredientService],
  controllers: [IngredientController],
  exports: [IngredientService],
})
export class IngredientModule {}
