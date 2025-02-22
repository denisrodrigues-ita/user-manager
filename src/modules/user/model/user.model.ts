import { ApiProperty } from '@nestjs/swagger';
import { UserType } from '@prisma/client';

export class UserModel {
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
}
