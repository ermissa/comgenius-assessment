import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(
    @Body(ValidationPipe) createUserDto: CreateUserDto,
  ): Promise<UserResponseDto> {
    const user = await this.usersService.create(createUserDto);
    return new UserResponseDto({
      email: user.email,
      categories: user.categories,
    });
  }

  @Get(':email')
  async findOne(@Param('email') email: string): Promise<UserResponseDto> {
    const user = await this.usersService.findOne(email);
    if (!user) {
      throw new NotFoundException(`user with email ${email} not found`);
    }

    return new UserResponseDto({
      email: user.email,
      categories: user.categories,
    });
  }
}
