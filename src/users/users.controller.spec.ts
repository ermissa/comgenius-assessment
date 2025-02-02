import { ConflictException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let usersRepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    usersRepository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should create a user', async () => {
    const createUserDto = {
      email: 'test@example.com',
      categories: [1, 2, 3],
    };

    jest.spyOn(usersRepository, 'findOne').mockResolvedValue(null);
    jest
      .spyOn(usersRepository, 'create')
      .mockReturnValue(createUserDto as User);
    jest
      .spyOn(usersRepository, 'save')
      .mockResolvedValue(createUserDto as User);

    const result = await controller.create(createUserDto);
    expect(result.email).toBe(createUserDto.email);
    expect(result.categories).toEqual(createUserDto.categories);
  });

  it('should find a user', async () => {
    const user = {
      email: 'test@example.com',
      categories: [1, 2, 3],
    };

    jest.spyOn(usersRepository, 'findOne').mockResolvedValue(user as User);

    const result = await controller.findOne(user.email);
    expect(result.email).toBe(user.email);
    expect(result.categories).toEqual(user.categories);
  });

  it('should throw NotFoundException when user not found', async () => {
    jest.spyOn(usersRepository, 'findOne').mockResolvedValue(null);

    await expect(controller.findOne('nonexistent@example.com')).rejects.toThrow(
      NotFoundException,
    );
  });

  it('should throw ConflictException when creating duplicate user', async () => {
    const createUserDto = {
      email: 'test@example.com',
      categories: [1, 2, 3],
    };

    jest
      .spyOn(usersRepository, 'findOne')
      .mockResolvedValue(createUserDto as User);

    await expect(controller.create(createUserDto)).rejects.toThrow(
      ConflictException,
    );
  });
});
