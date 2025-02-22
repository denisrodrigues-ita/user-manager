import { ApiProperty } from '@nestjs/swagger';
import { UserType } from '@prisma/client';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'John Doe',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'john@example.com',
    format: 'email',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '123456',
  })
  password: string;

  @ApiProperty({
    example: 'USER',
  })
  type: UserType;
}
