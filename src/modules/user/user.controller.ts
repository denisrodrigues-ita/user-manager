import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserModel } from './model/user.model';
import {
  DocsCreateUser,
  DocsFindUser,
  DocsRemoveUser,
  DocsUpdateUser,
} from './user.docs';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @DocsCreateUser()
  create(@Body() createUserDto: CreateUserDto): Promise<UserModel> {
    const user = this.userService.create(createUserDto);

    return user;
  }

  @Get(':email')
  @DocsFindUser()
  async findOne(@Param('email') email: string): Promise<UserModel> {
    const user = await this.userService.findOne(email);

    return user;
  }

  @Patch(':email')
  @DocsUpdateUser()
  async update(
    @Param('email') email: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserModel> {
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
