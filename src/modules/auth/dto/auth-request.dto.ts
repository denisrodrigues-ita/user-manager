import { ApiProperty } from '@nestjs/swagger';

export class AuthRequestDto {
  @ApiProperty({
    example: 'john@example.com',
    format: 'email',
  })
  email: string;

  @ApiProperty({
    example: '123456',
  })
  password: string;
}
