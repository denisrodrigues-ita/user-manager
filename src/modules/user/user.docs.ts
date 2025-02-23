import { applyDecorators } from '@nestjs/common';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { UserModel } from './model/user.model';
import { UpdateUserDto } from './dto/update-user.dto';

export function DocsCreateUser() {
  return applyDecorators(
    ApiOkResponse({ type: UserModel, description: 'User profile' }),
  );
}

export function DocsFindUser() {
  return applyDecorators(
    ApiOkResponse({ type: UserModel, description: 'User profile' }),
  );
}

export function DocsUpdateUser() {
  return applyDecorators(
    ApiOkResponse({ type: UserModel, description: 'User profile' }),
    ApiBody({ type: UpdateUserDto, description: 'User data to update' }),
  );
}

export function DocsRemoveUser() {
  return applyDecorators(
    ApiOkResponse({
      description: 'User removed',
    }),
  );
}
