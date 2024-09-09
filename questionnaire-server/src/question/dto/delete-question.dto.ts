import {
  IsArray,
  IsString,
  ArrayNotEmpty,
  ArrayMinSize,
} from 'class-validator';

export class DeleteQuestionDto {
  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  @IsString({ each: true })
  ids: string[];
}
