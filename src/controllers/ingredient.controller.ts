import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { IngredientEntity } from 'src/entities/ingredient.entity';
import { IngredientService } from 'src/services/ingredient.service';
import {
  CreateIngredientDTO,
  UpdateIngredientDTO,
} from 'src/dto/ingredient.dto';

@Crud({
  model: {
    type: IngredientEntity,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  dto: {
    create: CreateIngredientDTO,
    update: UpdateIngredientDTO,
  },
  routes: {
    deleteOneBase: {
      interceptors: [],
      decorators: [],
      returnDeleted: true,
    },
  },
  query: {
    join: {
      pharmacological_class_id: {
        eager: true,
      },
    },
  },
})
@Controller('ingredients')
export class IngredientController implements CrudController<IngredientEntity> {
  constructor(public service: IngredientService) {}
}
