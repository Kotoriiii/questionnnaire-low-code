import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as argon2 from 'argon2';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(userData: CreateUserDto) {
    const createdUser = new this.userModel(userData);
    createdUser.password = await argon2.hash(createdUser.password);
    return await createdUser.save();
  }

  async findOne(username: string) {
    return await this.userModel.findOne({ username });
  }
}
