import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../user/user.repository';
import { UserModel } from '../user/model/user.model';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository,
    private readonly configService: ConfigService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.userRepository.findOne({ email });

    if (!user || user.password !== password)
      throw new BadRequestException('Invalid credentials');

    return this.login(user);
  }

  private login(user: UserModel) {
    const payload = {
      email: user.email,
      sub: user.id,
      name: user.name,
      role: user.type,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
