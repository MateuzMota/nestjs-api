import { Controller, UseGuards, Request, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './shared/auth.service';
import { LocalAuthGuard } from './shared/local-auth.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @ApiCreatedResponse()
  @ApiTags('Login EndPoint')
  @Post('/auth/login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
}
