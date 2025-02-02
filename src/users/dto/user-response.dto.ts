export class UserResponseDto {
  email: string;
  categories: number[];

  constructor(partial: Partial<UserResponseDto>) {
    Object.assign(this, partial);
  }
}
