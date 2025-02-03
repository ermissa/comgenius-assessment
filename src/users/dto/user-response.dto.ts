import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email of the user',
  })
  email: string;

  @ApiProperty({
    example: [1, 2, 3],
    description: 'Array of category codes',
    type: [Number],
  })
  categories: number[];

  constructor(partial: Partial<UserResponseDto>) {
    Object.assign(this, partial);
  }
}
