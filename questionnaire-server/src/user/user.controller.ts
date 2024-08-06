/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Redirect,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() userDto: CreateUserDto) {
    try {
      const user = await this.userService.create(userDto);
      const { password, ...userInfo } = user.toObject();
      return userInfo;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('info')
  @Redirect('/api/auth/profile', 302) // http 状态码，GET 请求 - 301 永久，302 临时
  async info() {
    return;
  }

  @Public()
  @Post('login')
  @Redirect('/api/auth/login', 307) // http 状态码，POST 请求 - 308 永久，307 临时
  async login() {
    return;
  }
}
