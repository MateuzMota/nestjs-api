import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<User>,
  ) {}

  public create(createUserDto: CreateUserDto) {
    const user: User = this.usersRepository.create();
    const { email } = createUserDto;
    user.email = email;
    this.usersRepository.save(user);

    return user;
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  public findOne = async (id: number) => {
    const user = this.usersRepository.findOneOrFail(id);

    return user;
  };

  public update = async (id: number, updateUserDto: UpdateUserDto) => {
    const updatedUser = this.usersRepository.update(id, updateUserDto);

    return updatedUser;
  };

  public remove = async (id: number) => {
    const deletedUser = this.usersRepository.delete(id);

    return deletedUser;
  };
}
