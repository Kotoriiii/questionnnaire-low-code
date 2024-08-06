import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class ComponentListDto {
  @IsString()
  @IsNotEmpty()
  fe_id: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsBoolean()
  @IsNotEmpty()
  isHidden: boolean;

  @IsBoolean()
  @IsNotEmpty()
  isLocked: boolean;

  @IsObject()
  @IsNotEmpty()
  props: object;
}

export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  desc: string;

  @IsString()
  @IsOptional()
  js: string;

  @IsString()
  @IsOptional()
  css: string;

  @IsBoolean()
  @IsNotEmpty()
  isPublished: boolean;

  @IsBoolean()
  @IsNotEmpty()
  isStar: boolean;

  @IsBoolean()
  @IsNotEmpty()
  sDeleted: boolean;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ComponentListDto)
  componentList: ComponentListDto[];
}
