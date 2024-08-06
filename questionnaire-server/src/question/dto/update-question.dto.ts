import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

class UpdateComponentListDto {
  @IsString()
  @IsOptional()
  fe_id?: string;

  @IsString()
  @IsOptional()
  type?: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsBoolean()
  @IsOptional()
  isHidden?: boolean;

  @IsBoolean()
  @IsOptional()
  isLocked?: boolean;

  @IsObject()
  @IsOptional()
  props?: object;
}

export class UpdateQuestionDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  desc?: string;

  @IsString()
  @IsOptional()
  js?: string;

  @IsString()
  @IsOptional()
  css?: string;

  @IsBoolean()
  @IsOptional()
  isPublished?: boolean;

  @IsBoolean()
  @IsOptional()
  isStar?: boolean;

  @IsBoolean()
  @IsOptional()
  isDeleted?: boolean;

  @IsString()
  @IsOptional()
  author?: string;

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => UpdateComponentListDto)
  componentList?: UpdateComponentListDto[];
}
