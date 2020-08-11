import { Controller, Post, Body } from '@nestjs/common';
import {
  CrudController,
  Crud,
  Override,
  ParsedRequest,
  CrudRequest,
  ParsedBody,
} from '@nestjsx/crud';
import { UserEntity } from 'src/entities/user.entity';
import { UserService } from 'src/services/user.service';
import { UpdateUserDTO, UserCredentialDTO, LoginDTO } from 'src/dto/user.dto';

@Crud({
  model: {
    type: UserEntity,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  dto: {
    create: UserCredentialDTO,
    update: UpdateUserDTO,
  },
  routes: {
    deleteOneBase: {
      interceptors: [],
      decorators: [],
      returnDeleted: true,
    },
  },
})
@Controller('users')
export class UserController implements CrudController<UserEntity> {
  constructor(public service: UserService) {}

  get base(): CrudController<UserEntity> {
    return this;
  }

  @Override('createOneBase')
  async createUser(
    @ParsedBody() userCredentialDTO: UserCredentialDTO,
  ): Promise<void> {
    return this.service.createUser(userCredentialDTO);
  }

  @Post('login')
  async login(
    @Body() userLoginDTO: LoginDTO,
  ): Promise<{ accessToken: string }> {
    return this.service.login(userLoginDTO);
  }
}
