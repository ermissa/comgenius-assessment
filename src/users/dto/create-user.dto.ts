import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEmail, IsNumber, IsOptional } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email of the user',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: [1, 2, 3],
    description: 'Array of category codes',
    type: [Number],
    required: false,
  })
  @IsArray()
  @IsNumber({}, { each: true })
  @IsOptional()
  categories?: number[];
}
