import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserModel } from './model/user.model';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  private static readonly userSelect: Prisma.UserSelect = {
    id: true,
    name: true,
    email: true,
    type: true,
  };

  async create(data: Prisma.UserCreateInput): Promise<UserModel> {
    const user = await this.prisma.user.create({
      data,
      select: UserRepository.userSelect,
    });

    return user;
  }

  async findOne(where: Prisma.UserWhereUniqueInput): Promise<UserModel | null> {
    const user = await this.prisma.user.findUnique({
      where,
      select: UserRepository.userSelect,
    });

    return user;
  }

  async updata(
    where: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput,
  ): Promise<UserModel> {
    const user = await this.prisma.user.update({
      where,
      data,
      select: UserRepository.userSelect,
    });

    return user;
  }

  async remove(where: Prisma.UserWhereUniqueInput): Promise<void> {
    await this.prisma.user.delete({ where });
  }
}
