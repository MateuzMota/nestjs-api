import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database.module';
import { UsersController } from './users.controller';
import { UsersProviders } from './users.providers';
import { UsersService } from './users.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [...UsersProviders, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
