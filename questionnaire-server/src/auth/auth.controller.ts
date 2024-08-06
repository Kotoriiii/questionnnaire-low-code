import {
  Controller,
  Post,
  Body,
  Get,
  Request,
  // UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() userInfo: CreateUserDto) {
    const { username, password } = userInfo;

    return await this.authService.signIn(username, password);
  }

  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }
}
