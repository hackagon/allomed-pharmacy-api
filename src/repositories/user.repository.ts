import { Repository, EntityRepository } from 'typeorm';
import { UserEntity } from 'src/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { LoginDTO } from 'src/dto/user.dto';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async validatePassword(userLoginDTO: LoginDTO): Promise<boolean> {
    const { email, password } = userLoginDTO;
    const found = await this.findOne({ email });

    if (found && (await bcrypt.compare(password, found.password))) return true;

    return false;
  }
}
