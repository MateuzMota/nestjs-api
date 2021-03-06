import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  readonly id: number;
  readonly email: string;
  readonly name: string;
  readonly phone: string;
  readonly password: string;
}
