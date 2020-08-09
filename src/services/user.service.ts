import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserCredentialDTO } from 'src/dto/user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService extends TypeOrmCrudService<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    repo,
    private jwtService: JwtService,
  ) {
    super(repo);
  }

  async signup(userCredentialDTO: UserCredentialDTO): Promise<void> {
    const { email, password, full_name = '' } = userCredentialDTO;
    const salt = await bcrypt.genSalt();

    const newUser = new UserEntity();
    newUser.email = email;
    newUser.salt = salt;
    newUser.password = await this.hashPassword(password, newUser.salt);
    newUser.full_name = full_name;

    try {
      await newUser.save();
    } catch (error) {
      if ((error.errno = 1062))
        throw new ConflictException('User already exists!');

      throw new InternalServerErrorException();
    }
  }

  async signin(
    userCredentialDTO: UserCredentialDTO,
  ): Promise<{ accessToken: string }> {
    const { email } = userCredentialDTO;

    const found = await this.validatePassword(userCredentialDTO);

    if (!found) throw new UnauthorizedException();

    const payload = { email };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }

  private async validatePassword(
    userCredentialDTO: UserCredentialDTO,
  ): Promise<string> {
    const { email, password } = userCredentialDTO;

    const found = await this.findOne({ email });

    if (found && (await found.validatePassword(password))) {
      return found.email;
    }

    return null;
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
