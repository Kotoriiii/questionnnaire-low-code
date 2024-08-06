import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Answer } from './schema/answer.schema';
import { CreateAnswerDTO } from './dto/create-answer.dto';

@Injectable()
export class AnswerService {
  // 依赖注入
  constructor(
    @InjectModel(Answer.name) private readonly answerModel: Model<Answer>,
  ) {}

  async create(answerDto: CreateAnswerDTO) {
    if (answerDto.questionId == null) {
      throw new HttpException('缺少问卷 id', HttpStatus.BAD_REQUEST);
    }

    const answer = new this.answerModel(answerDto);
    return await answer.save();
  }

  async count(questionId: string) {
    if (!questionId) return 0;
    return await this.answerModel.countDocuments({ questionId });
  }

  async findAll(questionId: string, opt: { page: number; pageSize: number }) {
    if (!questionId) return [];

    const { page = 1, pageSize = 10 } = opt;
    const list = await this.answerModel
      .find({ questionId })
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .sort({ createdAt: -1 });

    return list;
  }
}
