import {
  ValidatorConstraintInterface,
  ValidatorConstraint,
  ValidationArguments,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';
import { getManager } from 'typeorm';
import { UserEntity } from 'src/entities/user.entity';

@ValidatorConstraint({ name: 'customCheckEmail', async: true })
export class IsEmailUniqueConstraint implements ValidatorConstraintInterface {
  async validate(email: string, args: ValidationArguments): Promise<boolean> {
    const entityManager = getManager();

    const found = await entityManager.findOne(UserEntity, { email });

    if (found) return false;

    return true;
  }

  defaultMessage(): string {
    return 'Email $value already exists';
  }
}

export function IsEmailUnique(validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      name: 'isEmailUnique',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: IsEmailUniqueConstraint,
    });
  };
}
