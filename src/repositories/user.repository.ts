import { Repository, EntityRepository } from 'typeorm';
import { UserEntity } from 'src/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UserCredentialDTO } from 'src/dto/user.dto';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async validatePassword(userCredentialDTO: UserCredentialDTO) {
    const { email, password } = userCredentialDTO;
    const found = await this.getUser(email);

    if (found && (await bcrypt.compare(password, found.password))) {
      return found.email;
    }

    return null;
  }

  async getUser(email: string): Promise<UserEntity> {
    const found = await this.findOne({ email });

    if (!found) return null;

    return found;
  }
}
