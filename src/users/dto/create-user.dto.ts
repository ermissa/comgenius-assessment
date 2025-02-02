import { IsArray, IsEmail, IsNumber, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsArray()
  @IsNumber({}, { each: true })
  @IsOptional()
  categories?: number[];
}
