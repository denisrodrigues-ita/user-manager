import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRequestDto } from './dto/auth-request.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() authRequestDto: AuthRequestDto): Promise<{ access_token: string }> {
    const accessToken = await this.authService.validateUser(
      authRequestDto.email,
      authRequestDto.password,
    );

    return accessToken;
  }
}
