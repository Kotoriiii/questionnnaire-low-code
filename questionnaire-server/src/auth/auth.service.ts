/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(username: string, password: string) {
    const user = await this.userService.findOne(username);
    if (!user) {
      throw new ForbiddenException('用户不存在，请注册');
    }

    const isPasswordValid = await argon2.verify(user.password, password);
    if (!isPasswordValid) {
      throw new ForbiddenException('用户名或者密码错误');
    }

    const { password: p, _id, ...userInfo } = user.toObject();

    return {
      token: this.jwtService.sign(userInfo),
    };
  }
}
