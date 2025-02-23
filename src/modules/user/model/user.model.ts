import { UserType } from '@prisma/client';

export class UserModel {
  id: string;
  name: string;
  email: string;
  type: UserType;
  password: string;
}
