import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import { UserModel } from './model/user.model';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async create(createUserDto: CreateUserDto): Promise<UserModel> {
    const userExists = await this.userRepository.findOne({
      email: createUserDto.email,
    });

    if (userExists) throw new BadRequestException('User already exists');

    const user = await this.userRepository.create(createUserDto);

    return user;
  }

  async findOne(email: string): Promise<UserModel> {
    const user = await this.userRepository.findOne({ email });

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  async update(
    email: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserModel> {
    const user = await this.userRepository.findOne({ email });

    if (!user) throw new NotFoundException('User not found');

    const userUpdated = await this.userRepository.updata(
      { email },
      updateUserDto,
    );

    return userUpdated;
  }

  async remove(email: string): Promise<{ message: string }> {
    const user = await this.userRepository.findOne({ email });

    if (!user) throw new NotFoundException('User not found');

    await this.userRepository.remove({ email });

    return { message: 'User deleted' };
  }
}
