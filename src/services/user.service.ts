import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserCredentialDTO, LoginDTO } from 'src/dto/user.dto';
import { UserRepository } from 'src/repositories/user.repository';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService extends TypeOrmCrudService<UserEntity> {
  constructor(
    @InjectRepository(UserRepository)
    repo,
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {
    super(repo);
  }

  async createUser(userCredentialDTO: UserCredentialDTO): Promise<UserEntity> {
    const { email, password, full_name = '' } = userCredentialDTO;
    const newUser = await this.repo.create({ email, password, full_name });

    await newUser.save();

    return newUser;
  }

  async login(userLoginDTO: LoginDTO): Promise<{ accessToken: string }> {
    const isPasswordValidated = await this.userRepository.validatePassword(
      userLoginDTO,
    );

    if (!isPasswordValidated) throw new UnauthorizedException();

    const { email } = userLoginDTO;
    const payload = { email };

    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
}
