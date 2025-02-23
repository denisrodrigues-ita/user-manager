import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import { UserResponseDto } from './dto/user-response.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const userExists = await this.userRepository.findOne({
      email: createUserDto.email,
    });

    if (userExists) throw new BadRequestException('User already exists');

    const user = await this.userRepository.create(createUserDto);

    const userResponse = new UserResponseDto(user);

    return userResponse;
  }

  async findOne(email: string): Promise<UserResponseDto> {
    const user = await this.userRepository.findOne({ email });

    if (!user) throw new NotFoundException('User not found');

    const userResponse = new UserResponseDto(user);

    return userResponse;
  }

  async update(
    email: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserResponseDto> {
    const user = await this.userRepository.findOne({ email });

    if (!user) throw new NotFoundException('User not found');

    const userUpdated = await this.userRepository.updata(
      { email },
      updateUserDto,
    );

    const userResponse = new UserResponseDto(userUpdated);

    return userResponse;
  }

  async remove(email: string): Promise<{ message: string }> {
    const user = await this.userRepository.findOne({ email });

    if (!user) throw new NotFoundException('User not found');

    await this.userRepository.remove({ email });

    return { message: 'User deleted' };
  }
}
