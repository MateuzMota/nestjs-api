import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserResponse } from 'src/api-doc/users.response';
import { UserDTOResponse } from 'src/api-doc/users.dto.response';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  @ApiCreatedResponse({ type: UserDTOResponse })
  @ApiTags('Create a new user')
  create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserResponse })
  @ApiTags('Get all registered users')
  @Get('/')
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserResponse })
  @ApiTags('Get a user by id')
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: UserDTOResponse })
  @ApiTags('Update some information about user')
  @Put('/update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserResponse })
  @ApiTags('Delete an user with id')
  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
