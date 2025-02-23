import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  DocsCreateUser,
  DocsFindUser,
  DocsRemoveUser,
  DocsUpdateUser,
} from './user.docs';
import { UserResponseDto } from './dto/user-response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @DocsCreateUser()
  create(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const user = this.userService.create(createUserDto);

    return user;
  }

  @Get(':email')
  @DocsFindUser()
  async findOne(@Param('email') email: string): Promise<UserResponseDto> {
    const user = await this.userService.findOne(email);

    return user;
  }

  @Patch(':email')
  @DocsUpdateUser()
  async update(
    @Param('email') email: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserResponseDto> {
    const userUpdated = await this.userService.update(email, updateUserDto);

    return userUpdated;
  }

  @Delete(':email')
  @DocsRemoveUser()
  async remove(@Param('email') email: string): Promise<{ message: string }> {
    const result = await this.userService.remove(email);

    return result;
  }
}
