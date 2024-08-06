import { Body, Controller, Post } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { Public } from 'src/auth/decorators/public.decorator';
import { CreateAnswerDTO } from './dto/create-answer.dto';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Public()
  @Post()
  async create(@Body() answerDto: CreateAnswerDTO) {
    return await this.answerService.create(answerDto);
  }
}
