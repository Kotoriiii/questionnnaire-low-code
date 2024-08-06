import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';

class AnswerListDto {
  @IsString()
  @IsNotEmpty()
  componentFeId: string;

  @IsString()
  @IsNotEmpty()
  value: string;
}

export class CreateAnswerDTO {
  @IsString()
  @IsNotEmpty()
  questionId: string;

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => AnswerListDto)
  answerList: AnswerListDto[];
}
