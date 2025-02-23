import { ApiProperty } from '@nestjs/swagger';
import { UserType } from '@prisma/client';
import { UserModel } from '../model/user.model';

export class UserResponseDto {
  @ApiProperty({
    example: 'ad8d8d8d8-d8d8-d8d8-d8d8-d8d8d8d8d8d8',
    description: 'User ID',
    format: 'uuid',
  })
  id: string;

  @ApiProperty({ example: 'John Doe', description: 'User name' })
  name: string;

  @ApiProperty({ example: 'john@example.com', format: 'email' })
  email: string;

  @ApiProperty({ example: 'USER', description: 'User type' })
  type: UserType;

  constructor(data: UserModel) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.type = data.type;
  }
}
